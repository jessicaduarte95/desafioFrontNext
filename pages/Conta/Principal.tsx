import {
    StyledButton,
    StyledContainerPrincipal
} from '../../styles/Conta/PrincipalStyled'
import {
    StyledModalOverlay,
    StyledContainerModal,
    StyledModalTitle
} from '../../styles/Conta/ModalStyled';
import {
    StyleContainerButton,
    StyleCancelButton,
    StyleNextButton
} from '../../styles/Conta/ButtonStyled';
import ModalInserir from '../../pages/Conta/ModalInserir';
import { useAppSelector, AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { steps } from '../../Redux/Cadastro/sliceSteps';
import { cadastro } from '../../Redux/Cadastro/slice';
import ModalCanaisMensagem from './ModalCanaisMensagem';
import ModalFormaPagamento from './ModalFormaPagamento';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { ToastContainer, toast } from 'react-toastify';

interface DataForm {
    idProfissional: string;
    idBanco: string;
    idTipoConta: string;
    agencia: number;
    conta: number;
    idTipoPessoa: string;
    CPF: number;
    telefone: number;
    nome: string;
    CEP: number;
    idEstado: string;
    cidade: string;
    endereco: string;
    numero: string;
    msg: string;
    meioPagamento1: boolean;
    meioPagamento2: boolean;
    meioPagamento3: boolean;
    cobrarMulta: boolean;
    valorMulta: string;
    jurosMulta: boolean;
}
export default function Principal() {

    const userSchemaCadastro = z.object({
        idProfissional: z.string().min(1),
        idBanco: z.string(),
        idTipoConta: z.string(),
        agencia: z.string(),
        conta: z.string(),
        idTipoPessoa: z.string(),
        CPF: z.string().min(11),
        telefone: z.string().min(10),
        nome: z.string(),
        CEP: z.string().min(8),
        idEstado: z.string(),
        cidade: z.string(),
        endereco: z.string(),
        numero: z.string().min(1)
    });

    const { register, handleSubmit, reset } = useForm<DataForm>()
    const openModal = useAppSelector((state) => state.stepsCadastro);
    const dispatch = useDispatch<AppDispatch>();

    const open = () => {
        dispatch(steps("cadastro"));
    }

    const handleCloseModal = () => {
        dispatch(steps(""));
    }

    const onSubmit: SubmitHandler<DataForm> = (data) => {
        console.log("Data123", data)

        if (openModal.step == "cadastro") {
            try {
                userSchemaCadastro.parse(data);
                dispatch(steps("canaisMensagem"));
            } catch (error) {
                console.error('Erro de validação:', error);
                toast.error("Atenção! Todos os campos devem ser preenchidos e com dados válidos.", { theme: "colored" });
            }
        } else if (openModal.step == "canaisMensagem") {
            try {
                dispatch(steps("formaPagamento"));
            } catch (error) {
                console.error('Erro de validação:', error);
                toast.error("Atenção! Todos os campos devem ser preenchidos e com dados válidos.", { theme: "colored" });
            }
        } else if (openModal.step == "formaPagamento") {
            try {
                dispatch(cadastro(data));
                dispatch(steps(""));
                reset();
            } catch (error) {
                console.error('Erro de validação:', error);
                toast.error("Atenção! Todos os campos devem ser preenchidos e com dados válidos.", { theme: "colored" });
            }
        }
        
    }

    return (
        <StyledContainerPrincipal>
            <StyledButton onClick={open}>+<strong></strong> Ativar o PsicoBank</StyledButton>
            {
                openModal.step !== "" ?

                    <StyledModalOverlay>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {
                                openModal.step == "cadastro" ?

                                    <StyledContainerModal>
                                        <StyledModalTitle>Ativar o PsicoBank</StyledModalTitle>
                                        <ToastContainer />
                                        <ModalInserir register={register} />
                                        <StyleContainerButton>
                                            <StyleCancelButton onClick={handleCloseModal}>Cancelar</StyleCancelButton>
                                            <StyleNextButton type='submit' >Próximo</StyleNextButton>
                                        </StyleContainerButton>
                                    </StyledContainerModal>
                                    :
                                    openModal.step == "canaisMensagem" ?
                                        <StyledContainerModal>
                                            <StyledModalTitle>Ativar o PsicoBank</StyledModalTitle>
                                            <ToastContainer />
                                            <ModalCanaisMensagem register={register} />
                                            <StyleContainerButton>
                                                <StyleCancelButton onClick={handleCloseModal}>Cancelar</StyleCancelButton>
                                                <StyleNextButton type='submit'>Próximo</StyleNextButton>
                                            </StyleContainerButton>
                                        </StyledContainerModal>
                                        :
                                        openModal.step == "formaPagamento" ?
                                            <StyledContainerModal>
                                                <StyledModalTitle>Ativar o PsicoBank</StyledModalTitle>
                                                <ToastContainer />
                                                <ModalFormaPagamento register={register} />
                                                <StyleContainerButton>
                                                    <StyleCancelButton onClick={handleCloseModal}>Cancelar</StyleCancelButton>
                                                    <StyleNextButton type='submit'>Próximo</StyleNextButton>
                                                </StyleContainerButton>
                                            </StyledContainerModal>
                                            : ''
                            }
                        </form>
                    </StyledModalOverlay>

                    : ''}
        </StyledContainerPrincipal>
    )
}
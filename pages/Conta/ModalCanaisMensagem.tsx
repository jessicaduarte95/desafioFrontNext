import React from 'react';
import {
    StyledModalOverlay,
    StyledContainerModal,
    StyledModalTitle,
    StyledModalSubTitle,
    StyledSpan
} from '../../styles/Conta/ModalStyled';
import {
    StyledSelect
} from '../../styles/Conta/CadastroStyled'
import {
    StyledTitleInput,
    StyledContainerInput,
    StyledModalTitleAlert,
    StyledAlertContent,
    StyledAlertText,
    StyledTitleMarcacaoMsg,
    StyledInputMsg,
    StyledContainerSelectButton,
    StyledSelectMarcacao,
} from '../../styles/Conta/CanaisMensagemStyled'
import {
    StyleContainerButton,
    StyleCancelButton,
    StyleNextButton,
    StyledButtonInsert
} from '../../styles/Conta/ButtonStyled';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AppDispatch, useAppSelector } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { steps } from '../../Redux/Cadastro/sliceCanaisMensagem';
import { cadastro } from '../../Redux/Cadastro/slice';
import { profissional } from '../../data';
import { z } from 'zod';


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
}

export default function ModalCanaisMensagem() {

    const userSchema = z.object({
        msg: z.string()
    });

    const { register, handleSubmit, reset } = useForm<DataForm>()

    const dispatch = useDispatch<AppDispatch>();
    const data = useAppSelector((state) => state.cadastroReducer);
    const idProfissional = data[0].idProfissional;
    var nomeProfissional: string = '';

    profissional.forEach(element => {
        if (element.idProfissional == parseInt(idProfissional)) {
            nomeProfissional = element.nome
        }
    });


    const handleCloseModal = () => {
        dispatch(steps(""));
    }

    const onSubmit: SubmitHandler<DataForm> = (data) => {
        try {
            userSchema.parse(data);
            dispatch(cadastro(data));
            dispatch(steps("formaPagamento"));
        } catch (error) {
            console.error('Erro de validação:', error);
        }

    }

    return (
        <StyledModalOverlay>
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledContainerModal>
                    <StyledModalTitle>Ativar o PsicoBank</StyledModalTitle>
                    <StyledModalSubTitle>Preencha os itens a seguir para configurar o PsicoBank</StyledModalSubTitle>
                    <StyledContainerInput>
                        <StyledTitleInput>Profissional: <StyledSpan>*</StyledSpan></StyledTitleInput>
                        <StyledSelect disabled>
                            <option value="">{nomeProfissional}</option>
                        </StyledSelect>
                    </StyledContainerInput>
                    <StyledModalTitleAlert>Enviar cobrança por e-mail:</StyledModalTitleAlert>
                    <StyledAlertContent>
                        <StyledAlertText>
                            Esse é a mensagem por e-mail que seus clientes irão receber. Clique no campo de texto para editar o conteúdo da mensagem e depois siga para o próximo passo.
                        </StyledAlertText>
                    </StyledAlertContent>
                    <StyledTitleMarcacaoMsg>Marcação dinâmica:</StyledTitleMarcacaoMsg>

                    <StyledContainerSelectButton>
                        <StyledSelectMarcacao>
                            <option value="">Selecione</option>
                            <option value="1">Opção 1</option>
                            <option value="2">Opção 2</option>
                        </StyledSelectMarcacao>
                        <StyledButtonInsert>+<strong></strong> Inserir</StyledButtonInsert>
                    </StyledContainerSelectButton>

                    <StyledTitleMarcacaoMsg>Conteúdo da mensagem:</StyledTitleMarcacaoMsg>
                    <StyledInputMsg {...register("msg")}></StyledInputMsg>
                    <StyleContainerButton>
                        <StyleCancelButton onClick={handleCloseModal}>Cancelar</StyleCancelButton>
                        <StyleNextButton type='submit'>Próximo</StyleNextButton>
                    </StyleContainerButton>
                </StyledContainerModal>
            </form>
        </StyledModalOverlay >
    )
}
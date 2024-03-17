import React from 'react';
import {
    StyledModalOverlay,
    StyledContainerModal,
    StyledModalTitle,
    StyledModalSubTitle,
    StyledSpan
} from '../../styles/Conta/ModalStyled';

import {
    StyleContainerButton,
    StyleCancelButton,
    StyleNextButton
} from '../../styles/Conta/ButtonStyled';
import {
    StyledContainerAlert,
    StyledAlertTitle,
    StyledAlertText,
    StyledContainerForm,
    StyledTitleSelectInput,
    StyledSelect,
    StyledContainerSelectInput,
    StyledInput,
    StyledContainerFields,
    StyledInputNome,
    StyledInputFields,
    StyledInputFieldCEP,
    StyledSelectBancoConta
} from '../../styles/Conta/CadastroStyled'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { cadastro } from '../../Redux/Cadastro/slice';
import { steps } from '../../Redux/Cadastro/sliceCanaisMensagem';
import { AppDispatch, useAppSelector } from '../../Redux/store';
import { z } from 'zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { profissional, banco, conta, tipoPessoa, estado } from '../../data';

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
export default function ModalInserir() {

    const userSchema = z.object({
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
    const dispatch = useDispatch<AppDispatch>();

    const handleCloseModal = () => {
        dispatch(steps(""));
    }

    const onSubmit: SubmitHandler<DataForm> = (data) => {
        try {
            userSchema.parse(data);
            dispatch(cadastro(data));
            reset();
            toast.success("Dados gravados com sucesso!", { theme: "colored" });
            dispatch(steps("canaisMensagem"));
        } catch (error) {
            console.error('Erro de validação:', error);
            toast.error("Atenção! Todos os campos devem ser preenchidos e com dados válidos.", { theme: "colored" });
        }
    }

    return (
        <StyledModalOverlay>
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledContainerModal>
                    <StyledModalTitle>Ativar o PsicoBank</StyledModalTitle>
                    <ToastContainer />
                    <StyledModalSubTitle>Preencha os itens a seguir para configurar o PsicoBank</StyledModalSubTitle>
                    <StyledContainerAlert>
                        <StyledAlertTitle>
                            Atenção!!! Verifique atentamente a cada dado preenchido no cadastro de sua conta.
                        </StyledAlertTitle>
                        <ul>
                            <StyledAlertText>
                                Caso queira cadastrar uma conta de banco CNPJ, verifique se a sua conta corrente é CNPJ e preencha o CPF correto do responsável da conta.
                            </StyledAlertText>
                            <StyledAlertText>
                                O preenchimento incorreto das informações pode trazer transtornos no momento da transferência do valor para essa conta corrente.
                            </StyledAlertText>
                            <StyledAlertText>
                                Se possível preencha com calma para não ocorrer erros.
                            </StyledAlertText>
                        </ul>
                    </StyledContainerAlert>
                    <StyledContainerForm>


                        <StyledTitleSelectInput>Profissional: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                        <StyledSelect {...register("idProfissional")}>
                            <option value="">Selecione</option>
                            {profissional.map((profissional) =>
                                <option key={profissional.idProfissional} value={profissional.idProfissional}>{profissional.nome}</option>
                            )}
                        </StyledSelect>
                        <StyledContainerSelectInput>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Banco: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelectBancoConta {...register("idBanco")}>
                                    <option value="">Selecione</option>
                                    {banco.map((banco) =>
                                        <option key={banco.idBanco} value={banco.idBanco}>{banco.nome}</option>
                                    )}
                                </StyledSelectBancoConta>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Tipo de Conta: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelectBancoConta {...register("idTipoConta")}>
                                    <option value="">Selecione</option>
                                    {conta.map((conta) =>
                                        <option key={conta.idTipoConta} value={conta.idTipoConta}>{conta.nome}</option>
                                    )}
                                </StyledSelectBancoConta>
                            </StyledContainerFields>
                        </StyledContainerSelectInput>

                        <StyledContainerSelectInput>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Agência: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("agencia")}></StyledInput>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Conta com dígito: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("conta")}></StyledInput>
                            </StyledContainerFields>
                        </StyledContainerSelectInput>

                        <StyledContainerSelectInput>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Tipo de Pessoa: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelect {...register("idTipoPessoa")}>
                                    <option value="">Selecione</option>
                                    {tipoPessoa.map((tipoPessoa) =>
                                        <option key={tipoPessoa.idTipoPessoa} value={tipoPessoa.idTipoPessoa}>{tipoPessoa.nome}</option>
                                    )}
                                </StyledSelect>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>CPF: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInputFields placeholder="Digite aqui" {...register("CPF")} type='text'></StyledInputFields>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Telefone: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInputFields placeholder="Digite aqui" {...register("telefone")} type='text'></StyledInputFields>
                            </StyledContainerFields>
                        </StyledContainerSelectInput>

                        <StyledTitleSelectInput>Nome completo: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                        <StyledInputNome placeholder="Digite aqui" {...register("nome")} type='text'></StyledInputNome>

                        <StyledContainerSelectInput>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>CEP: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInputFieldCEP placeholder="Digite aqui" {...register("CEP")} type='text'></StyledInputFieldCEP>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Estado: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelect {...register("idEstado")}>
                                    <option value="">Selecione</option>
                                    {estado.map((estado) =>
                                        <option key={estado.idEstado} value={estado.idEstado}>{estado.nome}</option>
                                    )}
                                </StyledSelect>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Cidade: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInputFields placeholder="Digite aqui" {...register("cidade")} type='text'></StyledInputFields>
                            </StyledContainerFields>
                        </StyledContainerSelectInput>

                        <StyledContainerSelectInput>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Endereço: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("endereco")} type='text'></StyledInput>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Número: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("numero")}></StyledInput>
                            </StyledContainerFields>
                        </StyledContainerSelectInput>

                    </StyledContainerForm>
                    <StyleContainerButton>
                        <StyleCancelButton onClick={handleCloseModal}>Cancelar</StyleCancelButton>
                        <StyleNextButton>Próximo</StyleNextButton>
                    </StyleContainerButton>
                </StyledContainerModal>
            </form>
        </StyledModalOverlay>
    )
}
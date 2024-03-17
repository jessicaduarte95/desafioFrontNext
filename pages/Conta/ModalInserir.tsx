import React from 'react';
import {
    StyledModalSubTitle,
    StyledSpan
} from '../../styles/Conta/ModalStyled';
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
} from '../../styles/Conta/CadastroStyled';
import { z } from 'zod';
import 'react-toastify/dist/ReactToastify.css';
import { profissional, banco, conta, tipoPessoa, estado } from '../../data';

export default function ModalInserir({ register }: any) {

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

    return (
        <>
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
                <StyledSelect id='idProfissional' {...register("idProfissional")}>
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
                        <StyledInput placeholder="Digite aqui" {...register("numeroEndereco")}></StyledInput>
                    </StyledContainerFields>
                </StyledContainerSelectInput>

            </StyledContainerForm>
        </>
    )
}
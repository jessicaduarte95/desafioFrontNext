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
import { AppDispatch } from '../../Redux/store';
import { z } from 'zod';

interface DataForm {
    profissional: string;
    banco: string;
    tipoConta: string;
    agencia: number;
    conta: number;
    tipoPessoa: string;
    CPF: number;
    telefone: number;
    nome: string;
    CEP: number;
    estado: string;
    cidade: string;
    endereco: string;
    numero: string;
}
export default function ModalInserir() {

    const userSchema = z.object({
        profissional: z.string().min(3),
        banco: z.string(),
        tipoConta: z.string(),
        agencia: z.string(),
        conta: z.string(),
        tipoPessoa: z.string(),
        CPF: z.string().min(11),
        telefone: z.string().min(10),
        nome: z.string(),
        CEP: z.string().min(8),
        estado: z.string(),
        cidade: z.string(),
        endereco: z.string(),
        numero: z.string().min(1)
    });

    const { register, handleSubmit, reset } = useForm<DataForm>()
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit: SubmitHandler<DataForm> = (data) => {
        try {
            const validatedData = userSchema.parse(data);
            dispatch(cadastro(data));
            reset();
            console.log('Dados válidos:', validatedData);
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
                        <StyledSelect {...register("profissional")}>
                            <option value="opcao">Selecione</option>
                            <option value="opcao1">João Silva</option>
                            <option value="opcao2">Joaquina Sousa</option>
                            <option value="opcao3">José De Oliveira</option>
                        </StyledSelect>
                        <StyledContainerSelectInput>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Banco: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelectBancoConta {...register("banco")}>
                                    <option value="opcao">Selecione</option>
                                    <option value="opcao1">Bradesco</option>
                                    <option value="opcao2">Banco do Brasil</option>
                                    <option value="opcao3">Itaú</option>
                                </StyledSelectBancoConta>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Tipo de Conta: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelectBancoConta {...register("tipoConta")}>
                                    <option value="opcao">Selecione</option>
                                    <option value="opcao1">Conta Corrente</option>
                                    <option value="opcao2">Poupança</option>
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
                                <StyledSelect {...register("tipoPessoa")}>
                                    <option value="opcao">Selecione</option>
                                    <option value="opcao1">Pessoa Física</option>
                                    <option value="opcao2">Pessoa Jurídica</option>
                                </StyledSelect>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>CPF: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInputFields placeholder="Digite aqui" {...register("CPF")}></StyledInputFields>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Telefone: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInputFields placeholder="Digite aqui" {...register("telefone")}></StyledInputFields>
                            </StyledContainerFields>
                        </StyledContainerSelectInput>

                        <StyledTitleSelectInput>Nome completo: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                        <StyledInputNome placeholder="Digite aqui" {...register("nome")}></StyledInputNome>

                        <StyledContainerSelectInput>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>CEP: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInputFieldCEP placeholder="Digite aqui" {...register("CEP")}></StyledInputFieldCEP>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Estado: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelect {...register("estado")}>
                                    <option value="opcao">Selecione</option>
                                    <option value="opcao1">Teste1</option>
                                    <option value="opcao2">Teste2</option>
                                </StyledSelect>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Cidade: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInputFields placeholder="Digite aqui" {...register("cidade")}></StyledInputFields>
                            </StyledContainerFields>
                        </StyledContainerSelectInput>

                        <StyledContainerSelectInput>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Endereço: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("endereco")}></StyledInput>
                            </StyledContainerFields>
                            <StyledContainerFields>
                                <StyledTitleSelectInput>Número: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("numero")}></StyledInput>
                            </StyledContainerFields>
                        </StyledContainerSelectInput>

                    </StyledContainerForm>
                    <StyleContainerButton>
                        <StyleCancelButton>Cancelar</StyleCancelButton>
                        <StyleNextButton>Próximo</StyleNextButton>
                    </StyleContainerButton>
                </StyledContainerModal>
            </form>
        </StyledModalOverlay>
    )
}
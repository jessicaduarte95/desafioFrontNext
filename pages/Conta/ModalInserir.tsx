import {
    StyledModalOverlay,

    StyledContainerModal,
    StyledModalTitle,
    StyledModalSubTitle,
    StyledContainerAlert,
    StyledAlertTitle,
    StyledAlertText,
    StyledContainerForm,
    StyledTitleSelectInput,
    StyledSelect,
    StyledContainerSelectInput,
    StyledInput,
    StyledSpan,
    StyledContainerDado,
    StyleContainerButton,
    StyleCancelButton,
    StyleNextButton,
    StyledInputNome
} from '../../styles/Conta/ModalStyled'
import { useForm, SubmitHandler } from 'react-hook-form';

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

    const { register, handleSubmit, reset } = useForm<DataForm>()

    const onSubmit: SubmitHandler<DataForm> = (data) => {
        console.log(data);
        reset();
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
                            <StyledContainerDado>
                                <StyledTitleSelectInput>Banco: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelect {...register("banco")}>
                                    <option value="opcao">Selecione</option>
                                    <option value="opcao1">Bradesco</option>
                                    <option value="opcao2">Banco do Brasil</option>
                                    <option value="opcao3">Itaú</option>
                                </StyledSelect>
                            </StyledContainerDado>
                            <StyledContainerDado>
                                <StyledTitleSelectInput>Tipo de Conta: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelect {...register("tipoConta")}>
                                    <option value="opcao">Selecione</option>
                                    <option value="opcao1">Conta Corrente</option>
                                    <option value="opcao2">Poupança</option>
                                </StyledSelect>
                            </StyledContainerDado>
                        </StyledContainerSelectInput>

                        <StyledContainerSelectInput>
                            <StyledContainerDado>
                                <StyledTitleSelectInput>Agência: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("agencia")}></StyledInput>
                            </StyledContainerDado>
                            <StyledContainerDado>
                                <StyledTitleSelectInput>Conta com dígito: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("conta")}></StyledInput>
                            </StyledContainerDado>
                        </StyledContainerSelectInput>

                        <StyledContainerSelectInput>
                            <div>
                                <StyledTitleSelectInput>Tipo de Pessoa: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelect {...register("tipoPessoa")}>
                                    <option value="opcao">Selecione</option>
                                    <option value="opcao1">Pessoa Física</option>
                                    <option value="opcao2">Pessoa Jurídica</option>
                                </StyledSelect>
                            </div>
                            <div>
                                <StyledTitleSelectInput>CPF: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("CPF")}></StyledInput>
                            </div>
                            <div>
                                <StyledTitleSelectInput>Telefone: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("telefone")}></StyledInput>
                            </div>
                        </StyledContainerSelectInput>

                        <StyledTitleSelectInput>Nome completo: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                        <StyledInputNome placeholder="Digite aqui" {...register("nome")}></StyledInputNome>

                        <StyledContainerSelectInput>
                            <div>
                                <StyledTitleSelectInput>CEP: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("CEP")}></StyledInput>
                            </div>
                            <div>
                                <StyledTitleSelectInput>Estado: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledSelect {...register("estado")}>
                                    <option value="opcao">Selecione</option>
                                    <option value="opcao1">Teste1</option>
                                    <option value="opcao2">Teste2</option>
                                </StyledSelect>
                            </div>
                            <div>
                                <StyledTitleSelectInput>Cidade: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("cidade")}></StyledInput>
                            </div>
                        </StyledContainerSelectInput>

                        <StyledContainerSelectInput>
                            <StyledContainerDado>
                                <StyledTitleSelectInput>Endereço: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("endereco")}></StyledInput>
                            </StyledContainerDado>
                            <StyledContainerDado>
                                <StyledTitleSelectInput>Número: <StyledSpan>*</StyledSpan></StyledTitleSelectInput>
                                <StyledInput placeholder="Digite aqui" {...register("numero")}></StyledInput>
                            </StyledContainerDado>
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
import React from 'react';
import {
    StyledModalSubTitle,
    StyledSpan
} from '../../styles/Conta/ModalStyled';
import {
    StyledTitleInput,
    StyledContainerInput,
    StyledModalTitleAlert,
    StyledAlertContent,
    StyledAlertText,
    StyledTitlePagamentoMulta,
    StyledContainerCheckBox,
    StyledCheckBox,
    StyledTextCheckBox,
    StyledContainerValorMulta,
    StyledValorMultaText,
    StyledValorMultaInput
} from '../../styles/Conta/FormaPagamentoStyled';
import {
    StyledSelect
} from '../../styles/Conta/CadastroStyled';
import { AppDispatch, useAppSelector } from '../../Redux/store';
import { steps } from '../../Redux/Cadastro/sliceCanaisMensagem';
import { useDispatch } from 'react-redux';
import { profissional, meiosPagamento } from '../../data';

export default function ModalFormaPagamento({ register }: any) {

    const dispatch = useDispatch<AppDispatch>();
    const data = useAppSelector((state) => state.cadastroReducer);
    // const idProfissional = data[0].idProfissional;
    // var nomeProfissional: string = '';
    // console.log("Dados: ", data)

    // profissional.forEach(element => {
    //     if (element.idProfissional == parseInt(idProfissional)) {
    //         nomeProfissional = element.nome
    //     }
    // });

    const handleCloseModal = () => {
        dispatch(steps(""));
    }

    return (
        <>
            <StyledModalSubTitle>Preencha os itens a seguir para configurar o PsicoBank</StyledModalSubTitle>
            <StyledContainerInput>
                <StyledTitleInput>Profissional: <StyledSpan>*</StyledSpan></StyledTitleInput>
                <StyledSelect disabled>
                    <option value=""></option>
                </StyledSelect>
            </StyledContainerInput>
            <StyledModalTitleAlert>Forma de pagamento da cobrança</StyledModalTitleAlert>
            <StyledAlertContent>
                <StyledAlertText>
                    Escolha quais as opções de pagamento que estarão disponíveis para o seu cliente no link das mensagens de cobrança.
                </StyledAlertText>
            </StyledAlertContent>
            <StyledTitlePagamentoMulta>Disponibilizar meios de pagamento:<StyledSpan>*</StyledSpan></StyledTitlePagamentoMulta>

            {
                meiosPagamento.map((pagamento) =>
                    <StyledContainerCheckBox>
                        <StyledCheckBox type='checkbox' {...register(`meioPagamento${pagamento.idPagamento}`)}></StyledCheckBox>
                        <StyledTextCheckBox key={pagamento.idPagamento}>{pagamento.nome}</StyledTextCheckBox>
                    </StyledContainerCheckBox>
                )
            }

            <StyledTitlePagamentoMulta>Definir multas e juros para todos os boletos após o vencimento</StyledTitlePagamentoMulta>
            <StyledContainerCheckBox>
                <StyledCheckBox type='checkbox' {...register("cobrarMulta")}></StyledCheckBox>
                <StyledTextCheckBox>Cobrar Multa</StyledTextCheckBox>
            </StyledContainerCheckBox>

            <StyledContainerValorMulta>
                <StyledValorMultaText>Valor da multa em %:</StyledValorMultaText>
                <StyledValorMultaInput placeholder='0,0' type='number' {...register("valorMulta")}></StyledValorMultaInput>
            </StyledContainerValorMulta>

            <StyledContainerCheckBox>
                <StyledCheckBox type='checkbox' {...register("jurosMulta")}></StyledCheckBox>
                <StyledTextCheckBox>Cobrar juros por dia de atraso (valor 1% ao mês)</StyledTextCheckBox>
            </StyledContainerCheckBox>
        </>
    )
}
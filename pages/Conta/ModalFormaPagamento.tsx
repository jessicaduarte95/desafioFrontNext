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
import { useAppSelector } from '../../Redux/store';

export default function ModalFormaPagamento() {

    const openModal =  useAppSelector((state) => state.cadastroReducer);
    console.log("Dados: ", openModal)

    return (
        <StyledModalOverlay>
            <StyledContainerModal>
                <StyledModalTitle>Ativar o PsicoBank</StyledModalTitle>
                <StyledModalSubTitle>Preencha os itens a seguir para configurar o PsicoBank</StyledModalSubTitle>
                <StyledContainerInput>
                        <StyledTitleInput>Profissional: <StyledSpan>*</StyledSpan></StyledTitleInput>
                        <StyledSelect disabled>
                            <option value="">Selecione</option>
                            <option value="1">João Silva</option>
                            <option value="2">Joaquina Sousa</option>
                            <option value="3">José De Oliveira</option>
                        </StyledSelect>
                    </StyledContainerInput>
                    <StyledModalTitleAlert>Forma de pagamento da cobrança</StyledModalTitleAlert>
                    <StyledAlertContent>
                        <StyledAlertText>
                            Escolha quais as opções de pagamento que estarão disponíveis para o seu cliente no link das mensagens de cobrança.
                        </StyledAlertText>
                    </StyledAlertContent>
                    <StyledTitlePagamentoMulta>Disponibilizar meios de pagamento:<StyledSpan>*</StyledSpan></StyledTitlePagamentoMulta>

                    <StyledContainerCheckBox>
                        <StyledCheckBox type='checkbox'></StyledCheckBox>
                        <StyledTextCheckBox>Pix</StyledTextCheckBox>
                    </StyledContainerCheckBox>
                    <StyledContainerCheckBox>
                        <StyledCheckBox type='checkbox'></StyledCheckBox>
                        <StyledTextCheckBox>Cartão de Crédito</StyledTextCheckBox>
                    </StyledContainerCheckBox>
                    <StyledContainerCheckBox>
                        <StyledCheckBox type='checkbox'></StyledCheckBox>
                        <StyledTextCheckBox>Boleto Bancário</StyledTextCheckBox>
                    </StyledContainerCheckBox>

                    <StyledTitlePagamentoMulta>Definir multas e juros para todos os boletos após o vencimento</StyledTitlePagamentoMulta>
                    <StyledContainerCheckBox>
                        <StyledCheckBox type='checkbox'></StyledCheckBox>
                        <StyledTextCheckBox>Cobrar Multa</StyledTextCheckBox>
                    </StyledContainerCheckBox>

                    <StyledContainerValorMulta>
                        <StyledValorMultaText>Valor da multa em %:</StyledValorMultaText>
                        <StyledValorMultaInput placeholder='0,0' type='number'></StyledValorMultaInput>
                    </StyledContainerValorMulta>

                    <StyledContainerCheckBox>
                        <StyledCheckBox type='checkbox'></StyledCheckBox>
                        <StyledTextCheckBox>Cobrar juros por dia de atraso (valor 1% ao mês)</StyledTextCheckBox>
                    </StyledContainerCheckBox>

                <StyleContainerButton>
                    <StyleCancelButton>Cancelar</StyleCancelButton>
                    <StyleNextButton type='submit'>Próximo</StyleNextButton>
                </StyleContainerButton>
            </StyledContainerModal>
        </StyledModalOverlay>
    )
}
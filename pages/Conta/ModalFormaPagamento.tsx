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
import { AppDispatch, useAppSelector } from '../../Redux/store';
import { steps } from '../../Redux/Cadastro/sliceCanaisMensagem';
import { useDispatch } from 'react-redux';
import { cadastro } from '../../Redux/Cadastro/slice';
import { profissional, meiosPagamento } from '../../data';
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

export default function ModalFormaPagamento() {

    const dispatch = useDispatch<AppDispatch>();
    const data = useAppSelector((state) => state.cadastroReducer);
    const idProfissional = data[0].idProfissional;
    var nomeProfissional: string = '';
    console.log("Dados: ", data)

    profissional.forEach(element => {
        if (element.idProfissional == parseInt(idProfissional)) {
            nomeProfissional = element.nome
        }
    });

    const handleCloseModal = () => {
        dispatch(steps(""));
    }

    return (
        <StyledModalOverlay>
            <StyledContainerModal>
                <StyledModalTitle>Ativar o PsicoBank</StyledModalTitle>
                <StyledModalSubTitle>Preencha os itens a seguir para configurar o PsicoBank</StyledModalSubTitle>
                <StyledContainerInput>
                    <StyledTitleInput>Profissional: <StyledSpan>*</StyledSpan></StyledTitleInput>
                    <StyledSelect disabled>
                        <option value="">{nomeProfissional}</option>
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
                            <StyledCheckBox type='checkbox'></StyledCheckBox>
                            <StyledTextCheckBox key={pagamento.idPagamento}>{pagamento.nome}</StyledTextCheckBox>
                        </StyledContainerCheckBox>
                    )
                }

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
                    <StyleCancelButton onClick={handleCloseModal}>Cancelar</StyleCancelButton>
                    <StyleNextButton type='submit'>Próximo</StyleNextButton>
                </StyleContainerButton>
            </StyledContainerModal>
        </StyledModalOverlay>
    )
}
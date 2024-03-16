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
    StyleNextButton,
    StyledButtonInsert
} from '../../styles/Conta/ButtonStyled';

export default function ModalFormaPagamento() {
    return (
        <StyledModalOverlay>
            <StyledContainerModal>
                <StyledModalTitle>Ativar o PsicoBank</StyledModalTitle>
                <StyledModalSubTitle>Preencha os itens a seguir para configurar o PsicoBank</StyledModalSubTitle>
                <StyleContainerButton>
                    <StyleCancelButton>Cancelar</StyleCancelButton>
                    <StyleNextButton type='submit'>Próximo</StyleNextButton>
                </StyleContainerButton>
            </StyledContainerModal>
        </StyledModalOverlay>
    )
}
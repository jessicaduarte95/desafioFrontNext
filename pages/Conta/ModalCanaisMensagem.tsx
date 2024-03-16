import React from 'react';
import {
    StyledModalOverlay,
    StyledContainerModal,
    StyledModalTitle,
    StyledModalSubTitle,
    StyledSpan
} from '../../styles/Conta/ModalStyled';

export default function ModalCanaisMensagem() {
    return (
        <StyledModalOverlay>
            <StyledContainerModal>
                <StyledModalTitle>Ativar o PsicoBank</StyledModalTitle>
                <StyledModalSubTitle>Preencha os itens a seguir para configurar o PsicoBank</StyledModalSubTitle>
            </StyledContainerModal>
        </StyledModalOverlay>
    )
}
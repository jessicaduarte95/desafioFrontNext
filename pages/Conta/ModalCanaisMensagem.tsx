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
import { AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { steps } from '../../Redux/Cadastro/sliceCanaisMensagem';


interface DataForm {
    idProfissional: string;
}
export default function ModalCanaisMensagem() {

    const { register, handleSubmit, reset } = useForm<DataForm>()

    const dispatch = useDispatch<AppDispatch>();

    const handleCloseModal = () => {
        dispatch(steps(""));
    }

    const onSubmit: SubmitHandler<DataForm> = (data) => {
        dispatch(steps("formaPagamento"));
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
                            <option value="">Selecione</option>
                            <option value="1">João Silva</option>
                            <option value="2">Joaquina Sousa</option>
                            <option value="3">José De Oliveira</option>
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
                    <StyledInputMsg></StyledInputMsg>
                    <StyleContainerButton>
                        <StyleCancelButton onClick={handleCloseModal}>Cancelar</StyleCancelButton>
                        <StyleNextButton type='submit'>Próximo</StyleNextButton>
                    </StyleContainerButton>
                </StyledContainerModal>
            </form>
        </StyledModalOverlay >
    )
}
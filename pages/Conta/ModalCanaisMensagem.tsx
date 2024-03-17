import React from 'react';
import {
    StyledSpan
} from '../../styles/Conta/ModalStyled';
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
    StyledSelect
} from '../../styles/Conta/CanaisMensagemStyled'
import {
    StyledButtonInsert
} from '../../styles/Conta/ButtonStyled';
import { useAppSelector } from '../../Redux/store';
import { profissional } from '../../data';

export default function ModalCanaisMensagem({ register }: any) {

    const data = useAppSelector((state) => state.profissional);
    const idProfissional = data[0].idProfissional;
    var nomeProfissional: string = '';

    profissional.forEach(element => {
        if (element.idProfissional == parseInt(idProfissional)) {
            nomeProfissional = element.nome
        }
    });


    return (
        <>
            <StyledContainerInput>
                <StyledTitleInput>Profissional: <StyledSpan>*</StyledSpan></StyledTitleInput>
                <StyledSelect disabled>
                    <option value="">{nomeProfissional}</option>
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
                <StyledSelectMarcacao {...register("marcacaoDinamica")}>
                    <option value="">Selecione</option>
                    <option value="1">Opção 1</option>
                    <option value="2">Opção 2</option>
                </StyledSelectMarcacao>
                <StyledButtonInsert>+<strong></strong> Inserir</StyledButtonInsert>
            </StyledContainerSelectButton>

            <StyledTitleMarcacaoMsg>Conteúdo da mensagem:</StyledTitleMarcacaoMsg>
            <StyledInputMsg {...register("msg")}></StyledInputMsg>
        </>
    )
}
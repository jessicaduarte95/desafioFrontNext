import React from 'react';
import {
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
    StyledButtonInsert
} from '../../styles/Conta/ButtonStyled';
import { AppDispatch, useAppSelector } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { steps } from '../../Redux/Cadastro/sliceCanaisMensagem';
import { cadastro } from '../../Redux/Cadastro/slice';
import { profissional } from '../../data';
import { z } from 'zod';

export default function ModalCanaisMensagem({ register }: any) {

    const userSchema = z.object({
        msg: z.string()
    });

    const dispatch = useDispatch<AppDispatch>();
    // const data = useAppSelector((state) => state.cadastroReducer);
    // const idProfissional = data[0].idProfissional;
    // var nomeProfissional: string = '';

    // profissional.forEach(element => {
    //     if (element.idProfissional == parseInt(idProfissional)) {
    //         nomeProfissional = element.nome
    //     }
    // });


    return (
        <>
            <StyledContainerInput>
                <StyledTitleInput>Profissional: <StyledSpan>*</StyledSpan></StyledTitleInput>
                <StyledSelect disabled>
                    <option value=""></option>
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
            <StyledInputMsg {...register("msg")}></StyledInputMsg>
        </>
    )
}
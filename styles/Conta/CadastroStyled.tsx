import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const StyledContainerAlert = styled.div`
    padding: 16px;
    background-color:#FFFAD6;
    margin: 0px 32px;
`

export const StyledAlertTitle = styled.p`
    color: #CCB400;
    font-weight: 400;
`
export const StyledAlertText = styled.li`
    color: #CCB400;
    font-weight: 200;
`

export const StyledContainerForm = styled.div`
    padding: 32px;
`

export const StyledContainerSelectInput = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`

export const StyledContainerFields = styled.div`
    width: 100%;
`

export const StyledContainerThreeFields = styled.div `
    width: 48%;
    background-color: red;
`

export const StyledTitleSelectInput = styled.p`
    font-size: 16px;
    font-weight: 400;
`

export const StyledSelect = styled.select`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    width: 100%;
    outline: none;
    &:focus {
        border-color: #2797BA;
    }
`

export const StyledSelectBanco = styled.select`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    outline: none;
    width: 95%;
    &:focus {
        border-color: #2797BA;
    }
    @media (max-width: 800px) {
        width: 100%;
    }
`
    export const StyledSelectConta = styled.select`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    outline: none;
    width: 100%;
    &:focus {
        border-color: #2797BA;
    }
`

export const StyledInput = styled.input`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    margin-left: 5px;
    width: 91%;
    outline: none;
    &:focus {
        border-color: #2797BA;
    }

    @media (max-width: 900px) {
        width: 88%;
    }

    @media (max-width: 800px) {
        margin-left: 0;
        width: 92%;
    }

    @media (max-width: 500px) {
        margin-left: 0;
        width: 87.7%;
    }
`

export const StyledAgenciaEndereco = styled.input`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    width: 87%;
    outline: none;
    &:focus {
        border-color: #2797BA;
    }
    @media (max-width: 800px) {
        margin-left: 0;
        width: 92%;
    }

    @media (max-width: 500px) {
        margin-left: 0;
        width: 88%;
    }
`

export const StyledInputFields = styled.input`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    margin-left: 15px;
    width: 82%;
    outline: none;
    &:focus {
        border-color: #2797BA;
    }

    @media (max-width: 900px) {
        width: 77%;
    }

    @media (max-width: 800px) {
        margin-left: 0;
        width: 92%;
    }

    @media (max-width: 500px) {
        margin-left: 0;
        width: 88%;
    }
`

export const StyledInputFieldsCPFTelefone = styled(InputMask)`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    margin-left: 15px;
    width: 82%;
    outline: none;
    &:focus {
        border-color: #2797BA;
    }

    @media (max-width: 900px) {
        width: 77%;
    }

    @media (max-width: 800px) {
        margin-left: 0;
        width: 92%;
    }

    @media (max-width: 500px) {
        margin-left: 0;
        width: 88%;
    }
`

export const StyledInputFieldCEP = styled(InputMask)`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    margin-right: 15px;
    width: 85%;
    outline: none;
    &:focus {
        border-color: #2797BA;
    }
    @media (max-width: 900px) {
        width: 80%;
    }

    @media (max-width: 800px) {
        margin-right: 0;
        width: 92%;
    }

    @media (max-width: 500px) {
        margin-left: 0;
        width: 88%;
    }
`

export const StyledInputNome = styled.input`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    margin-right: 32px;
    width: 96%;
    outline: none;
    &:focus {
        border-color: #2797BA;
    }
    @media (max-width: 900px) {
        width: 94%;
    }

    @media (max-width: 800px) {
        margin-right: 0;
        width: 92%;
    }

    @media (max-width: 500px) {
        margin-left: 0;
        width: 88%;
    }
`
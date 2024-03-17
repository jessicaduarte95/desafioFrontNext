import styled from 'styled-components';


export const StyledContainerInput = styled.div`
    padding: 7px 32px 20px 32px;
`

export const StyledTitleInput = styled.p`
    font-size: 16px;
    font-weight: 400;
    font-family: Roboto;
    color: #7D8C94;
`

export const StyledModalTitleAlert = styled.p`
    margin: 0px 32px;
    font-size: 20px;
    font-weight: 500;
`

export const StyledAlertContent = styled.div`
    background-color:#ECF5FE;
    margin: 20px 32px;
    border-radius: 4px;
`

export const StyledAlertText = styled.p`
    color: #2196F3;
    font-weight: 400;
    font-size: 14px;
    padding: 10px;
`

export const StyledTitleMarcacaoMsg = styled.p`
    margin: 0px 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    font-family: Roboto;
    color: #3D3D3D;
`

export const StyledContainerSelectButton = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0px;
    margin: 0px 32px;
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`
export const StyledSelectMarcacao = styled.select`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    width: 657px;
    @media (max-width: 800px) {
        width: 100%;
    }

`

export const StyledInputMsg = styled.input `
    margin: 10px 32px 0px 32px;
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    width: 89%;
    height: 176px;
    line-height: 20px
`
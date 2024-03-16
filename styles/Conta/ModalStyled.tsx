import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledContainerModal = styled.div`
    max-width: 100%;
    max-height: 85vh;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    overflow: auto;
    scrollbar-width: thin;
`

export const StyledModalTitle = styled.p`
    margin: 32px;
    font-size: 24px;
    font-weight: 500;
    height: 24px;
    width: 203px;
`

export const StyledModalSubTitle = styled.p`
    margin: 10px 32px;
    font-size: 20px;
    font-weight: 500;
`

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
`

export const StyledContainerDado = styled.div`
    width: 48%;
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
`

export const StyledInput = styled.input`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    margin-right: 32px;
    width: 93%;
`

export const StyledInputNome = styled.input`
    font-size: 16px;
    padding: 4px 16px 4px 16px;
    border: 1px solid #CCD1D3;
    border-radius: 2px;
    margin-right: 32px;
    width: 97%;
`

export const StyledSpan = styled.span`
    font-size: 16px;
    color: red;
`

export const StyleContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 32px;
`

export const StyleCancelButton = styled.button`
    font-size: 16px;
    color: #7D8C94;
    padding: 4px 32px 4px 32px;
    border: 1px solid #7D8C94;
    border-radius: 4px;
    background-color: #FFFFFF;
    margin-right: 10px;
    cursor: pointer; 
    transition: background-color 0.7s;
    &:hover {
        color: #3D3D3D;
        border: 1px solid #3D3D3D;
    };
`

export const StyleNextButton = styled.button`
    font-size: 16px;
    color: #DDF2F8;
    padding: 4px 32px 4px 32px;
    border: 1px solid #2797BA;
    border-radius: 4px;
    background-color: #2797BA;
    cursor: pointer; 
    transition: background-color 0.7s;
    &:hover {
        border: 1px solid #207C97;
        background-color: #207C97;
    }
`
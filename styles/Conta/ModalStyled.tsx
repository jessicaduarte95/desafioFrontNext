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
    max-width: 90%;
    max-height: 85vh;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    @media (max-width: 800px) {
        width: 500px;
    }
    @media (max-width: 500px) {
        width: 350px;
    }
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

export const StyledSpan = styled.span`
    font-size: 16px;
    color: red;
`
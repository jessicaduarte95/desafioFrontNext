import styled from 'styled-components';

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
    line-height: 24px;
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
    line-height: 24px;
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

export const StyledButtonInsert = styled.button`
    background-color: #FFFFFF;
    color: #2797BA;
    font-size: 16px;
    font-family: Roboto;
    border: 1px solid #2797BA;
    border-radius: 4px;
    padding: 4px 32px 4px 32px;
    cursor: pointer; 
    transition: background-color 0.7s;
    &:hover {
        background-color: #DDF2F8;
    }
    @media (max-width: 800px) {
        width: 133px;
        height: 32px;
        margin-top: 15px
    }
`
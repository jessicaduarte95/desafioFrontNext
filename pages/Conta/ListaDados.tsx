import React from 'react';
import { StyledListaDados, StyledText } from '../../styles/Conta/ListaStyled';
import { useAppSelector } from '../../Redux/store';

export default function ListaDados() {

    const dadosLista = useAppSelector((state) => state.cadastroReducer);

    console.log('dadosLista', dadosLista);

    return (
        <>
            {dadosLista.length !== 0 ?
                <>
                    {dadosLista.map((data) =>
                        <StyledListaDados>
                            <StyledText>Profissional (id): {data.idProfissional}</StyledText>
                            <StyledText>Banco (id): {data.idBanco}</StyledText>
                            <StyledText>Tipo de Conta (id): {data.idTipoConta}</StyledText>
                            <StyledText>Agência: {data.agencia}</StyledText>
                            <StyledText>Conta com dígito: {data.conta}</StyledText>
                            <StyledText>Tipo de pessoa (id): {data.idTipoPessoa}</StyledText>
                            <StyledText>CPF: {data.CPF}</StyledText>
                            <StyledText>Telefone: {data.telefone}</StyledText>
                            <StyledText>CEP: {data.CEP}</StyledText>
                            <StyledText>Estado (id): {data.idEstado}</StyledText>
                            <StyledText>Cidade: {data.cidade}</StyledText>
                            <StyledText>Endereço: {data.endereco}</StyledText>
                            <StyledText>Número: {data.numeroEndereco}</StyledText>
                            <StyledText>Marcação dinâmica: {data.marcacaoDinamica}</StyledText>
                            <StyledText>Conteúdo da mensagem: {data.msg}</StyledText>
                            <StyledText>Meio de Pagamento (PIX): {data.meioPagamento1}</StyledText>
                            <StyledText>Meio de Pagamento (Cartão de crédito): {data.meioPagamento2}</StyledText>
                            <StyledText>Meio de Pagamento (Boleto): {data.meioPagamento3}</StyledText>
                            <StyledText>Cobrar multa: {data.cobrarMulta}</StyledText>
                            <StyledText>Valor da Multa: {data.valorMulta}</StyledText>
                            <StyledText>Juros por atraso: {data.jurosMulta}</StyledText>
                        </StyledListaDados>
                    )}
                </>
                : ''}
        </>
    )
}
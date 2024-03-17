import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Data {
    idProfissional: string;
    idBanco: string;
    idTipoConta: string;
    agencia: number;
    conta: number;
    idTipoPessoa: string;
    CPF: number;
    telefone: number;
    nome: string;
    CEP: number;
    idEstado: string;
    cidade: string;
    numeroEndereco: string;
    marcacaoDinamica: string;
    msg: string;
    meioPagamento1: boolean;
    meioPagamento2: boolean;
    meioPagamento3: boolean;
    cobrarMulta: boolean;
    valorMulta: string;
    jurosMulta: boolean;
}

const initialState: Data[] = [];

export const cadastroAssinantes = createSlice({
    name: 'cadastro',
    initialState,
    reducers: {
        cadastro: (state, action: PayloadAction<Data>) => {
            console.log("Dados: ", action.payload)
            return [...state, action.payload]
        }
    }
})


export const { cadastro } = cadastroAssinantes.actions;
export default cadastroAssinantes.reducer;
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
    endereco: string;
    numero: string;
    msg: string;
}

const initialState: Data[] = [];

export const cadastroAssinantes = createSlice({
    name: 'cadastro',
    initialState,
    reducers: {
        cadastro: (state, action: PayloadAction<Data>) => {
            return [...state, action.payload]
        }
    }
})


export const { cadastro } = cadastroAssinantes.actions;
export default cadastroAssinantes.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Data {
    profissional: string;
    banco: string;
    tipoConta: string;
    agencia: number;
    conta: number;
    tipoPessoa: string;
    CPF: number;
    telefone: number;
    nome: string;
    CEP: number;
    estado: string;
    cidade: string;
    endereco: string;
    numero: string;
}

const initialState: Data[] = [];

export const cadastroAssinantes = createSlice({
    name: 'cadastro',
    initialState,
    reducers: {
        cadastro: (state, action: PayloadAction<Data>) => {
            console.log("Action",action.payload)
            return [...state]
        }
    }
})


export const { cadastro } = cadastroAssinantes.actions;
export default cadastroAssinantes.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Data {
    idProfissional: string;
}

const initialState: Data[] = [];

export const Profissional = createSlice({
    name: 'profissional',
    initialState,
    reducers: {
        profissional: (state, action: PayloadAction<Data>) => {
            return [...state, action.payload]
        }
    }
})


export const { profissional } = Profissional.actions;
export default Profissional.reducer;
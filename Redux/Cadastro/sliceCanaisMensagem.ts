import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Data {
    step: string;
}

const initialState: Data = {
    step: ''
};

export const stepsCadastro = createSlice({
    name: "steps",
    initialState,
    reducers: {
        steps: (state, action: PayloadAction<string>) => {
            console.log("TesteSteps",action.payload);
            return {step: action.payload};
        }
    }
})

export const { steps } = stepsCadastro.actions;
export default stepsCadastro.reducer;
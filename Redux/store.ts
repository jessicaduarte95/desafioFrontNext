import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import cadastroReducer from './Cadastro/slice';
import stepsCadastro from './Cadastro/sliceSteps';
import profissional from './Cadastro/sliceProfissional';

export const store = configureStore({
  reducer: {
    cadastroReducer,
    stepsCadastro,
    profissional
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
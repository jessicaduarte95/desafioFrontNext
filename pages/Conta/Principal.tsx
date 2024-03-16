import { 
    StyledButton,
    StyledContainerPrincipal 
} from '../../styles/Conta/PrincipalStyled'
import ModalInserir from '../../pages/Conta/ModalInserir';
import { useAppSelector, AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { steps } from '../../Redux/Cadastro/sliceCanaisMensagem';
import ModalCanaisMensagem from './ModalCanaisMensagem';
export default function Principal() {

    const openModal =  useAppSelector((state) => state.stepsCadastro);
    const dispatch = useDispatch<AppDispatch>();

    const open = () => {
        dispatch(steps("cadastro"));
    }

    return (
        <StyledContainerPrincipal>
            <StyledButton onClick={open}>+<strong></strong> Ativar o PsicoBank</StyledButton>
            {
                openModal.step == "cadastro" ?
                <ModalInserir/>
                : 
                openModal.step == "canaisMensagem" ?
                <ModalCanaisMensagem/>
                : ''
            }
        </StyledContainerPrincipal>
    )
}
import { 
    StyledButton,
    StyledContainerPrincipal 
} from '../../styles/Conta/PrincipalStyled'
import ModalInserir from '../../pages/Conta/ModalInserir';
export default function Principal() {
    return (
        <StyledContainerPrincipal>
            <StyledButton>+<strong></strong> Inserir</StyledButton>
            <ModalInserir/>
        </StyledContainerPrincipal>
    )
}
import { StyledHeader } from "./styles/Header.styled";
import { StyledButton } from "./styles/Button.styled";
import logo from "../images/music-note.png"

const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src={logo} alt="" />
                <h1>music hub</h1>
            </div>
            <div>
                <StyledButton brColor="#6F2232">Home</StyledButton>
                <StyledButton brColor="#950740">Catalog</StyledButton>
                <StyledButton brColor="#C3073F">To-listen</StyledButton>
            </div>
        </StyledHeader>
    );
}

export default Header;
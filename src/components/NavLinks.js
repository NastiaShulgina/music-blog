import { StyledNavLinks } from "./styles/NavLinks.styled"
import { Link } from "react-router-dom";
import { StyledButton } from "./styles/Button.styled";

const NavLinks = () => {
    return (
        <StyledNavLinks>
            <Link to="/"><StyledButton brColor="#6F2232">Home</StyledButton></Link>
            <Link to="/catalog"><StyledButton brColor="#950740">Catalog</StyledButton></Link>
            <Link to="/to-listen"><StyledButton brColor="#C3073F" className="my-list">To listen</StyledButton></Link>
        </StyledNavLinks>
    );
}

export default NavLinks;
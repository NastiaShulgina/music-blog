import { StyledHeader } from "./styles/Header.styled";
import { StyledButton } from "./styles/Button.styled";
import logo from "../images/music-note.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/form"

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleSearch = event => {
        dispatch(setSearchTerm(event.target.value))
    }

    return (
        <StyledHeader>
            <div>
                <img src={logo} alt="" />
                <h1>music hub</h1>
            </div>
            <div>
                <Link to="/"><StyledButton brColor="#6F2232">Home</StyledButton></Link>
                <Link to="/catalog"><StyledButton brColor="#950740">Catalog</StyledButton></Link>
                <Link to="/to-listen"><StyledButton brColor="#C3073F" className="my-list">To listen</StyledButton></Link>
            </div>
            {location.pathname === "/catalog"
                ?
                <div>
                    <input type="text" placeholder="Search the song name..." onChange={handleSearch}/>
                </div>
                : null
            }
        </StyledHeader>
    );
}

export default Header;
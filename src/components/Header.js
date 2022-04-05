import { StyledHeader } from "./styles/Header.styled";
import { StyledButton } from "./styles/Button.styled";
import logo from "../images/music-note.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { songs } from "./data";

let likedSongs = 0;
songs.forEach(song => {
    if (song.liked === true) likedSongs++
})

const Header = ({setSearchTerm}) => {
    const location = useLocation()

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
                {/* <p>{likedSongs}</p> */}
            </div>
            {location.pathname === "/catalog"
                ?
                <div>
                    {/* <label>Search the song...</label> */}
                    <input type="text" placeholder="Search the song name..." onChange={event => {setSearchTerm(event.target.value)}}/>
                </div>
                : null
            }
        </StyledHeader>
    );
}

export default Header;
import { StyledHeader } from "./styles/Header.styled";
import logo from "../images/music-note.png";
import menu from "../images/menu.png";
import close from "../images/nav-close.png";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/form"
import NavLinks from "./NavLinks";
import { useState } from "react";

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleSearch = event => {
        dispatch(setSearchTerm(event.target.value))
    }


    const [burgerOpened, setBurgerOpened] = useState(false)

    return (
        <StyledHeader height={burgerOpened ? "100%" : null}>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>music hub</h1>
                </div>
                <div className="nav-links">
                    <NavLinks />
                </div>
                {location.pathname === "/catalog"
                    ?
                    <div className="header-search">
                        <input type="text" placeholder="Search the song name..." onChange={handleSearch} />
                    </div>
                    : null
                }
                <div className="burger-button" onClick={() => setBurgerOpened(!burgerOpened)}>
                    {burgerOpened ?
                        <img src={close} alt="close" className="close-menu" />
                        : <img src={menu} alt="burger-menu" className="menu" />
                    }
                </div>
            </div>
            {burgerOpened ?
                <div className="burger-nav-links">
                    <NavLinks />
                </div>
                : null
            }
        </StyledHeader>
    );
}

export default Header;
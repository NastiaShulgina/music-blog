import instagram from "../images/social-media/instagram.png"
import facebook from "../images/social-media/facebook.png"
import tiktok from "../images/social-media/tiktok.png"
import telegram from "../images/social-media/telegram.png"
import { StyledFooter } from "./styles/Footer.styled";
import logo from "../images/music-note.png"

const Footer = () => {
    return (
        <StyledFooter>
            <div className="container">
                <div className="branding">
                    <img className="logo" src={logo} alt="" />
                    <i>© All rights reserved</i>
                </div>
                <div className="social-media">
                    <img src={telegram} alt="telegram" />
                    <img src={instagram} alt="instagram" />
                    <img src={facebook} alt="facebook" />
                    <img src={tiktok} alt="tik tok" />
                </div>
            </div>
        </StyledFooter>
    );
}

export default Footer;
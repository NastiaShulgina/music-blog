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
                    <a href="https://t.me/nastiashulgina"><img src={telegram} alt="telegram" /></a>
                    <a href="https://instagram.com/tatristefille?utm_medium=copy_link"><img src={instagram} alt="instagram" /></a>
                    <a href="https://www.facebook.com/nastia.shulgina.7"><img src={facebook} alt="facebook" /></a>
                    <a href="https://vm.tiktok.com/ZMLfskC54/"><img src={tiktok} alt="tik tok" /></a>
                </div>
            </div>
        </StyledFooter>
    );
}

export default Footer;
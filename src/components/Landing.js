import { StyledLanding } from "./styles/Landing.styled";
import { StyledButton } from "./styles/Button.styled";
import { useState } from 'react';
import { Link } from "react-router-dom";
import AlbumCard from "./AlbumCard";
import {albums} from "./data"


const Landing = () => {

    const [visible, setVisible] = useState(4);
    const showMoreCards = () => setVisible((prevAmount) => prevAmount + 4)

    return (
        <StyledLanding>
            <hr />
            <h2><span>10</span>best music artists,<span>100</span>songs,<span>1</span>place</h2>
            <Link to="/catalog"><StyledButton brColor="#ef6461" color="#ef6461" maxWidth="max-content" alignSelf="center">EXPLORE NEW MUSIC</StyledButton></Link>
            <br /><hr />
            <h3 className="title"><span>Best</span>albums selection:</h3>
            <div className="best-albums">
                {albums.slice(0, visible).map(album => <AlbumCard album={album} key={album.id} />)}
            </div>
            {visible < albums.length ? <StyledButton onClick={showMoreCards} brColor="#ef6461" color="#ef6461">View more...</StyledButton> : null}
        </StyledLanding>
    );
}

export default Landing;
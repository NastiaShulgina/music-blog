import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { songs } from "./data";
import { StyledSongDetails } from "./styles/SongDetails.styled";
import { StyledButton } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import heart from "../images/heart.png";
import { useState } from "react";

const SongDetails = () => {
    const { id } = useParams();
    const song = songs.find(s => s.id === Number(id))

    const [likedState, setLikedState] = useState(song.liked);

    function changeLikedState() {
        // console.log(song);
        // console.log(likedState, song.liked);
        setLikedState(!likedState)
        song.liked = likedState
        // console.log(likedState, song.liked);
    }

    const ifNotLiked = "Listen later";
    const ifLiked = "Remove from my playlist";

    return (
        <StyledSongDetails>
            <div className="left">
                {song.liked === false || 
                <img src={heart} alt="You liked this song." className="heart"/>}
                <img src={song.photoUrl} alt="album" />
                <audio controls
                    src={song.audiofile}
                    type="audio/mpeg">
                    Your browser cannot play audio recording.
                </audio>
            </div>
            <div>
                <div className="details">
                    <h1>{song.name}</h1>
                    <h2>{song.artist}</h2>
                    <i>Album: {song.album}</i>
                    <div className="chorus">
                        <img src="http://www.clker.com/cliparts/0/m/m/C/F/o/red-quotation-marks-hi.png" alt="dpoble-quotes" className="quotes" />
                        <i>{song.chorus}...</i>
                    </div>
                </div>
                <div className="buttons">
                    <Link to="/catalog"><StyledButton brColor="#950740">Go back</StyledButton></Link>
                    <StyledButton brColor="#C3073F" onClick={() => changeLikedState()}>
                        {song.liked === false ? ifNotLiked : ifLiked}
                    </StyledButton>
                </div>
            </div>
        </StyledSongDetails>
    );
}

export default SongDetails;
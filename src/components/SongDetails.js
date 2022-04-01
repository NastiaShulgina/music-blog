import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { songs } from "./data";
import { StyledSongDetails } from "./styles/SongDetails.styled";
import { StyledButton } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import like from "../images/like.svg"

const SongDetails = () => {
    const { id } = useParams();
    const song = songs.find(s => s.id === Number(id))

    return (
        <StyledSongDetails>
            <div>
                <img src={song.photoUrl} alt="album-photo" />
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
                    <Link to="/catalog"><StyledButton brColor="#C3073F">Listen later</StyledButton></Link>
                    {/* <img className="like" src={like} alt="like" /> */}
                </div>
            </div>

        </StyledSongDetails>
    );
}

export default SongDetails;
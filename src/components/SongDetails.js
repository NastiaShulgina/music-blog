import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { StyledSongDetails } from "./styles/SongDetails.styled";
import { StyledButton } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import heart from "../images/heart.png";

const SongDetails = ({ songs, setSongs }) => {
    const { id } = useParams();
    const song = songs.find(s => s.id === Number(id))

    function changeLikedState() {
        setSongs(prev => {
            return prev.map(song => {
                if (song.id === Number(id)) return { ...song, liked: !song.liked};
                return song;
            })
        })
    }

    const listenLaterString = "Listen later";
    const removeFromPlaylistString = "Remove from my playlist";

    return (
        <StyledSongDetails>
            <div className="left">
                {song.liked && 
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
                        {song.liked ? removeFromPlaylistString : listenLaterString}
                    </StyledButton>
                </div>
            </div>
        </StyledSongDetails>
    );
}

export default SongDetails;
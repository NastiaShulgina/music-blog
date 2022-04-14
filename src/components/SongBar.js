import { StyledSongBar } from "./styles/SongBar.styled";
import remove from "../images/delete.png";
import play from "../images/play.png";
import pause from "../images/pause-button.png";
import { useDispatch } from 'react-redux';
import { setSongLike } from "../redux/form";
import { setSongId } from "../redux/songPlaying";
import { useSelector } from 'react-redux';

const SongBar = (props) => {
    const dispatch = useDispatch();

    const { songId } = useSelector((state) => state.songPlaying)

    function changeLikedState(id) {
        dispatch(setSongLike(id))
        if (songId === id) {
            dispatch(setSongId(null))
        }
    }

    function addSongPlayingCard(id) {
        dispatch(setSongId(id))
    }

    return (
        <StyledSongBar>
            <div className="song-line">
                {songId !== props.song.id ?
                    <button onClick={() => addSongPlayingCard(props.song.id)}>
                        <img className="play" src={play} />
                    </button>
                    : <button onClick={() => addSongPlayingCard(null)}>
                        <img className="pause" src={pause} />
                    </button>
                }
                <img className="album" src={props.song.photoUrl} alt="album" />
                <div className="name-artist">
                    <h3>{props.song.name}</h3>
                    <h4>{props.song.artist}</h4>
                </div>
                <h4>{props.song.album}</h4>
                <button onClick={() => changeLikedState(props.song.id)}><img className="cross" src={remove} alt="" /></button>
            </div>
            <hr />
        </StyledSongBar>
    );
}

export default SongBar;
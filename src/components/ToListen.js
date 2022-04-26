import { StyledToListen } from "./styles/ToListen.styled";
import { useSelector } from 'react-redux';
import SongBar from "./SongBar";
import arrow from "../images/right-arrow.png";
import close from "../images/close.png";
import { useState } from 'react';
import Selections from "./Selections";

const ToListen = () => {
    const { songs } = useSelector((state) => state.form)
    const { songId } = useSelector((state) => state.songPlaying)
    let mySongs = songs.filter(song => song.liked === true)

    function getSong() {
        return mySongs.find(s => s.id === Number(songId))
    }

    const [selectionsOpened, setSelectionsOpened] = useState(false)

    const handleSelectionsAppearing = () => {
        setSelectionsOpened(selectionsOpened => !selectionsOpened)
    }

    return (
        <StyledToListen>
            {!selectionsOpened
                ? <button className="open-selection" onClick={() => handleSelectionsAppearing()}>
                    <img className="arrow" src={arrow} />
                </button>
                : <div className="selections">
                    <button className="close-selection" onClick={() => handleSelectionsAppearing()}>
                        <img className="close" src={close} />
                    </button>
                    <Selections />
                </div>
            }
            <div className="song-list">
                {songId !== null ?
                    <div className="playing-now">
                        <img src={getSong().photoUrl} className="now-image" />
                        <div className="right">
                            <div>
                                <div>
                                    <i>Playing now:</i>
                                    <h1>{getSong().name}</h1>
                                    <h2>{getSong().artist}</h2>
                                </div>
                                <img src="https://static.wixstatic.com/media/ac221a_3b2c65c01af3461aafddf15d3a594717~mv2.gif" className="notes" />
                            </div>
                            <audio controls autoPlay loop
                                src={getSong().audiofile}
                                type="audio/mpeg">
                                Your browser cannot play audio recording.
                            </audio>
                        </div>
                    </div>
                    : null
                }
                {mySongs.length === 0 ? <h2>Your playlist is empty. Go to catalog and add some songs.</h2> :
                    <h2>Your playlist:</h2>}
                <hr />
                {mySongs.map(song => <SongBar song={song} key={song.id} />)}
            </div>
        </StyledToListen>
    );
}

export default ToListen;
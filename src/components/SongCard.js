import { StyledSongCard } from "./styles/SongCard.styled";
import { songs } from "./data";
import { StyledButton } from "./styles/Button.styled";
import { Link } from "react-router-dom";

const SongCard = (props) => {
    return (
        <StyledSongCard>
            <img src={props.song.photoUrl} alt="album-photo" />
            <h2>{props.song.name}</h2>
            <i>{props.song.artist}</i><hr />
            <p>{props.song.chorus}...</p>
            <Link to={`/catalog/${props.song.id}`}>
                <StyledButton brColor="#e76f51" color="#e76f51" bgColor="none">Listen...</StyledButton>
            </Link>
        </StyledSongCard>
    );
}

export default SongCard;
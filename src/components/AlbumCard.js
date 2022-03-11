import { StyledAlbumCard } from "./styles/AlbumCard.styled";

const AlbumCard = (props) => {
    return (
        <StyledAlbumCard>
            <div className="album-container" key={props.album.id}>
                <img src={props.album.photoUrl} className='album-photo' alt="album-photo" />
                <h2 className="album-name">{props.album.name}</h2>
                <i className="album-artist">Artist: {props.album.artist}</i>
                {/* <p className="some-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repellat qui, iusto perferendis earum dolores?</p> */}
                <p><button>Listen</button></p>
            </div>
        </StyledAlbumCard>
    );
}

export default AlbumCard;
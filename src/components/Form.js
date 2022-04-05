import PinkRadio from "./PinkRadio";
import PinkSelect from "./PinkSelect";
import { StyledForm } from "./styles/Form.styled";
import { artistsAlbums, LANGUAGES, songs } from "./data";

const Form = ({ artist, album, sortOrder, setArtist, setAlbum, setSortOrder, setLanguage }) => {
    return (
        <StyledForm>
            <PinkSelect name="artists" label="Choose an artist:" options={Object.keys(artistsAlbums)} sortOrder={sortOrder} onChange={setArtist} artist={artist} cancelAlbum={setAlbum} cancelSorting={setSortOrder} cancelLanguage={setLanguage}/>
            {artist ==="" || <PinkSelect name="albums" label="Choose an album:" options={artistsAlbums[artist]} onChange={setAlbum} />}
            <PinkSelect name="sortOrder" label="Sort by release year:" options={["Newest to oldest", "Oldest to newest"]} onChange={setSortOrder} sortOrder={sortOrder}/>
            <PinkRadio type="radio" label="Choose the language:" name="language" languages={LANGUAGES} songs={songs} artist={artist} album={album} onChange={setLanguage}/>
        </StyledForm >
    );
}

export default Form;
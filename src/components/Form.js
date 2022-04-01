import PinkRadio from "./PinkRadio";
import PinkSelect from "./PinkSelect";
import { StyledForm } from "./styles/Form.styled";
import { artistsAlbums, LANGUAGES } from "./data";

const Form = ({ artist, setArtist, setAlbum, setLanguage }) => {
    return (
        <StyledForm>
            <PinkSelect name="artists" label="Choose an artist:" options={Object.keys(artistsAlbums)} onChange={setArtist}/>
            {artist ==="" || <PinkSelect name="albums" label="Choose an album..." options={artistsAlbums[artist]} onChange={setAlbum}/>}
            <PinkRadio type="radio" label="Choose the language:" name="language" buttons={LANGUAGES} onChange={setLanguage}/>
        </StyledForm >
    );
}

export default Form;
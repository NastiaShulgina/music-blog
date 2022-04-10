import PinkRadio from "./PinkRadio";
import PinkSelect from "./PinkSelect";
import { StyledForm } from "./styles/Form.styled";
import { artistsAlbums, LANGUAGES, songs } from "./data";
import { useSelector, useDispatch } from 'react-redux';
import { setAlbum, setArtist, setLanguage, setSortOrder } from "../redux/form"

const Form = () => {
    const {artist} = useSelector((state) => state.form)
    const dispatch = useDispatch();

    const handleArtistChange = event => {
        dispatch(setArtist(event.target.value))
    }
    const handleAlbumChange = event => {
        dispatch(setAlbum(event.target.value))
    }
    const handleLanguageChange = event => {
        dispatch(setLanguage(event.target.value))
    }
    const handleSortOrderChange = event => {
        dispatch(setSortOrder(event.target.value))
    }
    return (
        <StyledForm>
            <PinkSelect name="artists" label="Choose an artist:" options={Object.keys(artistsAlbums)} onChange={handleArtistChange} />
            {artist ==="" || <PinkSelect name="albums" label="Choose an album:" options={artistsAlbums[artist]} onChange={handleAlbumChange} />}
            <PinkSelect name="sortOrder" label="Sort by release year:" options={["Newest to oldest", "Oldest to newest"]} onChange={handleSortOrderChange} />
            <PinkRadio type="radio" label="Choose the language:" name="language" languages={LANGUAGES} songs={songs} onChange={handleLanguageChange}/>
        </StyledForm >
    );
}

export default Form;
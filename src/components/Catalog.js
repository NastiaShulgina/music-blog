import Form from './Form';
import { StyledCatalog } from "./styles/Catalog.styled.js";
import SongCard from './SongCard';
import { useSelector, useDispatch } from 'react-redux';


function filterSongs(songs, filters) {
    return songs.filter((song) => {
        return (
            (filters.searchTermFilter === "" || song.name.toLowerCase().includes(filters.searchTermFilter.toLowerCase()))
            && (filters.artistFilter === "" || song.artist.toLowerCase() === filters.artistFilter.toLowerCase())
            && (filters.albumFilter === "" || song.album.toLowerCase() === filters.albumFilter.toLowerCase())
            && (filters.languageFilter === "" || song.language.toLowerCase() === filters.languageFilter.toLowerCase()))
    })
}

function sortSongs(filteredSongs, sortOrder) {
    if (sortOrder === "") return filteredSongs

    if (sortOrder === "Newest to oldest") {
        return filteredSongs.sort((a, b) => b.year - a.year);
    } else {
        return filteredSongs.sort((a, b) => a.year - b.year);
    }
}

const Catalog = () => {
    const { searchTerm, artist, album, language, sortOrder, songs } = useSelector((state) => state.form)

    const filters = {
        searchTermFilter: searchTerm,
        artistFilter: artist,
        albumFilter: album,
        languageFilter: language
    }

    // useEffect(() => {
    //     dispatch(setSearchTerm(""))
    //     dispatch(setArtist(""))
    //     dispatch(setAlbum(""))
    //     dispatch(setLanguage(""))
    // }, [])

    return (
        <StyledCatalog>
            <hr />
            <Form />
            <br /><hr />
            <div className="songs">
                {sortSongs(filterSongs(songs, filters), sortOrder).map(song => <SongCard song={song} key={song.id} />)}
            </div>
        </StyledCatalog>
    );
}

export default Catalog;
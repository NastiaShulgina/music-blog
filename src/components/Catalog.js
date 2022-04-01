import { songs } from './data';
import Form from './Form';
import { StyledCatalog } from "./styles/Catalog.styled.js";
import SongCard from './SongCard';


function filterSongs(songs, filters) {
    const filteredSongs = songs.filter((song) => {
        if (filters.searchTermFilter === "" || song.name.toLowerCase().includes(filters.searchTermFilter.toLowerCase())) {
            if (filters.artistFilter === "" || song.artist.toLowerCase() === filters.artistFilter.toLowerCase()) {
                if (filters.albumFilter === "" || song.album.toLowerCase() === filters.albumFilter.toLowerCase()) {
                    if (filters.languageFilter === "" || song.language.toLowerCase() === filters.languageFilter.toLowerCase()) {
                        return song
                    }
                }
            }
        }
    })
    return filteredSongs
}

const Catalog = ({ searchTerm, artist, setArtist, album, setAlbum, language, setLanguage }) => {
    const filters = {
        searchTermFilter: searchTerm,
        artistFilter: artist,
        albumFilter: album,
        languageFilter: language
    }

    return (
        <StyledCatalog>
            <hr />
            <Form artist={artist} setArtist={setArtist} setAlbum={setAlbum} setLanguage={setLanguage}/>
            <br /><hr />
            <div className="songs">
                {filterSongs(songs, filters).map(song => <SongCard song={song} key={song.id} />)}
            </div>
        </StyledCatalog>
    );
}

export default Catalog;
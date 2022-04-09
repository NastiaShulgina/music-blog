import Form from './Form';
import { StyledCatalog } from "./styles/Catalog.styled.js";
import SongCard from './SongCard';
import { useState, useEffect } from 'react';


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

let sortedSongs = []
function sortSongs(filteredSongs, sortOrder) {
    if (sortOrder === "") return filteredSongs
    else if (sortOrder === "Newest to oldest") {
        sortedSongs = filteredSongs.concat().sort((a, b) =>  b.year - a.year);
        return sortedSongs
    } else {
        sortedSongs = filteredSongs.concat().sort((a, b) =>  a.year - b.year);
        return sortedSongs
    }
}

// function isMoreThanOneYear(sortedSongs) {
//     console.log(sortedSongs);
//     let yearSet = new Set();
//     sortedSongs.forEach(song => yearSet.add(song.year))
//     console.log(yearSet);
//     return yearSet.size > 1
// }

const Catalog = ({ songs, searchTerm, artist, setArtist, album, setAlbum, language, setLanguage }) => {
    const filters = {
        searchTermFilter: searchTerm,
        artistFilter: artist,
        albumFilter: album,
        languageFilter: language
    }

    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        setArtist("")
        setAlbum("")
        setSortOrder("")
        setLanguage("")
    }, [])

    return (
        <StyledCatalog>
            <hr />
            <Form artist={artist} album={album} sortOrder={sortOrder} setArtist={setArtist} setAlbum={setAlbum} setSortOrder={setSortOrder} setLanguage={setLanguage} />
            <br /><hr />
            <div className="songs">
                { sortSongs(filterSongs(songs, filters), sortOrder).map(song => <SongCard song={song} key={song.id} />)}
            </div>
        </StyledCatalog>
    );
}

export default Catalog;
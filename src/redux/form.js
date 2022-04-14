import { createSlice } from '@reduxjs/toolkit'
import { songs as defaultSongs } from '../components/data';

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        searchTerm: '',
        artist: '',
        album: '',
        language: '',
        sortOrder: '',
        songs: defaultSongs,
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        setArtist: (state, action) => {
            console.log(state.artist);
            state.artist = action.payload
            console.log(state.artist);
            state.album = ''
            state.language = ''
        },
        setAlbum: (state, action) => {
            state.album = action.payload
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload
        },
        setSongLike: (state, action) => {
            state.songs = state.songs.map(song => {
                if (song.id === Number(action.payload)) return { ...song, liked: !song.liked };
                return song;
            })
        },
    },
})

export const { setSearchTerm, setArtist, setAlbum, setLanguage, setSortOrder, setSongLike } = formSlice.actions;

export default formSlice.reducer;


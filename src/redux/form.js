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
        songs: defaultSongs
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        setArtist: (state, action) => {
            state.artist = action.payload
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
        setSong: (state, action) => {
            state.songs = action.payload
        },
    },
})

export const { setSearchTerm, setArtist, setAlbum, setLanguage, setSortOrder, setSong } = formSlice.actions;

export default formSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

export const songPlayingSlice = createSlice({
    name: 'songPlaying',
    initialState: {
        songId: null,
    },
    reducers: {
        setSongId: (state, action) => {
            state.songId = action.payload
        }
    },
})

export const { setSongId } = songPlayingSlice.actions;

export default songPlayingSlice.reducer;
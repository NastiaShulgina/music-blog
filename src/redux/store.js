import { configureStore } from '@reduxjs/toolkit'
import formReducer from './form';
import songPlayingReducer from './songPlaying';

export const store = configureStore({
    reducer: {
        form: formReducer,
        songPlaying: songPlayingReducer
    },
})
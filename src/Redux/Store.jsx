import { configureStore } from '@reduxjs/toolkit'
import BookReducer from './Book';

export const Store = configureStore({
    reducer: {
        book : BookReducer,
    }
});
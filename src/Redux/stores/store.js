import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './../reducer/index';
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: RootReducer,
    middleware: [thunk]
})

export default store;
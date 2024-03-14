import { useReducer } from 'react';
import authReducer from '../slices/authSlice'
import {combineReducers} from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice'
import userReducer from '../slices/userSlice'

const rootReducer = combineReducers({
    auth : authReducer,
    user : userReducer,
    product : productReducer
});

export default rootReducer
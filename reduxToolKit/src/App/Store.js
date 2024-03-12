 import {configurStore } from '@reduxjs/toolkit';

//  now import reducer 
import TodoReducer from '../Features/Todo/TodoSlice';
 export const store=configureStore({
        reducer:TodoReducer
 });
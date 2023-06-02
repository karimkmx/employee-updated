import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production' ? composeWithDevTools() : false,
});

export default store;
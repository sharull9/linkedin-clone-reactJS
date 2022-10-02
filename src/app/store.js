import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import popupReducer from '../features/popUpSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    popup: popupReducer,
  },
});

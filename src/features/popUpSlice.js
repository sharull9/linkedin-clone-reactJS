import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popup: false,
};

export const popupSlice = createSlice({
  name: "Popup",
  initialState,
  reducers: {
    openPop: (state) => {
      state.popup = true;
    },
    closePop: (state) => {
      state.popup = false;
    },
  },
});

export const { openPop, closePop } = popupSlice.actions;

export const selectPopup = (state) => state.popup.popup;

export default popupSlice.reducer;

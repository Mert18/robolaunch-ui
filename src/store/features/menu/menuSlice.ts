import { createSlice } from '@reduxjs/toolkit';

interface IMenu {
  isOpen: boolean;
}

const initialState: IMenu = {
  isOpen: true
};

export const menu = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { setIsOpen } = menu.actions;

export default menu.reducer;

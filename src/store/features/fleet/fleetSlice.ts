import { createSlice } from '@reduxjs/toolkit';
import { IFleet } from '../../../types/types';

const initialState: IFleet = {
  name: ''
};

export const fleet = createSlice({
  name: 'fleet',
  initialState: initialState,
  reducers: {
    setFleet: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { setFleet } = fleet.actions;

export default fleet.reducer;

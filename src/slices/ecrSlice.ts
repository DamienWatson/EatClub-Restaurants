import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RestaurantsType } from '../types/restaurants';

type ECRType = {
  filterText: string,
  isLoading: boolean,
  restaurants: RestaurantsType,
};

const initialState: ECRType = {
  filterText: '',
  isLoading: true,
  restaurants: [],
};

const ecrSLice = createSlice({
  name: 'ecr',
  initialState,
  reducers: {
    setFilterText: (state, action:PayloadAction<string>) => {
      state.filterText = action.payload;
    },
    setIsLoading: (state, action:PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setRestaurants: (state, action:PayloadAction<{ restaurants: RestaurantsType }>) => {
      state.restaurants = action.payload.restaurants;
    },
  }
});

export const {
  setFilterText,
  setIsLoading,
  setRestaurants,
} = ecrSLice.actions;

export default ecrSLice.reducer;

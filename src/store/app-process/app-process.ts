import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppProcess } from '../../types/types';
import { CityMapDefault } from '../../const';
import { SortItem, City } from '../../types/types';

const initialState: AppProcess = {
  activeCity: CityMapDefault,
  activeSortItem: 'Popular',
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setActiveSortItem: (state, action: PayloadAction<SortItem>) => {
      state.activeSortItem = action.payload;
    },
    setActiveCity: (state, action: PayloadAction<City>) => {
      state.activeCity = action.payload;
    },
  },
  extraReducers() {}
});

export const { setActiveSortItem, setActiveCity } = appProcess.actions;

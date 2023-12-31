import { appProcess, setActiveSortItem, setActiveCity } from './app-process';
import { SortItem, City } from '../../types/types';
import { CITIES_MAP, CITY_MAP_DEFAULT, CityName } from '../../const';

describe('AppProcess Slice', () => {

  describe('checkSliceDefault', () => {

    it('should return initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState = {
        activeCity: {
          name: CityName.Cologne,
          location: {
            latitude: 50.938361,
            longitude: 6.959974,
            zoom: 13
          },
        },
        activeSortItem: 'LowToHigh' as SortItem,
      };

      const result = appProcess.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('should return default initial state with empty action and undefined', () => {
      const emptyAction = { type: '' };
      const expectedState = {
        activeCity: CITY_MAP_DEFAULT,
        activeSortItem: 'Popular' as SortItem,
      };

      const result = appProcess.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });

  });

  describe('setActiveSortItem', () => {

    it('should set activeSortItem with setActiveSortItem action', () => {
      const activeSortItem: SortItem = 'LowToHigh';
      const initialState = {
        activeCity: CITY_MAP_DEFAULT,
        activeSortItem: 'Popular' as SortItem,
      };
      const expectedState = {
        activeCity: CITY_MAP_DEFAULT,
        activeSortItem: 'LowToHigh' as SortItem,
      };

      const result = appProcess.reducer(initialState, setActiveSortItem(activeSortItem));

      expect(result).toEqual(expectedState);
    });

  });

  describe('setActiveCity', () => {

    it('should set setActiveCity with setActiveCity action', () => {
      const activeCity: City = CITIES_MAP[2];
      const initialState = {
        activeCity: CITY_MAP_DEFAULT,
        activeSortItem: 'Popular' as SortItem,
      };
      const expectedState = {
        activeCity: CITIES_MAP[2],
        activeSortItem: 'Popular' as SortItem,
      };

      const result = appProcess.reducer(initialState, setActiveCity(activeCity));

      expect(result).toEqual(expectedState);
    });

  });

});

import { Region, generateRegions } from '../region';
import {
    LoadRegions,
    LoadRegionsSuccess,
    LoadRegionsFail
} from './country.actions';
import { initialState, reducer } from './country.reducer';

describe('Country Reducer', () => {
  const regions: Region[] = generateRegions();

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = { type: 'NOOP' } as any;
      const result = reducer(undefined, action);

      expect(result).toBe(initialState);
    });

  });

  describe('[Region] Load Euro and Asian regions', () => {
    it('should toggle loading state', () => {
      const action = new LoadRegions();
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState
      });

    });
  });

  describe('[Region] Load Euro and Asian regions Success', () => {
    it('should add regions to state', () => {
      const action = new LoadRegionsSuccess(regions);
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        regions
      });

    });
  });

  describe('[Region] Load Euro and Asian regions Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new LoadRegionsFail({ error });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error
      });

    });
  });

});
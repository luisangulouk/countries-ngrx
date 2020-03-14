import { Country } from '../country';
import { CountryActionTypes, CountryActions } from './country.actions';
import { Region } from '../region';

// State for this feature (Country)
export interface CountryState {
  showCountryCapital: boolean;
  currentCountryId: string | null;
  currentRegionId: string | null
  countries: Country[];
  regions: Region[];
  error?: Error
}

export const initialState: CountryState = {
  showCountryCapital: true,
  currentCountryId: '',
  currentRegionId: '',
  countries: [],
  regions: []
};

export function reducer(state = initialState, action: CountryActions): CountryState {

  switch (action.type) {
    case CountryActionTypes.ToggleCountryCapital:
      return {
        ...state,
        showCountryCapital: action.payload
      };

    case CountryActionTypes.SetCurrentCountry:
      return {
        ...state,
        currentCountryId: action.payload.numericCode
      };

    case CountryActionTypes.SetCurrentRegion:
      return {
        ...state,
        currentRegionId: action.payload.numericCode
      };

    case CountryActionTypes.LoadEuroCountriesSuccess:
    case CountryActionTypes.LoadAsianCountriesSuccess:
      return {
        ...state,
        countries: action.payload
      };

    case CountryActionTypes.LoadRegionsFail:
    case CountryActionTypes.LoadEuroCountriesFail:
    case CountryActionTypes.LoadAsianCountriesFail:
      return {
        ...state,
        error: action.payload.error
      };
    
    case CountryActionTypes.LoadRegionsSuccess:
      return {
        ...state,
        regions: action.payload
      };

    default:
      return state;
  }
}

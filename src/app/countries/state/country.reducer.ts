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
  error: string;
}

const initialState: CountryState = {
  showCountryCapital: true,
  currentCountryId: '',
  currentRegionId: '',
  countries: [],
  regions: [],
  error: ''
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

    case CountryActionTypes.ClearCurrentCountry:
      return {
        ...state,
        currentCountryId: null
      };

    case CountryActionTypes.ResetCountries:
        return {
          ...state,
          countries: []
        };

    case CountryActionTypes.InitializeCurrentCountry:
      return {
        ...state,
        currentCountryId: ''
      };

    case CountryActionTypes.LoadEuroCountriesSuccess:
    case CountryActionTypes.LoadAsianCountriesSuccess:
      return {
        ...state,
        countries: action.payload,
        error: ''
      };

    case CountryActionTypes.LoadEuroCountriesFail:
    case CountryActionTypes.LoadAsianCountriesFail:
      return {
        ...state,
        countries: [],
        error: action.payload
      };
    
    case CountryActionTypes.LoadRegionsSuccess:
      return {
        ...state,
        regions: action.payload,
        error: ''
      };

    case CountryActionTypes.LoadRegionsFail:
      return {
        ...state,
        regions: [],
        error: action.payload
      };

    default:
      return state;
  }
}

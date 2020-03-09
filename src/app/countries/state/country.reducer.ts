import { Country } from '../country';
import { CountryActionTypes, CountryActions } from './country.actions';

// State for this feature (Country)
export interface CountryState {
  showCountryCode: boolean;
  currentCountryId: string | null;
  countries: Country[];
  error: string;
}

const initialState: CountryState = {
  showCountryCode: true,
  currentCountryId: '',
  countries: [],
  error: ''
};

export function reducer(state = initialState, action: CountryActions): CountryState {

  switch (action.type) {
    case CountryActionTypes.ToggleCountryCode:
      return {
        ...state,
        showCountryCode: action.payload
      };

    case CountryActionTypes.SetCurrentCountry:
      return {
        ...state,
        currentCountryId: action.payload.numericCode
      };

    case CountryActionTypes.ClearCurrentCountry:
      return {
        ...state,
        currentCountryId: null
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

    default:
      return state;
  }
}

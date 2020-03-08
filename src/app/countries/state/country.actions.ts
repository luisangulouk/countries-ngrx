import { Country } from '../country';

/* NgRx */
import { Action } from '@ngrx/store';

export enum CountryActionTypes {
  ToggleCountryCode = '[Country] Toggle Country Code',
  SetCurrentCountry = '[Country] Set Current Country',
  ClearCurrentCountry = '[Country] Clear Current Country',
  InitializeCurrentCountry = '[Country] Initialize Current Country',
  LoadEuroCountries = '[Country] Load Euro Countries',
  LoadEuroCountriesSuccess = '[Country] Load Euro Countries Success',
  LoadEuroCountriesFail = '[Country] Load Euro Countries Fail',
  LoadAsianCountries = '[Country] Load Asian Countries',
  LoadAsianCountriesSuccess = '[Country] Load Asian Countries Success',
  LoadAsianCountriesFail = '[Country] Load Asian Countries Fail',
}

// Action Creators
export class ToggleCountryCode implements Action {
  readonly type = CountryActionTypes.ToggleCountryCode;

  constructor(public payload: boolean) { }
}

export class SetCurrentCountry implements Action {
  readonly type = CountryActionTypes.SetCurrentCountry;

  constructor(public payload: Country) { }
}

export class ClearCurrentCountry implements Action {
  readonly type = CountryActionTypes.ClearCurrentCountry;
}

export class InitializeCurrentCountry implements Action {
  readonly type = CountryActionTypes.InitializeCurrentCountry;
}

export class LoadEuroCountries implements Action {
  readonly type = CountryActionTypes.LoadEuroCountries;
}

export class LoadEuroCountriesSuccess implements Action {
  readonly type = CountryActionTypes.LoadEuroCountriesSuccess;

  constructor(public payload: Country[]) { }
}

export class LoadEuroCountriesFail implements Action {
  readonly type = CountryActionTypes.LoadEuroCountriesFail;

  constructor(public payload: string) { }
}

export class LoadAsianCountries implements Action {
  readonly type = CountryActionTypes.LoadAsianCountries;
}

export class LoadAsianCountriesSuccess implements Action {
  readonly type = CountryActionTypes.LoadAsianCountriesSuccess;

  constructor(public payload: Country[]) { }
}

export class LoadAsianCountriesFail implements Action {
  readonly type = CountryActionTypes.LoadAsianCountriesFail;

  constructor(public payload: string) { }
}

// Union the valid types
export type CountryActions = ToggleCountryCode
  | SetCurrentCountry
  | ClearCurrentCountry
  | InitializeCurrentCountry
  | LoadEuroCountries
  | LoadEuroCountriesSuccess
  | LoadEuroCountriesFail
  | LoadAsianCountries
  | LoadAsianCountriesSuccess
  | LoadAsianCountriesFail;

import { Country } from '../country';

/* NgRx */
import { Action } from '@ngrx/store';
import { Region } from '../region';

export enum CountryActionTypes {
  ToggleCountryCapital = '[Country] Toggle Country Capital',
  SetCurrentCountry = '[Country] Set Current Country',
  SetCurrentRegion = '[Region] Set Current Region',
  LoadEuroCountries = '[Country] Load Euro Countries',
  LoadEuroCountriesSuccess = '[Country] Load Euro Countries Success',
  LoadEuroCountriesFail = '[Country] Load Euro Countries Fail',
  LoadAsianCountries = '[Country] Load Asian Countries',
  LoadAsianCountriesSuccess = '[Country] Load Asian Countries Success',
  LoadAsianCountriesFail = '[Country] Load Asian Countries Fail',
  LoadRegions = '[Region] Load Euro and Asian regions',
  LoadRegionsSuccess = '[Region] Load Euro and Asian regions Success',
  LoadRegionsFail = '[Region] Load Euro and Asian regions Fail',
}

// Action Creators
export class ToggleCountryCapital implements Action {
  readonly type = CountryActionTypes.ToggleCountryCapital;

  constructor(public payload: boolean) { }
}

export class SetCurrentCountry implements Action {
  readonly type = CountryActionTypes.SetCurrentCountry;

  constructor(public payload: Country) { }
}

export class SetCurrentRegion implements Action {
  readonly type = CountryActionTypes.SetCurrentRegion;

  constructor(public payload: Region) { }
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

export class LoadRegions implements Action {
  readonly type = CountryActionTypes.LoadRegions;
}

export class LoadRegionsSuccess implements Action {
  readonly type = CountryActionTypes.LoadRegionsSuccess;

  constructor(public payload: Region[]) { }
}

export class LoadRegionsFail implements Action {
  readonly type = CountryActionTypes.LoadRegionsFail;

  constructor(public payload: string) { }
}

// Union the valid types
export type CountryActions = ToggleCountryCapital
  | SetCurrentCountry
  | SetCurrentRegion
  | LoadEuroCountries
  | LoadEuroCountriesSuccess
  | LoadEuroCountriesFail
  | LoadAsianCountries
  | LoadAsianCountriesSuccess
  | LoadAsianCountriesFail
  | LoadRegions
  | LoadRegionsSuccess
  | LoadRegionsFail

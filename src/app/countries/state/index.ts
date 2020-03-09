import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromCountries from './country.reducer';

// Extends the app state to include the country feature.
// This is required because countries are lazy loaded.
// So the reference to CountryState cannot be added to app.state.ts directly.
export interface State extends fromRoot.State {
    countries: fromCountries.CountryState;
}

// Selector functions
const getCountryFeatureState = createFeatureSelector<fromCountries.CountryState>('countries');

export const getShowCountryCode = createSelector(
    getCountryFeatureState,
    state => state.showCountryCode
);

export const getCurrentCountryId = createSelector(
    getCountryFeatureState,
    state => state.currentCountryId
);

export const getCurrentCountry = createSelector(
    getCountryFeatureState,
    getCurrentCountryId,
    (state, currentCountryId) => {
        return currentCountryId ? state.countries.find(p => p.numericCode === currentCountryId) : null;
    }
);

export const getCountries = createSelector(
    getCountryFeatureState,
    state => state.countries
);

export const getError = createSelector(
    getCountryFeatureState,
    state => state.error
);

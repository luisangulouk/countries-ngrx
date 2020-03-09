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

export const showCountryCapital = createSelector(
    getCountryFeatureState,
    state => state.showCountryCapital
);

export const getCurrentCountryId = createSelector(
    getCountryFeatureState,
    state => state.currentCountryId
);

export const getCurrentRegionId = createSelector(
    getCountryFeatureState,
    state => state.currentRegionId
);

export const getCurrentCountry = createSelector(
    getCountryFeatureState,
    getCurrentCountryId,
    getCurrentRegionId,
    (state, currentCountryId, getCurrentRegionId) => {
        return currentCountryId && getCurrentRegionId ? 
                state.regions.find(
                    region => region.numericCode === getCurrentRegionId)
                    .countries.find(
                        country => country.numericCode === currentCountryId) 
                : null;
    }
);

export const getCountriesByRegion = createSelector(
    getCountryFeatureState,
    getCurrentRegionId,
    (state, currentRegionId) => {
        return currentRegionId ? state.regions.find(p => p.numericCode === currentRegionId).countries : null;
    }
);

export const getCountries = createSelector(
    getCountryFeatureState,
    state => state.countries
);

export const getRegions = createSelector(
    getCountryFeatureState,
    state => state.regions
);

export const getEuroCountries = createSelector(
    getCountryFeatureState,
    getRegions,
    (state, regions) => {
        return regions ? state.regions.find(p => p.name === 'Europe') : null;
    }
);

export const getAsianCountries = createSelector(
    getCountryFeatureState,
    getRegions,
    (state, regions) => {
        return regions ? state.regions.find(p => p.name === 'Asia') : null;
    }
);

export const ResetCountries = createSelector(
    getCountryFeatureState,
    state => state.countries
);

export const getError = createSelector(
    getCountryFeatureState,
    state => state.error
);

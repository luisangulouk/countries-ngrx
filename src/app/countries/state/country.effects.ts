import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';

import { CountryService } from '../country.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as countryActions from './country.actions';
import { CountryActionTypes } from './country.actions';

@Injectable()
export class CountryEffects {

  constructor(private CountryService: CountryService,
              private actions$: Actions) { }

    @Effect()
    loadRegions$: Observable<Action> = this.actions$
        .pipe(
            ofType(countryActions.CountryActionTypes.LoadRegions),
            exhaustMap(() => this.CountryService.getRegions()),
            map(regions => new countryActions.LoadRegionsSuccess(regions)),
            catchError(error => of(new countryActions.LoadRegionsFail({ error })))
        );

    @Effect()
    loadEuroCountries$: Observable<Action> = this.actions$
        .pipe(
            ofType(countryActions.CountryActionTypes.LoadEuroCountries),
            exhaustMap(() => this.CountryService.getCountries({ name: 'europe' })),
            map(countries => new countryActions.LoadEuroCountriesSuccess(countries)),
            catchError(error => of(new countryActions.LoadEuroCountriesFail({ error })))
        );

    @Effect()
    loadAsianCountries$: Observable<Action> = this.actions$
        .pipe(
            ofType(countryActions.CountryActionTypes.LoadAsianCountries),
            exhaustMap(() =>
            this.CountryService.getCountries({ name: 'asia' }).pipe(
                map(countries => (new countryActions.LoadAsianCountriesSuccess(countries))),
                catchError(error => of(new countryActions.LoadAsianCountriesFail({error})))
            )
            )
        );

}

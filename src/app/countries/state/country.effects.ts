import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { CountryService } from '../country.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as countryActions from './country.actions';

@Injectable()
export class CountryEffects {

  constructor(private CountryService: CountryService,
              private actions$: Actions) { }

    @Effect()
    loadEuroCountries$: Observable<Action> = this.actions$.pipe(
        ofType(countryActions.CountryActionTypes.LoadEuroCountries),
        mergeMap(action => this.CountryService.getCountries({ name: 'europe' }).pipe(
            map(countries => (new countryActions.LoadEuroCountriesSuccess(countries))),
            catchError(err => of(new countryActions.LoadEuroCountriesFail(err)))
        )
        )
    );

    @Effect()
    loadAsianCountries$: Observable<Action> = this.actions$.pipe(
        ofType(countryActions.CountryActionTypes.LoadAsianCountries),
        mergeMap(action =>
        this.CountryService.getCountries({ name: 'asia' }).pipe(
            map(countries => (new countryActions.LoadAsianCountriesSuccess(countries))),
            catchError(err => of(new countryActions.LoadAsianCountriesFail(err)))
        )
        )
    );

}

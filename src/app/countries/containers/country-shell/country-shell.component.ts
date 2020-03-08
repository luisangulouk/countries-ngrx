import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCountry from './../../state';
import * as countryActions from './../../state/country.actions';
import { Country } from '../../country';

@Component({
  templateUrl: './country-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryShellComponent implements OnInit {
  displayCode$: Observable<boolean>;
  selectedCountry$: Observable<Country>;
  countries$: Observable<Country[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromCountry.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new countryActions.LoadEuroCountries());
    this.countries$ = this.store.pipe(select(fromCountry.getCountries));
    this.errorMessage$ = this.store.pipe(select(fromCountry.getError));
    this.selectedCountry$ = this.store.pipe(select(fromCountry.getCurrentCountry));
    this.displayCode$ = this.store.pipe(select(fromCountry.getShowCountryCode));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new countryActions.ToggleCountryCode(value));
  }

  newCountry(): void {
    this.store.dispatch(new countryActions.InitializeCurrentCountry());
  }

  countrySelected(country: Country): void {
    this.store.dispatch(new countryActions.SetCurrentCountry(country));
  }

  clearCountry(): void {
    this.store.dispatch(new countryActions.ClearCurrentCountry());
  }

}

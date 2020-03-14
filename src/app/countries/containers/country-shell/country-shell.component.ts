import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCountry from './../../state';
import * as countryActions from './../../state/country.actions';
import { Country } from '../../country';
import { Region } from '../../region';

@Component({
  templateUrl: './country-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryShellComponent implements OnInit {

  regions$: Observable<Region[]>;
  selectedCountriesByRegion$: Observable<Country[]>;
  selectedCountry$: Observable<Country>;
  displayCapital$: Observable<boolean>;
  errorMessage$: Observable<Error>;

  constructor(private store: Store<fromCountry.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new countryActions.LoadRegions());
    this.regions$ = this.store.pipe(select(fromCountry.getRegions));
    this.selectedCountriesByRegion$ = this.store.pipe(select(fromCountry.getCountriesByRegion));
    this.selectedCountry$ = this.store.pipe(select(fromCountry.getCurrentCountry));
    this.displayCapital$ = this.store.pipe(select(fromCountry.showCountryCapital));
    this.errorMessage$ = this.store.pipe(select(fromCountry.getError));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new countryActions.ToggleCountryCapital(value));
  }

  countrySelected(country: Country): void {
    this.store.dispatch(new countryActions.SetCurrentCountry(country));
  }

  regionSelected(region: Region): void {
    this.store.dispatch(new countryActions.SetCurrentRegion(region));
  }

}

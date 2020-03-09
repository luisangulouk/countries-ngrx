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

  regions: Region[] = [
        { numericCode: '1', name: 'Asia', countries: [] },
        { numericCode: '2', name: 'Europe', countries: [] }
    ];

  displayCapital$: Observable<boolean>;
  selectedCountry$: Observable<Country>;
  countries$: Observable<Country[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromCountry.State>) {}

  ngOnInit(): void {
    //this.store.dispatch(new countryActions.LoadEuroCountries());
    this.countries$ = this.store.pipe(select(fromCountry.getCountries));
    this.errorMessage$ = this.store.pipe(select(fromCountry.getError));
    this.selectedCountry$ = this.store.pipe(select(fromCountry.getCurrentCountry));
    this.displayCapital$ = this.store.pipe(select(fromCountry.getShowCountryCode));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new countryActions.ToggleCountryCode(value));
  }

  newCountry(): void {
    this.store.dispatch(new countryActions.InitializeCurrentCountry());
  }

  countrySelected(country: Country): void {
    console.log(country);
    this.store.dispatch(new countryActions.SetCurrentCountry(country));
  }

  clearCountry(): void {
    this.store.dispatch(new countryActions.ClearCurrentCountry());
  }

  regionSelected(region: Region): void {
    switch(region.name){
      case 'Asia': this.store.dispatch(new countryActions.LoadAsianCountries()); break;
      case 'Europe': this.store.dispatch(new countryActions.LoadEuroCountries()); break;
      default: break;
    }
  }

}

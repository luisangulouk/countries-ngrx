import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CountryShellComponent } from './containers/country-shell/country-shell.component';
import { CountryListComponent } from './components/country-list/country-list.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/country.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './state/country.effects';

const countryRoutes: Routes = [
  { path: '', component: CountryShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(countryRoutes),
    StoreModule.forFeature('countries', reducer),
    EffectsModule.forFeature(
      [ CountryEffects ]
    ),
  ],
  declarations: [
    CountryShellComponent,
    CountryListComponent
  ]
})
export class CountryModule { }

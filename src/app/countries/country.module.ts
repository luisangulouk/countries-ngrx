import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { CountryShellComponent } from './containers/country-shell/country-shell.component';
import { uiEntityListComponent } from './components/ui-entity-list/ui-entity-list.component';

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
    NgbModule,
    SharedModule,
    RouterModule.forChild(countryRoutes),
    StoreModule.forFeature('countries', reducer),
    EffectsModule.forFeature(
      [ CountryEffects ]
    ),
  ],
  declarations: [
    CountryShellComponent,
    uiEntityListComponent
  ]
})
export class CountryModule { }

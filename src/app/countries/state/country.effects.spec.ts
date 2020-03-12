import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { CountryService } from '../country.service';
import { Country } from '../country';
import { LoadEuroCountries, LoadEuroCountriesSuccess, LoadEuroCountriesFail, CountryActions } from './country.actions';
import { CountryEffects } from './country.effects';

describe(`Effect: Countries`, () => {
    let actions: Observable<CountryActions>;
    let effects: CountryEffects;
    let service: CountryService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
            CountryEffects,
          provideMockActions(() => actions),
          {
            provide: CountryService,
            useValue: {
              getCountries: jest.fn()
            }
          }
        ]
      });
  
      service = TestBed.get(CountryService);
      effects = TestBed.get(CountryEffects);
    });

    it('should be created', () => {
      expect(effects).toBeTruthy();
    });
  
    describe('loadCountries', () => {
      it('should return a LoadEuroCountriesSuccess action, with the users, on success', () => {
        const countries = [{
          numericCode: '001',
          name: 'United Kingdom',
          capital: 'London',
          population: 60000000,
          currencies: [{ code: 'GBP', name: 'British Pound'}],
          flag: 'some url'
        }];
        const action = new LoadEuroCountries();
        const outcome = new LoadEuroCountriesSuccess(countries);
  
        actions = hot('-a', { a: action });
        const response = cold('-a|', { a: countries });
        const expected = cold('--b', { b: outcome });
        service.getCountries = jest.fn(() => response);
  
        expect(effects.loadEuroCountries$).toBeObservable(expected);
      });

    });

  });
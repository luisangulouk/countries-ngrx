import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { CountryService } from '../country.service';
import { LoadEuroCountries, LoadEuroCountriesSuccess, LoadEuroCountriesFail, CountryActions, CountryActionTypes, LoadRegions, LoadRegionsSuccess, LoadRegionsFail } from './country.actions';
import { CountryEffects } from './country.effects';

describe(`Effect: Countries`, () => {
    let actions: Observable<CountryActions>;
    let effects: CountryEffects;
    let service: CountryService;
    const countries = [{
      numericCode: '001',
      name: 'United Kingdom',
      capital: 'London',
      population: 60000000,
      currencies: [{ code: 'GBP', name: 'British Pound'}],
      flag: 'some url'
    }];
    const regions = [
      { numericCode: '1', name: 'Asia', countries: countries },
      { numericCode: '2', name: 'Europe', countries: countries }
    ]
  
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
  
    describe('load European Countries', () => {
      it('should return a LoadEuroCountriesSuccess action, with the countries, on success', () => {
        const action = new LoadEuroCountries();
        const outcome = new LoadEuroCountriesSuccess(countries);
  
        actions = hot('-a', { a: action });
        const response = cold('-a|', { a: countries });
        const expected = cold('--b', { b: outcome });
        service.getCountries = jest.fn(() => response);
  
        expect(effects.loadEuroCountries$).toBeObservable(expected);
      });

      it('should return a LoadEuroCountriesFail action, with an error, on failure', () => {
        const error = new Error();
        const action = new LoadEuroCountries();
        const outcome = new LoadEuroCountriesFail({error});
  
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, error );
        const expected = cold('--(b|)', { b: outcome });
        service.getCountries = jest.fn(() => response);
  
        expect(effects.loadEuroCountries$).toBeObservable(expected);
      });

    });

  });
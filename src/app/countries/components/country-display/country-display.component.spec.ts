import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { countryDisplayComponent } from './country-display.component';

describe('countryDisplayComponent', () => {
    const country = {
        numericCode: '001',
        name: 'United Kingdom',
        capital: 'London',
        population: 60000000,
        currencies: [ { code: 'GBP', name: 'British Pound'} ],
        flag: 'some-url'
      }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            RouterTestingModule
        ],
        declarations: [
            countryDisplayComponent
        ],
        }).compileComponents();
    }));

    it('should create the displayCountryComponent', () => {
        const fixture = TestBed.createComponent(countryDisplayComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as method called 'displayCountry'`, () => {
        const fixture = TestBed.createComponent(countryDisplayComponent);
        const app = fixture.componentInstance;
        expect(app.displayCountry).toBeDefined();
    });

    it('should update local prop country with a selected-country', () => {
        const fixture = TestBed.createComponent(countryDisplayComponent);
        const app = fixture.componentInstance;
        app.displayCountry(country);
        expect(app.pageTitle).toBe(`Country: ${country.name}`);
    });
});

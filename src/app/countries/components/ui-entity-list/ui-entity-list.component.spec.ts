import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { uiEntityListComponent } from './ui-entity-list.component';

describe('uiEntityListComponent', () => {
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
            uiEntityListComponent
        ],
        }).compileComponents();
    }));

    it('should create the uiEntityListComponent', () => {
        const fixture = TestBed.createComponent(uiEntityListComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have methods ['checkChanged','entitySelected']`, () => {
        const fixture = TestBed.createComponent(uiEntityListComponent);
        const app = fixture.componentInstance;
        expect(app.checkChanged).toBeDefined();
        expect(app.entitySelected).toBeDefined();
    });

    it('should update local prop entityProfileTag with the name of selected-country', () => {
        const fixture = TestBed.createComponent(uiEntityListComponent);
        const app = fixture.componentInstance;
        app.entitySelected(country);
        expect(app.entityProfileTag).toBe(country.name);
    });
});

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Country } from '../../country';

@Component({
  selector: 'country-profile',
  templateUrl: './country-display.component.html',
  styleUrls: ['./country-display.component.css']
})
export class countryDisplayComponent implements OnChanges {
  pageTitle = 'Country Profile';
  @Input() errorMessage: string;
  @Input() selectedCountry: Country;

  country: Country | null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedCountry) {
      const country: any = changes.selectedCountry.currentValue as Country;
      this.displayCountry(country);
    }
  }

  displayCountry(country: Country | null): void {
    // Set the local country property
    this.country = country;

    if (this.country) {
      this.pageTitle = `Country: ${this.country.name}`;

    }
  }

}

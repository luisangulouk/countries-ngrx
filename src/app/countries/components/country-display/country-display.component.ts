import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { Country } from '../../country';

@Component({
  selector: 'country-profile',
  templateUrl: './country-display.component.html',
  styleUrls: ['./country-display.component.css']
})
export class countryDisplayComponent implements OnInit, OnChanges, OnDestroy {
  pageTitle = 'Country Profile';
  @Input() errorMessage: string;
  @Input() selectedCountry: Country;

  componentActive = true;
  country: Country | null;

  constructor() {}

  ngOnInit(): void {
    console.log(this.selectedCountry);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedCountry) {
      const country: any = changes.selectedCountry.currentValue as Country;
      this.displayCountry(country);
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }


  displayCountry(country: Country | null): void {
    // Set the local country property
    this.country = country;

    if (this.country) {
      this.pageTitle = `Country: ${this.country.name}`;

    }
  }

}

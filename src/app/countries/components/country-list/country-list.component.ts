import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../country';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  pageTitle = 'Country';

  @Input() errorMessage: string;
  @Input() countries: Country[];
  @Input() displayCode: boolean;
  @Input() selectedCountry: Country;
  @Output() checked = new EventEmitter<boolean>();
  @Output() selected = new EventEmitter<Country>();

  checkChanged(value: boolean): void {
    this.checked.emit(value);
  }

  countrySelected(country: Country): void {
    this.selected.emit(country);
  }

}

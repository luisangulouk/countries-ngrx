import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../country';
import { Region } from '../../region';

@Component({
  selector: 'ui-entity-list',
  templateUrl: './ui-entity-list.component.html',
  styleUrls: ['./ui-entity-list.component.css']
})
export class uiEntityListComponent {

  @Input() entityTag: string;
  @Input() errorMessage: string;
  @Input() entities: Country[] | Region[];
  @Input() displayCapital: boolean;
  @Input() selectedEntity: Country | Region;
  @Output() checked = new EventEmitter<boolean>();
  @Output() selected = new EventEmitter<Country>();

  checkChanged(value: boolean): void {
    this.checked.emit(value);
  }

  entitySelected(entity: Country): void {
    this.selected.emit(entity);
  }

}

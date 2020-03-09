import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from '../../country';
import { Region } from '../../region';

@Component({
  selector: 'ui-entity-list',
  templateUrl: './ui-entity-list.component.html',
  styleUrls: ['./ui-entity-list.component.css']
})
export class uiEntityListComponent implements OnChanges{

  @Input() entityTag: string;
  @Input() errorMessage: string;
  @Input() entities: Country[] | Region[];
  @Input() displayCapital: boolean;
  @Input() selectedEntity: Country | Region;
  @Output() checked = new EventEmitter<boolean>();
  @Output() selected = new EventEmitter<Country>();

  public entityProfileTag: string ='Select one';

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.entities) {
      this.entityProfileTag = 'Select one';
    }
  }

  checkChanged(value: boolean): void {
    this.checked.emit(value);
  }

  entitySelected(entity: Country): void {
    this.entityProfileTag = entity.name;
    this.selected.emit(entity);
  }



}

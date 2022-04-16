import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Utils} from '../../../../utils';
import {CHECKBOX_PIC} from '../../../../global';
import {PropertyState} from '../../enums/propertyState';

@Component({
  selector: 'mx-item-selection',
  templateUrl: './item-selection.component.html',
  styleUrls: ['./item-selection.component.scss'],
})
export class ItemSelectionComponent implements OnInit {

  @Input() label: string;
  @Input() values: PropertyState[];
  @Input() preview = false;
  @Input() selected: PropertyState[];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  initialButtons: string[] = [];
  previewNumber = 3;
  public showMore = false;
  public CHECKBOX_PIC = CHECKBOX_PIC;

  constructor() {
  }


  ngOnInit() {
  }

  itemClicked(item) {
    this.selected = Utils.addRemoveArrayItem(this.selected, item);
    this.onClick.emit(this.selected);
  }


  public onItemClick($event) {
    this.values = Utils.addRemoveArrayItem(this.values, $event);
    this.onClick.emit(this.values);
  }


  public isSelected(value: PropertyState): boolean {
    return this.selected?.includes(value);
  }

}

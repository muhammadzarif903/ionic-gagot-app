import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Utils} from '../../../../utils';
import {CHECKBOX_PIC} from '../../../../global';

@Component({
  selector: 'mx-item-selection',
  templateUrl: './item-selection.component.html',
  styleUrls: ['./item-selection.component.scss'],
})
export class ItemSelectionComponent implements OnInit {

  @Input() label: string;
  @Input() values: any[];
  @Input() preview = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  selected: any[];
  initialButtons: string[] = [];
  previewNumber = 3;
  public showMore = false;
  public CHECKBOX_PIC = CHECKBOX_PIC;

  constructor() {
  }


  ngOnInit() {
  }

  itemClicked(item) {
    console.log(this.selected);
    this.selected = Utils.addRemoveArrayItem(this.selected, item);
    this.onClick.emit(this.selected);
  }


  public onItemClick($event) {
    this.values = Utils.addRemoveArrayItem(this.values, $event);
    this.onClick.emit(this.values);
  }


  public isSelected(value: string): boolean {
    return this.selected?.includes(value);
  }

}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Utils} from '../../../../utils';
import {TextType} from '../text/text.component';

@Component({
  selector: 'mx-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss'],
})
export class ButtonListComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() buttons: string[];
  @Input() values: string[];
  @Input() preview = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  previewButtons: string[];
  initialButtons: string[] = [];
  previewNumber = 3;
  public showMore = false;
  public textType = TextType.sectionTitle;

  constructor() {
  }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.buttons) {
      this.setPreviewButtons();
    }
  }


  public onButtonClick($event) {
    this.values = Utils.addRemoveArrayItem(this.values, $event);
    this.onClick.emit(this.values);
  }

  public onOtherClick() {
    this.toggleShowMore();
  }

  public isSelected(value: string): boolean {
    return this.values?.includes(value);
  }

  private setPreviewButtons() {
    this.initialButtons = [...this.buttons];
    if (this.preview) {
      this.previewButtons = this.buttons.slice(0, this.previewNumber);
    } else {
      this.previewButtons = this.buttons;
    }
    this.initialButtons = [...this.previewButtons];
  }

  private toggleShowMore() {
    this.showMore = !this.showMore;
    if (this.showMore) {
      this.previewButtons = this.buttons;
    } else {
      this.previewButtons = this.initialButtons;
    }
  }

}

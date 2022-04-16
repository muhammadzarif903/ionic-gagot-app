import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {categories} from './categories.data';
import {Color} from '../../enums';
import {TextType} from '../text/text.component';
import {CategoryEnum} from '../../enums/categoryEnum';

export interface ICategory {
  title?: string;
  size?: string;
  icon?: string;
  selected?: boolean;
}

@Component({
  selector: 'mx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {


  @Input() label: string;
  @Input() categories = categories;
  @Input() inRow: boolean;
  @Input() selected: CategoryEnum;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  public Color = Color;
  public TextType = TextType;

  constructor() {
  }

  ngOnInit() {
  }

  public onCategoryChange($event) {
    this.selected = $event.detail.value;
    this.onClick.emit($event);
  }

}

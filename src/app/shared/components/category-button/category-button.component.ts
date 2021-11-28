import {Component, Input, OnInit} from '@angular/core';
import {TextType} from '../text/text.component';
import {Color} from '../../enums';

export interface ICategory {
  title?: string;
  size?: string;
  icon?: string;
  selected?: boolean;
}

@Component({
  selector: 'mx-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss'],
})
export class CategoryButtonComponent implements OnInit {

  @Input() title: string;
  @Input() size: string;
  @Input() icon: string;
  @Input() selected: boolean;

  public color = Color;
  public textType = TextType;

  constructor() {
  }

  ngOnInit() {
  }

  onClick($event) {
    this.selected = true;
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {categories} from './categories.data';

@Component({
  selector: 'mx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {


  @Input() categories = categories;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

}

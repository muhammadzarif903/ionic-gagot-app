import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Color} from '../../enums';

export enum TextType {
  header = 'header',
  title = 'title',
  button = 'button',
  sectionTitle = 'sectionTitle',
  description = 'description',
  label = 'label',
  placeholder = 'placeholder'
}

@Component({
  selector: 'mx-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {

  @Input() title: string;
  @Input() type: TextType;
  @Input() color: Color;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  public clickHandler($event) {
    if (this.type === TextType.button) {
      this.onClick.emit($event);
    }
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Color} from '../../enums';

export enum InputType {
  date = 'date',
  datetime = 'datetime-local',
  email = 'email',
  month = 'month',
  number = 'number',
  password = 'password',
  search = 'search',
  tel = 'tel',
  text = 'text',
  file = 'file',
  time = 'time',
  url = 'url',
  week = 'week'
}

@Component({
  selector: 'mx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() value: string;
  // defaulf "off"
  @Input() autocomplete: 'on' | 'off';
  @Input() autocorrect: 'on' | 'off';
  @Input() clearInput: boolean;
  @Input() required: boolean;
  @Input() color: Color | 'string';
  @Input() maxlength: number;
  @Input() minlength: number;
  // If true, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.
  @Input() clearOnEdit: boolean;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() border: boolean;
  // This attribute applies only when the type attribute is set to "text", "search", "tel", "url", "email", or "password", otherwise it is ignored.
  @Input() size: number;
  @Input() icon: string;
  @Input() min: any;
  @Input() max: any;
  // Works with the min and max
  @Input() step: any;
  @Input() spellcheck: boolean;
  @Input() placeholder: string;
  // This attribute applies when the type attribute is set to "email" or "file", otherwise it is ignored.
  @Input() multiple: boolean;
  @Input() type: InputType;
  @Input() label: string;

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();
  @Output() onInput: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  public onChangeEvent($event) {
    this.onChange.emit($event);
  }

  public onFocusEvent($event) {
    this.onFocus.emit($event);
  }

  public onBlurEvent($event) {
    this.onBlur.emit($event);
  }

  public onInputEvent($event) {
    this.onInput.emit($event);
  }

}

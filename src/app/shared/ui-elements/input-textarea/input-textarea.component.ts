import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export enum InputAreaMode {
  decimal = 'decimal',
  email = 'email',
  none = 'none',
  numeric = 'numeric',
  search = 'search',
  tel = 'tel',
  text = 'text',
  url = 'url'
}

export enum InputAreaModeType {
  ios = ' ios',
  md = 'md'
}


@Component({
  selector: 'mx-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss'],
})
export class InputTextAreaComponent implements OnInit {


  @Input() value: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() icon: string;
  @Input() autoGrow: boolean;
  @Input() autofocus: boolean;
  @Input() cols: number;
  @Input() rows: number;
  @Input() debounce: number;
  @Input() inputmode: InputAreaMode;
  @Input() mode: InputAreaModeType;
  @Input() placeholder: string;
  @Input() enterkeyhint: 'done' | 'enter' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
  @Input() wrap: 'hard' | 'off' | 'soft' | undefined;

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();
  @Output() onInput: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  public onChangeEvent($event) {
    this.value = $event;
    this.onChange.emit($event);
  }

  public onFocusEvent($event) {
    this.onFocus.emit($event);
  }

  public onBlurEvent($event) {
    this.onBlur.emit($event);
  }

  public onInputEvent($event) {
    this.value = $event;
    // this.onInput.emit($event);
  }


}

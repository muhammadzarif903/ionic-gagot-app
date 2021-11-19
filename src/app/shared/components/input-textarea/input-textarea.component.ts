import {Component, Input, OnInit} from '@angular/core';

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
  @Input() enterkeyhint: 'done' | 'enter' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
  @Input() wrap: 'hard' | 'off' | 'soft' | undefined;

  constructor() {
  }

  ngOnInit() {
  }

  public onChange($event) {
  }

  public onFocus($event) {
  }

  public onBlur($event) {
  }

  public onInput($event) {

  }


}

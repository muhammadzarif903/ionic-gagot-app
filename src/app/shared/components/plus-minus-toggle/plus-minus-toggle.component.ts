import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mx-plus-minus-toggle',
  templateUrl: './plus-minus-toggle.component.html',
  styleUrls: ['./plus-minus-toggle.component.scss'],
})
export class PlusMinusToggleComponent implements OnInit {


  @Input() title: string = '';
  @Input() value: number = 0;

  @Input() min: number;
  @Input() max: number;

  @Output() onChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }


  public onMinusClick() {
    if (this.value <= 0 || this.value <= this.min) {
      this.onChange.emit(0);
    } else {
      this.value--;
      this.onChange.emit(this.value);
    }
  }

  public onPlusClick() {
    if (this.max <= this.value) {
      this.onChange.emit(this.max);
    } else {
      this.value++;
      this.onChange.emit(this.value);
    }
  }
}

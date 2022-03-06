import {Component, Input, OnInit} from '@angular/core';
import {TextType} from '../text/text.component';

@Component({
  selector: 'mx-set-time',
  templateUrl: './set-time.component.html',
  styleUrls: ['./set-time.component.scss'],
})
export class SetTimeComponent implements OnInit {

  @Input() title: string;
  @Input() timeSlots: any = [];
  @Input() type: TextType;
  public selectedTime = "";

  constructor() {
  }

  ngOnInit() {
    if (this.timeSlots?.length) {
      this.selectedTime = this.timeSlots[0];
    }
  }

  selectTime(time) {
    this.selectedTime = time;
  }
}

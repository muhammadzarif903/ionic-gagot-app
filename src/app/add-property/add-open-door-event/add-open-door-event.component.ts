import {Component, Input, OnInit} from '@angular/core';
import moment from 'moment';
import {IProperty} from 'src/app/shared/interfaces/property.interface'
import {TextType} from '../../shared/ui-elements/text/text.component';

@Component({
  selector: 'mx-add-open-door-event',
  templateUrl: './add-open-door-event.component.html',
  styleUrls: ['./add-open-door-event.component.scss'],
})
export class AddOpenDoorEventComponent implements OnInit {
  @Input() property: IProperty;
  public textType = TextType;

  constructor() {
  }

  startTimeSlot = [];

  ngOnInit() {
    for (let hour = 8; hour < 24; hour++) {
      this.startTimeSlot.push(moment({hour}).format('HH:mm'));
      if (hour != 23) {
        this.startTimeSlot.push(moment({hour, minute: 30}).format('HH:mm'));
      }
    }
  }

}

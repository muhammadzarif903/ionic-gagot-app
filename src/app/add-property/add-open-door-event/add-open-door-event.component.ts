import { Component, Input, OnInit } from '@angular/core';
import { TextType } from 'src/app/shared/components/text/text.component';
import { IProperty } from 'src/app/shared/interfaces/property.interface'
@Component({
  selector: 'mx-add-open-door-event',
  templateUrl: './add-open-door-event.component.html',
  styleUrls: ['./add-open-door-event.component.scss'],
})
export class AddOpenDoorEventComponent implements OnInit {
  @Input() property: IProperty;
  public textType = TextType;
  constructor() { }
  startTimeSlot=["8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00"]
  ngOnInit() {}

}

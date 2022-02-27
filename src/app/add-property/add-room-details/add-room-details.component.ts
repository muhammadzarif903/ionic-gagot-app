import { Component, Input, OnInit } from '@angular/core';
import { TextType } from 'src/app/shared/components/text/text.component';
import { IProperty } from 'src/app/shared/interfaces/property.interface';
import { KitchenEnum } from '../../shared/enums/kitchen.enum';
import { Additional } from '../../shared/enums/bath.enum'

@Component({
  selector: 'mx-add-room-details',
  templateUrl: './add-room-details.component.html',
  styleUrls: ['./add-room-details.component.scss'],
})
export class AddRoomDetailsComponent implements OnInit {

  @Input() property: IProperty;
  public textType = TextType;
  public kitchenAmenities = Object.values(KitchenEnum);
  public additional = Object.values(Additional)
  constructor() { }
  public images=["../../../../assets/img.png"]
  public items=[{img:'../../../../assets/img.png',name:"Bath Cabin "},{img:'../../../../assets/img.png',name:"Bath"}]
  // 
  ngOnInit() {
    console.log(this.additional)
   }
  public onKitchenChange($event) {
    this.property.kitchen = $event;
  }
  public onAdditionalChange($event) {
    this.property.additional = $event;
  }
  public bedroom1($event) {
    this.property.bedroom = $event;
  }
}

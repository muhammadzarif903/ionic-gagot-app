import {Component, Input, OnInit} from '@angular/core';
import {IProperty} from 'src/app/shared/interfaces/property.interface';
import {KitchenEnum} from '../../shared/enums/kitchen.enum';
import {TextType} from '../../shared/ui-elements/text/text.component';
import {BathEnum} from '../../shared/enums/bath.enum';
import {IMAGE_PATH} from '../../../global';


@Component({
  selector: 'mx-add-room-details',
  templateUrl: './add-room-details.component.html',
  styleUrls: ['./add-room-details.component.scss'],
})
export class AddRoomDetailsComponent implements OnInit {

  @Input() property: IProperty;
  public textType = TextType;
  public kitchenAmenities = Object.values(KitchenEnum);
  public additionalBath = Object.values(BathEnum);

  constructor() {
  }

  public images = [IMAGE_PATH, IMAGE_PATH, IMAGE_PATH, IMAGE_PATH, IMAGE_PATH];
  public items = [{
    img: IMAGE_PATH,
    name: BathEnum.BathCabin
  }, {
    img: IMAGE_PATH,
    name: BathEnum.Bath
  }];

  //
  ngOnInit() {
    console.log(this.additionalBath);
  }

  public onKitchenChange($event) {
    this.property.kitchen = $event;
  }

  public onAdditionalChange($event) {
    this.property.additionalBath = $event;
  }

  public bedroom1($event) {
    this.property.bedroom = $event;
  }
}

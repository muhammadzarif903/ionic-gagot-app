import {Component, Input, OnInit} from '@angular/core';
import {IProperty} from '../../shared/interfaces/property.interface';
import {CommonAmenitiesEnum, SafetyAmenitiesEnum} from '../../shared/enums/amenities.enum';
import {FacilitiesEnum} from '../../shared/enums/facilities.enum';
import {KitchenEnum} from '../../shared/enums/kitchen.enum';
import {TextType} from '../../shared/ui-elements/text/text.component';
import {InputType} from '../../shared/ui-elements/input/input.component';

@Component({
  selector: 'mx-add-property-details',
  templateUrl: './add-property-details.component.html',
  styleUrls: ['./add-property-details.component.scss'],
})
export class AddPropertyDetailsComponent implements OnInit {

  @Input() property: IProperty;

  public defaultSelectedRadio = "radio_2";
  //Get value on ionChange on IonRadioGroup
  public selectedRadioGroup: any;
  //Get value on ionSelect on IonRadio item
  public selectedRadioItem: any;
  public radio_list = [
    {
      id: '0',
      name: 'radio_list',
      value: 'radio_1',
      text: 'YES',
      disabled: false,
      checked: true,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: 'radio_2',
      text: 'NO',
      disabled: false,
      checked: false,
      color: 'secondary'
    }
  ];
  public customDayShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public amenities = Object.values(CommonAmenitiesEnum);
  public kitchenAmenities = Object.values(KitchenEnum);
  public safetyAmenitiesList = Object.values(SafetyAmenitiesEnum);
  public facilitiesList = Object.values(FacilitiesEnum);
  public dateValue = new Date().getFullYear();
  public years = [];

  public textType = TextType;
  public inputType = InputType;

  constructor() {
  }


  ngOnInit() {
    this.setYears();
  }

  public onYearChange($event) {
    // this.dateValue = $event.value;
  }

  private setYears() {
    const res = [];
    const currentYear = new Date().getFullYear() + 5;
    for (let i = 0; i < 70; i++) {
      const valName = currentYear - i;
      res.push({value: valName, name: valName});
    }
    this.years = res;
  }

  public radioGroupChange(event) {
    console.log("radioGroupChange", event.detail);
    this.selectedRadioGroup = event.detail;
  }

  public radioFocus() {
    console.log("radioFocus");
  }


  public radioBlur() {
    console.log("radioBlur");
  }

  public onNewConstructionSelect($event) {
    this.property.newConstruction = $event;
  }

  public onYearBuildSelect($event) {
    this.property.built = $event;
  }

  public onDescriptionInput($event) {
    this.property.description = $event;
  }

  public onSquareAreaInput($event) {
    this.property.square = $event;
  }

  public onLastFloor($event) {
    this.property.floor = $event;
  }

  public onFloorChange($event) {
    this.property.floor = $event;
  }

  public onBedroomsChange($event) {
    this.property.bedroom = $event;
  }

  public onBathroomsChange($event) {
    this.property.bathroom = $event;
  }

  public onKitchenChange($event) {
    this.property.kitchen = $event;
  }

  public onBalconiesChange($event) {
    this.property.balcony = $event;
  }

  public onAmenitiesClick($event) {

  }

  public onSafetyAmenitiesClick($event) {

  }

  public onFacilitiesClick($event) {

  }
}

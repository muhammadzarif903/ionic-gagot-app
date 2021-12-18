import {Component, Input, OnInit} from '@angular/core';
import {IPropertyDetails} from '../../shared/interfaces/property.interface';
import {TextType} from '../../shared/components/text/text.component';

@Component({
  selector: 'mx-add-property-details',
  templateUrl: './add-property-details.component.html',
  styleUrls: ['./add-property-details.component.scss'],
})
export class AddPropertyDetailsComponent implements OnInit {

  @Input() property: IPropertyDetails;

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

  pepperoni: any;
  sausage: any;
  mushrooms: any;

  public dateValue = new Date().getFullYear();
  public years = [];

  public textType = TextType;

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
      res.push(currentYear - i);
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

  public onKitchenChange($event) {
    this.property.kitchen = $event;
  }

  public onBalconyChange($event) {
    this.property.balcony = $event;
  }
}

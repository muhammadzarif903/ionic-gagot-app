import {Component, OnInit} from '@angular/core';
import {InputType} from '../shared/ui-elements/input/input.component';
import {TextType} from '../shared/ui-elements/text/text.component';
import {IMAGE_PATH} from '../../global';
import {NextToEnum} from '../shared/enums/nexto.num';
import {CategoryEnum} from '../shared/enums/categoryEnum';
import {PropertyState} from '../shared/enums/propertyState';
import {CommonAmenitiesEnum, SafetyAmenitiesEnum} from '../shared/enums/amenities.enum';
import {KitchenEnum} from '../shared/enums/kitchen.enum';
import {FacilitiesEnum} from '../shared/enums/facilities.enum';

@Component({
  selector: 'mx-search-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  public InputType = InputType;
  public TextType = TextType;
  public items = [{img: IMAGE_PATH, name: "Sell"}, {img: IMAGE_PATH, name: "Rent"}]
  public nextToList = Object.values(NextToEnum);
  public amenities = Object.values(CommonAmenitiesEnum);
  public kitchenAmenities = Object.values(KitchenEnum);
  public safetyAmenitiesList = Object.values(SafetyAmenitiesEnum);
  public facilitiesList = Object.values(FacilitiesEnum);
  public years = [];
  public dateValue = new Date().getFullYear();
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

  public filterObj = {
    category: CategoryEnum.Apartments,
    nextTo: [],
    minPrice: 0,
    maxPrice: 1,
    minSquare: 0,
    maxSquare: 1,
    state: [PropertyState.Selling, PropertyState.Renting],
    bathrooms: 0,
    bedrooms: 0,
    floor: 0,
    publishedBy: null,
    publishedDate: null,
    newConstruction: false,
    amenities: [],
    facilities: [],
    safetyAmenities: [],
    built: null,
    onTheLand: false
  }

  constructor() {
  }

  ngOnInit() {
    this.setYears();
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

  public onCategorySelect($event) {
    // this.property.category = $event;
  }

  public onStateSelect($event) {
  }

  public onMinMaxPriceChange(min: number, max: number) {
    this.filterObj.minPrice = min;
    this.filterObj.maxPrice = max;
  }

  public onMinMaxSquareChange(min: number, max: number) {
    this.filterObj.minSquare = min;
    this.filterObj.maxSquare = max;
  }

  public onNewConstructionSelect($event) {
    this.filterObj.newConstruction = $event;
  }


  public radioFocus() {
    console.log("radioFocus");
  }

  public radioBlur() {
    console.log("radioBlur");
  }

  public onNextToClick($event) {
  }

  public onBedroomsChange($event) {
  }

  public onYearBuildSelect($event) {
    this.filterObj.built = $event;
  }

  public onBathroomsChange($event) {
  }

  public onAmenitiesClick($event) {
  }

  public onSafetyAmenitiesClick($event) {
  }

  public onFacilitiesClick($event) {
  }
}

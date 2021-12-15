import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {IProgressBarStep} from '../shared/components/progress-bar/progress-bar.component';
import {StateService, StateType} from '../shared/services/state.service';
import {Router} from '@angular/router';
import {TextType} from '../shared/components/text/text.component';
import {IPropertyDetails} from '../shared/interfaces/property.interface';
import {IonDatetime} from '@ionic/angular';
import {format, parseISO} from 'date-fns';

export enum AddPropertyScreen {
  location = 'location',
  propertyDetails = 'propertyDetails',
  roomDetails = 'roomDetails',
  media = 'media',
  priceAndAgreement = 'priceAndAgreement',
  openDoorEvent = 'openDoorEvent'
}

@Component({
  selector: 'mx-add-listing',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent {

  @ViewChild(IonDatetime, {static: true}) datetime: IonDatetime;


  public property: IPropertyDetails;
  private rootRoute = '/addProperty';
  public steps: IProgressBarStep[] = [];
  public textType = TextType;
  public routeLinks = [
    {path: '', title: 'TITLES.ADD_NEW_PROPERTY'},
    {path: AddPropertyScreen.location, active: false, title: 'TITLES.LOCATION'},
    {path: AddPropertyScreen.propertyDetails, active: false, title: 'TITLES.PROPERTY_DETAILS'},
    {path: AddPropertyScreen.roomDetails, active: false, title: 'TITLES.ROOM_DETAILS'},
    {path: AddPropertyScreen.media, active: false, title: 'TITLES.MEDIA'},
    {path: AddPropertyScreen.priceAndAgreement, active: false, title: 'TITLES.PRICE_AND_AGREEMENT'},
    {path: AddPropertyScreen.openDoorEvent, active: false, title: 'TITLES.OPEN_DOOR_EVENTS'}];

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

  public dateValue = new Date().getFullYear();
  public years = [];

  constructor(private router: Router,
              private stateService: StateService) {
    this.steps = this.routeLinks.map(obj => ({
      title: obj.title,
      active: obj.active,
      state: obj.active ? StateType.submitted : StateType.initial
    }));

    this.setYears();
  }
  public onYearChange($event) {
    console.log($event);
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

  public radioSelect(event) {
    console.log("radioSelect", event.detail);
    this.selectedRadioItem = event.detail;
  }

  public radioBlur() {
    console.log("radioBlur");
  }

  private getActiveRoute(): number {
    return this.routeLinks.findIndex((el) => el.active) || 0;
  }

  public onCategoryClick($event) {

  }

  private activateRoute(next?: boolean): any {
    let index = this.getActiveRoute();
    index += next ? 1 : -1;
    index = index < 0 ? undefined : index;
    this.routeLinks.forEach(el => el.active = false);
    if (index <= this.routeLinks.length) {
      this.routeLinks[index].active = true;
    }
    return this.routeLinks[index];
  }

  public previousPage() {
    const route = this.activateRoute();
    this.navigate(route);
    this.updateStep();
  }

  public nextPage() {
    const route = this.activateRoute(true);
    this.navigate(route);
    this.updateStep();
  }


  private navigate(route) {
    if (route) {
      this.router.navigate([`${this.rootRoute}/${route?.path}`]);
    }
  }

  private updateStep() {
    const routeIndex = this.getActiveRoute();
    this.steps = this.steps.map((el, index) => {
      el.active = index === routeIndex;
      el.state = index <= routeIndex ? StateType.submitted : StateType.initial;
      return el;
    });
  }

  confirm() {
    // this.datetime.confirm();
  }

  reset() {
    // this.datetime.nativeEl.reset();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

}

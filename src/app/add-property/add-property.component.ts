import {Component, EventEmitter, Output} from '@angular/core';
import {IProgressBarStep} from '../shared/components/progress-bar/progress-bar.component';
import {StateService, StateType} from '../shared/services/state.service';
import {Router} from '@angular/router';
import {TextType} from '../shared/components/text/text.component';
import {IPropertyDetails} from '../shared/interfaces/property.interface';

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
      id: '1',
      name: 'radio_list',
      value: 'radio_1',
      text: 'One',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '2',
      name: 'radio_list',
      value: 'radio_2',
      text: 'Two',
      disabled: false,
      checked: true,
      color: 'secondary'
    }, {
      id: '3',
      name: 'radio_list',
      value: 'radio_3',
      text: 'Three',
      disabled: false,
      checked: false,
      color: 'danger'
    },
  ];


  constructor(private router: Router,
              private stateService: StateService) {
    this.steps = this.routeLinks.map(obj => ({
      title: obj.title,
      active: obj.active,
      state: obj.active ? StateType.submitted : StateType.initial
    }));
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

}

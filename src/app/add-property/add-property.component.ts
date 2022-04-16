import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {StateService, StateType} from '../shared/services/state.service';
import {Router} from '@angular/router';
import {IProperty} from '../shared/interfaces/property.interface';
import {IonDatetime} from '@ionic/angular';
import {IProgressBarStep} from '../shared/ui-elements/progress-bar/progress-bar.component';
import {TextType} from '../shared/ui-elements/text/text.component';
import {NavigationService} from '../shared/services/navigation.service';

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


  public property: IProperty = {
    state: [],
    title: '',
    bedroom: 0,
    bathroom: 0,
    square: 0,
    lastFloor: false,
    floor: 0,
    price: 0,
    place: null,
    latitude: '',
    type: null,
    address: '',
    longitude: '',
    description: '',
    isApproved: false,
    authorID: -1,
    category: null,
    geoHash: '',
    priceUp: true,
    priceDown: false,
    newConstruction: false,
    built: 2021,
    phone: '',
    agentID: -1,
    photo: '',
    photoURLs: '',
    kitchen: [],
    facilities: [],
    safetyAmenities: [],
    amenities: [],
    nextTo: [],
    videoURLs: '',
    open_doors: null,
    delete: false
  };
  private rootRoute = '/new';
  public steps: IProgressBarStep[] = [];
  public textType = TextType;
  public routeLinks = [
    {
      path: AddPropertyScreen.location,
      active: true,
      title: 'TITLES.LOCATION',
      data: this.property
    },
    {path: AddPropertyScreen.propertyDetails, active: false, title: 'TITLES.PROPERTY_DETAILS'},
    // {path: AddPropertyScreen.roomDetails, active: false, title: 'TITLES.ROOM_DETAILS'},
    {path: AddPropertyScreen.media, active: false, title: 'TITLES.MEDIA'},
    {path: AddPropertyScreen.priceAndAgreement, active: false, title: 'TITLES.PRICE_AND_AGREEMENT'},
    {path: AddPropertyScreen.openDoorEvent, active: false, title: 'TITLES.OPEN_DOOR_EVENTS'}
  ];
  activeStep: {
    path: AddPropertyScreen;
    active: boolean;
    title: string;
    data: IProperty;
  } | {
    path: AddPropertyScreen;
    active: boolean;
    title: string;
    data?: undefined;
  };


  constructor(private navigationService: NavigationService) {
    this.navigationService.setRouteLinks(this.routeLinks);
    this.steps = this.routeLinks.map(obj => ({
      title: obj?.title,
      active: obj?.active,
      state: obj?.active ? StateType.submitted : StateType.initial
    }));
  }

  public previousPage() {
    this.navigationService.back(this.rootRoute);
    this.updateStep();
  }

  public nextPage($event) {
    this.activeStep = this.navigationService.activateRoute($event);
    this.navigationService.navigate(`${this.rootRoute}/${this.activeStep?.path}`);
    this.updateStep();
  }

  public onOutletLoaded(component) {
    component.property = this.property;
  }


  private updateStep() {
    const routeIndex = this.navigationService.getActiveRoute();
    this.steps = this.steps.map((el, index) => {
      el.active = index === routeIndex;
      el.state = index <= routeIndex ? StateType.submitted : StateType.initial;
      return el;
    });
  }

}

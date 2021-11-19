import {Component} from '@angular/core';
import {IProgressBarStep} from '../shared/components/progress-bar/progress-bar.component';
import {StateService, StateType} from '../shared/services/state.service';
import {Router} from '@angular/router';

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

  private rootRoute = '/addProperty';
  public steps: IProgressBarStep[] = [];
  public routeLinks = [
    {path: '', title: 'TITLES.ADD_NEW_PROPERTY'},
    {path: AddPropertyScreen.location, active: false, title: 'TITLES.LOCATION'},
    {path: AddPropertyScreen.propertyDetails, active: false, title: 'TITLES.PROPERTY_DETAILS'},
    {path: AddPropertyScreen.roomDetails, active: false, title: 'TITLES.ROOM_DETAILS'},
    {path: AddPropertyScreen.media, active: false, title: 'TITLES.MEDIA'},
    {path: AddPropertyScreen.priceAndAgreement, active: false, title: 'TITLES.PRICE_AND_AGREEMENT'},
    {path: AddPropertyScreen.openDoorEvent, active: false, title: 'TITLES.OPEN_DOOR_EVENTS'}];

  constructor(private router: Router,
              private stateService: StateService) {
    this.steps = this.routeLinks.map(obj => ({
      title: obj.title,
      active: obj.active,
      state: obj.active ? StateType.submitted : StateType.initial
    }));
  }


  private getActiveRoute(): number {
    return this.routeLinks.findIndex((el) => el.active) || 0;
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

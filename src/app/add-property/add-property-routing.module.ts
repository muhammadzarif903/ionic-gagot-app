import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPropertyComponent, AddPropertyScreen} from './add-property.component';
import {AddLocationComponent} from './add-location/add-location.component';
import {AddPropertyDetailsComponent} from './add-property-details/add-property-details.component';
import {AddRoomDetailsComponent} from './add-room-details/add-room-details.component';
import {AddMediaComponent} from './add-media/add-media.component';
import {AddPriceAndAgreementComponent} from './add-price-and-agreement/add-price-and-agreement.component';
import {AddOpenDoorEventComponent} from './add-open-door-event/add-open-door-event.component';

const addPropertyChildren = [{
  path: AddPropertyScreen.location,
  component: AddLocationComponent
}, {
  path: AddPropertyScreen.propertyDetails,
  component: AddPropertyDetailsComponent
}, {
  path: AddPropertyScreen.roomDetails,
  component: AddRoomDetailsComponent
}, {
  path: AddPropertyScreen.media,
  component: AddMediaComponent
}, {
  path: AddPropertyScreen.priceAndAgreement,
  component: AddPriceAndAgreementComponent
}, {
  path: AddPropertyScreen.openDoorEvent,
  component: AddOpenDoorEventComponent
}, {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

const routes: Routes = [
  {
    path: '', component: AddPropertyComponent,
    children: addPropertyChildren
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPropertyRoutingModule {
}

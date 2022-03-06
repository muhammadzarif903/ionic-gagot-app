import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddPropertyComponent} from './add-property.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {AddPropertyRoutingModule} from './add-property-routing.module';
import {AddLocationComponent} from './add-location/add-location.component';
import {AddPropertyDetailsComponent} from './add-property-details/add-property-details.component';
import {AddRoomDetailsComponent} from './add-room-details/add-room-details.component';
import {AddMediaComponent} from './add-media/add-media.component';
import {AddPriceAndAgreementComponent} from './add-price-and-agreement/add-price-and-agreement.component';
import {AddOpenDoorEventComponent} from './add-open-door-event/add-open-door-event.component';
import {SharedModule} from '../shared/shared.module';
import {MapModule} from '../map/map.module';


@NgModule({
  declarations: [
    AddPropertyComponent,
    AddLocationComponent,
    AddPropertyDetailsComponent,
    AddRoomDetailsComponent,
    AddMediaComponent,
    AddPriceAndAgreementComponent,
    AddOpenDoorEventComponent],
  imports: [
    AddPropertyRoutingModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    CommonModule,
    SharedModule,
    MapModule,
  ]
})
export class AddPropertyModule {
}

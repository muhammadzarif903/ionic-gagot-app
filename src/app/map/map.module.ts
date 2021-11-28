import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {MapRoutingModule} from './map-routing.module';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    LeafletModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    CommonModule,
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule {
}

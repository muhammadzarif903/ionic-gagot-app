import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './filters.component';
import {FiltersRoutingModule} from './filters-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [FiltersComponent],
  imports: [
    CommonModule,
    FiltersRoutingModule,
    TranslateModule,
    IonicModule,
    SharedModule
  ]
})
export class FiltersModule {
}

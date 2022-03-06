import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './filters.component';
import {FiltersRoutingModule} from './filters-routing.module';


@NgModule({
  declarations: [FiltersComponent],
  imports: [
    CommonModule,
    FiltersRoutingModule
  ]
})
export class FiltersModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchFiltersComponent} from './search-filters.component';
import {SearchFiltersRoutingModule} from './search-filters-routing.module';


@NgModule({
  declarations: [SearchFiltersComponent],
  imports: [
    CommonModule,
    SearchFiltersRoutingModule
  ]
})
export class SearchFiltersModule {
}

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SearchFiltersComponent} from './search-filters.component';

const routes: Routes = [
  {
    path: '', component: SearchFiltersComponent,
    children: []
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchFiltersRoutingModule {
}

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {AddPropertyComponent} from '../add-property/add-property.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {
}



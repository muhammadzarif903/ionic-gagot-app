import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';

const routes: Routes = [
  {
    path: 'maps',
    component: MapComponent,
    children: []
  },
  {
    path: 'maps',
    redirectTo: 'maps',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {
}

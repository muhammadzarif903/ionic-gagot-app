import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Tab1Page} from './tab1.page';
import {PropertiesComponent} from '../../shared/components/properties/properties.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: '',
        redirectTo: 'list',
        component: PropertiesComponent,
        pathMatch: 'full'
      },
      {
        path: 'addProperty',
        loadChildren: () => import('../../add-property/add-property.module').then(m => m.AddPropertyModule)
      }, {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }]
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
export class Tab1PageRoutingModule {
}

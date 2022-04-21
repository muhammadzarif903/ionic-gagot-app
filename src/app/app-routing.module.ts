import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PropertyDetailsComponent} from './shared/components/properties/property-details/property-details.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./add-property/add-property.module').then(m => m.AddPropertyModule)
  },
  {
    path: 'details',
    component: PropertyDetailsComponent
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

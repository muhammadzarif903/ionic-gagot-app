import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'addProperty',
    loadChildren: () => import('./add-property/add-property.module').then(m => m.AddPropertyModule)
  },
  {
    path: 'propertyDetails',
    loadChildren: () => import('./property-details/property-details.module').then(m => m.PropertyDetailsModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  },
  {
    path: 'search-filters',
    loadChildren: () => import('./search-filters/search-filters.module').then(m => m.SearchFiltersModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false  // !environment.production
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

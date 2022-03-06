import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [{
      path: 'home',
      loadChildren: () => import('./tab1-home/tab1.module').then(m => m.Tab1PageModule)
    },
      {
        path: 'search',
        loadChildren: () => import('./tab1-home/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./tab1-home/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./tab1-home/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}

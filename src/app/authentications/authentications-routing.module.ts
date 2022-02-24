import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationsPage } from './authentications.page';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationsPageRoutingModule {}

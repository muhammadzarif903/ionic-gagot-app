import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { LoginComponent } from './components/login/login.component';
import { OtpComponent } from './components/otp/otp.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignupComponent,
      },
      {
        path: 'otp',
        component: OtpComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}

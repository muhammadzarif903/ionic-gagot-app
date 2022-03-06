import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AuthenticationsPageRoutingModule} from './authorization-routing.module';

import {AuthorizationComponent} from './authorization.component';
import {SharedModule} from '../shared/shared.module';

import {TranslateModule} from '@ngx-translate/core';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticationsPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [AuthorizationComponent, RegisterComponent, LoginComponent],
  entryComponents: []
})
export class AuthorizationModule {
}

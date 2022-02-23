import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationsPageRoutingModule } from './authentications-routing.module';

import { AuthenticationsPage } from './authentications.page';
import { SignupDetailsComponent } from './signup-details/signup-details.component';
import { SharedModule } from '../shared/shared.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticationsPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [AuthenticationsPage,SignupDetailsComponent],
  entryComponents: [SignupDetailsComponent]
})
export class AuthenticationsPageModule {}

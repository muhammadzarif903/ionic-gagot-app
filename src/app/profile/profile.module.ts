import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {ProfileSettingsPageRoutingModule} from './profile-routing.module';
import {ProfilePage} from './profile.page';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {SettingsComponent} from './account-settings/settings.component';
import {ResetPassComponent} from './reset-password/reset-pass.component';
import {ChangePassComponent} from './change-password/change-pass.component';
import {PaymentOptionsComponent} from './payment-options/payment-options.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSettingsPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  exports: [
    ProfilePage,
    ResetPassComponent,
    ChangePassComponent,
  ],
  declarations: [
    ProfilePage,
    AccountDetailsComponent,
    ResetPassComponent,
    ChangePassComponent,
    PaymentOptionsComponent,
    ContactUsComponent,
    SettingsComponent]
})
export class ProfileSettingsPageModule {
}

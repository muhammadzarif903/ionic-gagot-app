import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {ProfileSettingsPageRoutingModule} from './profile-settings-routing.module';
import {ProfileSettingsPage} from './profile-settings.page';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import {UpdatePersonalProfileComponent} from './update-personal-profile/update-personal-profile.component';
import {SettingsComponent} from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSettingsPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [ProfileSettingsPage, UpdatePersonalProfileComponent, SettingsComponent]
})
export class ProfileSettingsPageModule {
}

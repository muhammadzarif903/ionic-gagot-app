import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProfileSettingsPageRoutingModule } from './profile-settings-routing.module';
import { ProfileSettingsPage } from './profile-settings.page';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSettingsPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [ProfileSettingsPage]
})
export class ProfileSettingsPageModule {}

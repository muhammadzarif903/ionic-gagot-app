import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProfileSettingsPageRoutingModule } from './profile-settings-routing.module';
import { ProfileSettingsPage } from './profile-settings.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSettingsPageRoutingModule,
    SharedModule
  ],
  declarations: [ProfileSettingsPage]
})
export class ProfileSettingsPageModule {}

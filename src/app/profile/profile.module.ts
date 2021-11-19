import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    IonicModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    CommonModule,
  ]
})
export class ProfileModule {
}

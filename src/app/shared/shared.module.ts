import { CountryCodesComponent } from './components/country-codes/country-codes.component';
import { FormsModule } from '@angular/forms';
import { UpdatePersonalProfileComponent } from './../profile-settings/update-personal-profile/update-personal-profile.component';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';
import {NgModule} from '@angular/core';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {TextComponent} from './components/text/text.component';
import {IonicModule} from '@ionic/angular';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {InputTextAreaComponent} from './components/input-textarea/input-textarea.component';
import {InputComponent} from './components/input/input.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {PlusMinusToggleComponent} from './components/plus-minus-toggle/plus-minus-toggle.component';
import {ButtonListComponent} from './components/button-list/button-list.component';
import { ResetPassowrdComponent } from './components/reset-passowrd/reset-passowrd.component';
import { SettingsComponent } from '../profile-settings/settings/settings.component';

@NgModule({
  declarations: [
    ProgressBarComponent,
    TextComponent,
    InputComponent,
    PlusMinusToggleComponent,
    InputTextAreaComponent,
    ButtonListComponent,
    CategoriesComponent, CheckboxComponent,CustomLoaderComponent,ResetPassowrdComponent,
    UpdatePersonalProfileComponent,
    CountryCodesComponent,
  SettingsComponent],
  entryComponents: [ProgressBarComponent,
    TextComponent,
    CategoriesComponent,
    InputTextAreaComponent,
    PlusMinusToggleComponent,
    ButtonListComponent,
    InputComponent,
    CustomLoaderComponent,
    ResetPassowrdComponent,UpdatePersonalProfileComponent,
    SettingsComponent,
    CountryCodesComponent],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ProgressBarComponent,
    CategoriesComponent,
    TextComponent,
    PlusMinusToggleComponent,
    InputComponent,
    InputTextAreaComponent,
    ButtonListComponent,
    CustomLoaderComponent,
    ResetPassowrdComponent
  ]
})
export class SharedModule {
}

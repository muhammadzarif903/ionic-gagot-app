import {CountryCodesComponent} from './ui-elements/country-codes/country-codes.component';
import {FormsModule} from '@angular/forms';
import {CustomLoaderComponent} from './ui-elements/custom-loader/custom-loader.component';
import {NgModule} from '@angular/core';
import {ProgressBarComponent} from './ui-elements/progress-bar/progress-bar.component';
import {TextComponent} from './ui-elements/text/text.component';
import {IonicModule} from '@ionic/angular';
import {CheckboxComponent} from './ui-elements/checkbox/checkbox.component';
import {CategoriesComponent} from './ui-elements/categories/categories.component';
import {InputTextAreaComponent} from './ui-elements/input-textarea/input-textarea.component';
import {InputComponent} from './ui-elements/input/input.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {PlusMinusToggleComponent} from './ui-elements/plus-minus-toggle/plus-minus-toggle.component';
import {ButtonListComponent} from './ui-elements/button-list/button-list.component';
import {ResetPassowrdComponent} from './ui-elements/reset-passowrd/reset-passowrd.component';
import {ProfileIconComponent} from './ui-elements/profile-icon/profile-icon.component';
import {PropertiesComponent} from './components/properties/properties.component';
import {AudioTrackComponent} from './ui-elements/audio-track/audio-track.component';
import {SetTimeComponent} from './ui-elements/set-time/set-time.component';
import {CalendarComponent} from './ui-elements/calendar/calendar.component';
import {DropdownComponent} from './ui-elements/dropdown/dropdown.component';
import {ProgressComponent} from './ui-elements/progress/progress.component';
import {ImageComponent} from './ui-elements/image/image.component';
import {SelectInputComponent} from './ui-elements/select-input/select-input.component';
import {ItemSelectionComponent} from './ui-elements/item-selection/item-selection.component';
import {UploadMediaButtonComponent} from './ui-elements/upload-media-button/upload-media-button.component';

@NgModule({
  declarations: [
    PropertiesComponent,
    ProgressBarComponent,
    TextComponent,
    InputComponent,
    PlusMinusToggleComponent,
    InputTextAreaComponent,
    ButtonListComponent,
    CategoriesComponent,
    CheckboxComponent,
    CustomLoaderComponent,
    ResetPassowrdComponent,
    CountryCodesComponent,
    ProfileIconComponent,
    AudioTrackComponent,
    SetTimeComponent,
    CalendarComponent,
    DropdownComponent,
    ProgressComponent,
    ImageComponent,
    SelectInputComponent,
    ItemSelectionComponent,
    UploadMediaButtonComponent],
  entryComponents: [
    PropertiesComponent,
    ProgressBarComponent,
    TextComponent,
    InputComponent,
    PlusMinusToggleComponent,
    InputTextAreaComponent,
    ButtonListComponent,
    CategoriesComponent,
    CheckboxComponent,
    CustomLoaderComponent,
    ResetPassowrdComponent,
    CountryCodesComponent,
    ProfileIconComponent,
    AudioTrackComponent,
    SetTimeComponent,
    CalendarComponent,
    DropdownComponent,
    ProgressComponent,
    ImageComponent,
    SelectInputComponent,
    ItemSelectionComponent,
    UploadMediaButtonComponent],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    PropertiesComponent,
    ProgressBarComponent,
    TextComponent,
    InputComponent,
    PlusMinusToggleComponent,
    InputTextAreaComponent,
    ButtonListComponent,
    CategoriesComponent,
    CheckboxComponent,
    CustomLoaderComponent,
    ResetPassowrdComponent,
    CountryCodesComponent,
    ProfileIconComponent,
    AudioTrackComponent,
    SetTimeComponent,
    CalendarComponent,
    DropdownComponent,
    ProgressComponent,
    ImageComponent,
    SelectInputComponent,
    ItemSelectionComponent,
    UploadMediaButtonComponent
  ]
})
export class SharedModule {
}

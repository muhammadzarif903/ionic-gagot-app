import { CountryCodesComponent } from './ui-elements/country-codes/country-codes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomLoaderComponent } from './ui-elements/custom-loader/custom-loader.component';
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './ui-elements/progress-bar/progress-bar.component';
import { TextComponent } from './ui-elements/text/text.component';
import { IonicModule } from '@ionic/angular';
import { CheckboxComponent } from './ui-elements/checkbox/checkbox.component';
import { CategoriesComponent } from './ui-elements/categories/categories.component';
import { InputTextAreaComponent } from './ui-elements/input-textarea/input-textarea.component';
import { InputComponent } from './ui-elements/input/input.component';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PlusMinusToggleComponent } from './ui-elements/plus-minus-toggle/plus-minus-toggle.component';
import { ButtonListComponent } from './ui-elements/button-list/button-list.component';
import { ProfileIconComponent } from './ui-elements/profile-icon/profile-icon.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { AudioTrackComponent } from './ui-elements/audio-track/audio-track.component';
import { SetTimeComponent } from './ui-elements/set-time/set-time.component';
import { CalendarComponent } from './ui-elements/calendar/calendar.component';
import { DropdownComponent } from './ui-elements/dropdown/dropdown.component';
import { ProgressComponent } from './ui-elements/progress/progress.component';
import { ImageComponent } from './ui-elements/image/image.component';
import { SelectInputComponent } from './ui-elements/select-input/select-input.component';
import { ItemSelectionComponent } from './ui-elements/item-selection/item-selection.component';
import { UploadMediaButtonComponent } from './ui-elements/upload-media-button/upload-media-button.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';
import { RadioButtonComponent } from './ui-elements/radio-button/radio-button.component';
import { IdentityRevealedValidatorDirective } from './pipes/identify-revealed.directive';
import { UserAgreementComponent } from './components/user-agreement/user-agreement.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PropertyDetailsComponent } from './components/properties/property-details/property-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

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
    UploadMediaButtonComponent,
    LocalizedDatePipe,
    RadioButtonComponent,
    IdentityRevealedValidatorDirective,
    UserAgreementComponent,
    MessagesComponent,
    PropertyDetailsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    ScrollingModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
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
    UploadMediaButtonComponent,
    RadioButtonComponent,
    UserAgreementComponent,
    MessagesComponent,
    PropertyDetailsComponent,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {}

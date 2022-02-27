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
import {UploadMediaButtonComponent} from './components/upload-media-button/upload-media-button.component';
import {SelectInputComponent} from './components/select-input/select-input.component';
import {ItemSelectionComponent} from './components/item-selection/item-selection.component';
import {ImageComponent} from './components/image/image.component';
import {ProgressComponent} from './components/progress/progress.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {SetTimeComponent} from './components/set-time/set-time.component';
import {AudioTrackComponent} from './components/audio-track/audio-track.component';
@NgModule({
  declarations: [
    ProgressBarComponent,
    AudioTrackComponent,
    SetTimeComponent,
    CalendarComponent,
    DropdownComponent,
    ProgressComponent,
    ImageComponent,
    TextComponent,
    SelectInputComponent,
    ItemSelectionComponent,
    InputComponent,
    UploadMediaButtonComponent,
    PlusMinusToggleComponent,
    InputTextAreaComponent,
    ButtonListComponent,
    CategoriesComponent, 
    CheckboxComponent],
  entryComponents: [
    ProgressBarComponent,
    AudioTrackComponent,
    SetTimeComponent,
    CalendarComponent,
    TextComponent,
    ProgressComponent,
    UploadMediaButtonComponent,
    SelectInputComponent,
    DropdownComponent,
    ImageComponent,
    CategoriesComponent,
    ItemSelectionComponent,
    InputTextAreaComponent,
    PlusMinusToggleComponent,
    ButtonListComponent,
    InputComponent],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ProgressBarComponent,
    AudioTrackComponent,
    SetTimeComponent,
    CalendarComponent,
    ProgressComponent,
    UploadMediaButtonComponent,
    ItemSelectionComponent,
    SelectInputComponent,
    DropdownComponent,
    ImageComponent,
    CategoriesComponent,
    TextComponent,
    PlusMinusToggleComponent,
    InputComponent,
    InputTextAreaComponent,
    ButtonListComponent
  ]
})
export class SharedModule {
}

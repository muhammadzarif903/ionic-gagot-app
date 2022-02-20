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

@NgModule({
  declarations: [
    ProgressBarComponent,
    TextComponent,
    InputComponent,
    PlusMinusToggleComponent,
    InputTextAreaComponent,
    ButtonListComponent,
    CategoriesComponent, CheckboxComponent],
  entryComponents: [ProgressBarComponent,
    TextComponent,
    CategoriesComponent,
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

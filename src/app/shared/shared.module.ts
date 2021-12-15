import {NgModule} from '@angular/core';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {TextComponent} from './components/text/text.component';
import {CategoryButtonComponent} from './components/category-button/category-button.component';
import {IonicModule} from '@ionic/angular';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {InputTextAreaComponent} from './components/input-textarea/input-textarea.component';
import {InputComponent} from './components/input/input.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProgressBarComponent,
    TextComponent,
    InputComponent,
    CategoryButtonComponent,
    InputTextAreaComponent,
    CategoriesComponent, CheckboxComponent],
  entryComponents: [ProgressBarComponent,
    TextComponent,
    CategoriesComponent,
    InputTextAreaComponent,
    InputComponent,
    CategoryButtonComponent],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [],
    exports: [
        ProgressBarComponent,
        CategoryButtonComponent,
        CategoriesComponent,
        TextComponent,
        InputComponent,
        InputTextAreaComponent
    ]
})
export class SharedModule {
}

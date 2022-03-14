import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './filters.component';
import {FiltersRoutingModule} from './filters-routing.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [FiltersComponent],
    imports: [
        CommonModule,
        FiltersRoutingModule,
        TranslateModule
    ]
})
export class FiltersModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SharedModule} from './shared/shared.module';
import {DatePipe, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeHe from '@angular/common/locales/he';
import localeRu from '@angular/common/locales/ru';
import localeHeExtra from '@angular/common/locales/extra/he';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    SharedModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() {
    registerLocaleData(localeEn, 'en');
    registerLocaleData(localeFr, 'fr');
    registerLocaleData(localeRu, 'ru');
    registerLocaleData(localeHe, 'he', localeHeExtra);
  }
}

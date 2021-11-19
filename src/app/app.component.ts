import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'mx-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'he']);
    translate.use('en');
  }

  public switchLang(lang: string) {
    this.translate.use(lang);
  }
}

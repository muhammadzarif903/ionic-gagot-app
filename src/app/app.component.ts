import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Platform} from '@ionic/angular';


@Component({
  selector: 'mx-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private translate: TranslateService,
              private platform: Platform) {
    this.initializeApp();
  }

  public switchLang(lang: string) {
    this.translate.use(lang);
  }

  async initializeApp() {
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['en', 'he']);
    this.translate.use('en');
    this.platform.ready().then(async () => {
    });
  }
}

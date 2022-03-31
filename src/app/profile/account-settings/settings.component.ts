import {ModalController} from '@ionic/angular';
import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../shared/interfaces/user.interface';
import {MeasurementEnum} from '../../shared/enums/measurement.enum';
import {CurrencyEnum} from '../../shared/enums/currency.enum';

@Component({
  selector: 'mx-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  @Input() userData: IUser;

  isAllowNotification = true;
  isDelete = false;
  isPause = false;
  pageDetails = {
    pageName: "Settings",
    loading: false
  }
  public measurementEnum = MeasurementEnum;
  public currencyEnum = CurrencyEnum;

  public countryAndRegionOptions: any = {
    header: 'Country and Region',
    subHeader: 'Select Country or Region',
    message: '$1.00 per country',
    translucent: true
  };

  public customNotificationsOptions: any = {
    header: 'Hair Color',
    subHeader: 'Turn on/off advanced',
    message: 'Only select your dominant hair color'
  };

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}

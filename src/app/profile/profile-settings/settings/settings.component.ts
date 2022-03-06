import {ModalController} from '@ionic/angular';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mx-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  isAllowNotification = true;
  isDelete = false;
  isPause = false;
  pageDetails = {
    pageName: "Settings",
    loading: false
  }

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}

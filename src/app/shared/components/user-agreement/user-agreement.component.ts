import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'mx-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.scss'],
})
export class UserAgreementComponent implements OnInit {

  constructor(private modalCtrl: ModalController) {
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}

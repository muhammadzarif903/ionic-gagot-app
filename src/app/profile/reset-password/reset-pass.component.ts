import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../shared/interfaces/user.interface';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'mx-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
})
export class ResetPassComponent implements OnInit {

  @Input() userData: IUser;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}

import {ModalController} from '@ionic/angular';
import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../shared/interfaces/user.interface';

@Component({
  selector: 'mx-change-password',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss'],
})
export class ChangePassComponent implements OnInit {

  @Input() userData: IUser;
  loading = {
    status: false,
    msg: ''
  }

  logedInUserId: any;
  message = false;
  formDetails = {
    email: '',
    old_password: '',
    new_password: ''
  };

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  sendEmail(f) {
    this.loading.status = true;
    if (this.formDetails.email) {
      let formData = {
        'task': 'forget',
        'email': this.formDetails.email
      }

    } else {
      this.loading.status = true;
    }
  }

  async changePassword() {
    if (this.formDetails.old_password !== this.formDetails.new_password) {
      this.message = true;
      return;
    }

    if (this.formDetails.new_password.length >= 6) {
      let fomData = {
        task: 'updatePassword',
        cpassword: this.formDetails.new_password,
        password: this.formDetails.new_password
      }

    } else {
    }


  }

}

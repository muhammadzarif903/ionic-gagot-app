import {ModalController} from '@ionic/angular';
import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../shared/interfaces/user.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {identityRevealedValidator} from '../../shared/pipes/identify-revealed.directive';
import {ChangePassComponent} from '../change-password/change-pass.component';

@Component({
  selector: 'mx-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {

  @Input() userData: IUser;

  loading = false;

  userForm = new FormGroup({
    'email': new FormControl(null, [Validators.required]),
    'mobile': new FormControl(null, [Validators.required]),
    'firstName': new FormControl(),
    'lastName': new FormControl()
  }, {validators: identityRevealedValidator});


  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  public changePassword() {
    this.modalCtrl.create({
      component: ChangePassComponent,
      componentProps: {
        userData: this.userData
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  public update(form) {

  }


}

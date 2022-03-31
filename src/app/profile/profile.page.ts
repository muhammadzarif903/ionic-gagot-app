import {SettingsComponent} from './account-settings/settings.component';
import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {IUser} from '../shared/interfaces/user.interface';
import {MeasurementEnum} from '../shared/enums/measurement.enum';
import {CurrencyEnum} from '../shared/enums/currency.enum';
import {RoleEnum} from '../shared/enums';
import {FormControl, FormGroup} from '@angular/forms';
import {UserAgreementComponent} from '../shared/components/user-agreement/user-agreement.component';
import {PropertiesComponent, PropertiesModalType} from '../shared/components/properties/properties.component';
import {MessagesComponent} from '../shared/components/messages/messages.component';
import {PaymentOptionsComponent} from './payment-options/payment-options.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

@Component({
  selector: 'mx-profile-settings',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loading = {
    status: false,
    msg: ''
  };
  loginUserData: any = [];
  isAllowNotification = true;
  isDeleted = false;
  isPause = false;

  public customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };

  public userData: IUser = {
    createdAt: new Date('2021'),
    updatedAt: new Date('2021'),
    currency: CurrencyEnum.ILS,
    email: 'maximcoding@gmail.com',
    id: 1,
    isOnline: false,
    lastOnlineTimestamp: '',
    location: 'Israel',
    measurement: MeasurementEnum.meter,
    mobile: '0540110101',
    detectLanguage: true,
    notifications: true,
    role: RoleEnum.USER,
    firstName: 'John',
    lastName: ' Johnson',
    signUpLocation: {latitude: '', longitude: ''},
    phone: '',
    profilePictureURL: '',
    pushToken: '',
    appIdentifier: '',
  }

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private navCtrl: NavController) {
  }

  ngOnInit() {
  }


  private ionViewWillEnter() {
  }

  refresh() {
    this.ionViewWillEnter();
  }

  // Pause Profile
  async changePause(evnt) {
    console.log('evnet', evnt.detail.checked);
    if (evnt.detail.checked) {
      const alert = await this.alertController.create({
        header: "PAUSE PROFILE",
        subHeader: "Please Verify your action!",
        message: "By Pausing profile, your profile will be invisible! are you sure you want to pause profile ",
        buttons: [
          {
            text: "Cancel",
            role: 'cancel',
            handler: () => {
              this.isPause = false;
            }
          },
          {
            text: 'Confirm',
            id: 'confirm-button',
            handler: () => {
              this.isPause = true;
              this.changeProfileStatus("Hide");
              console.log('Confirm Okay');
            }
          }
        ]
      }).then(aa => {
        aa.present();
      });

    }
    if (!evnt.detail.checked) {
      this.changeProfileStatus("Unhide");
      this.isPause = false;
    }
  }

  async changeProfileStatus(pstatus) {
    this.loading.status = true;
    this.loading.msg = 'loading ...';
    let fromData = {
      'task': 'updateStatus',
      'pstatus': pstatus
    }
  }

  openCamera() {
  }

  public onAccountDetails() {
    this.modalController.create({
      component: AccountDetailsComponent,
      componentProps: {
        userData: this.userData
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  public onSettings() {
    this.modalController.create({
      component: SettingsComponent,
      componentProps: {
        userData: this.userData
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  public onUserAgreement() {
    this.modalController.create({
      component: UserAgreementComponent,
      componentProps: {}
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  public onSelling() {
    this.modalController.create({
      component: PropertiesComponent,
      componentProps: {
        viewType: PropertiesModalType.selling
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  public onRenting() {
    this.modalController.create({
      component: PropertiesComponent,
      componentProps: {
        viewType: PropertiesModalType.renting
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  public onRecentViewed() {
    this.modalController.create({
      component: PropertiesComponent,
      componentProps: {
        viewType: PropertiesModalType.recentViewed
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  public onFavorites() {
    this.modalController.create({
      component: PropertiesComponent,
      componentProps: {
        viewType: PropertiesModalType.favorites
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  public onPaymentOptions() {
    this.modalController.create({
      component: PaymentOptionsComponent,
      componentProps: {}
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  public onMessages() {
    this.modalController.create({
      component: MessagesComponent,
      componentProps: {}
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  public onContactUs() {
    this.modalController.create({
      component: ContactUsComponent,
      componentProps: {}
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  // Deleted profile
  private async alertDeleteProfile(evnt) {
    if (evnt.detail.checked) {
      const alert = await this.alertController.create({
        header: "Delete PROFILE",
        subHeader: "Please Verify your action!",
        message: "After clicking on Delete Profile, your profile will be deleted and your profile will be unseen by the public.",
        buttons: [
          {
            text: "Cancel",
            role: 'cancel',
            handler: () => {
              this.isDeleted = false;
            }
          },
          {
            text: 'Confirm',
            id: 'confirm-button',
            handler: () => {
              this.deletedProfileStatus("Delete");
              console.log('Confirm Okay');
            }
          }
        ]
      }).then(aa => {
        aa.present();
      });

    }

  }

  private async deletedProfileStatus(pstatus) {
    this.loading.status = true;
    this.loading.msg = 'loading ...';
    let fromData = {
      'task': 'updateStatus',
      'pstatus': pstatus
    }
  }

}

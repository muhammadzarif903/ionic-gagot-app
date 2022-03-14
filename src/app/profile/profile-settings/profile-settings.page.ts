import { SettingsComponent } from './settings/settings.component';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';

import { UpdatePersonalProfileComponent } from './update-personal-profile/update-personal-profile.component';
import {ResetPassComponent} from '../../shared/ui-elements/reset-password/reset-pass.component';

@Component({
  selector: 'mx-profile-settings',
  templateUrl: './profile-settings.page.html',
  styleUrls: ['./profile-settings.page.scss'],
})
export class ProfileSettingsPage implements OnInit {
  loading = {
    status:false,
    msg:''
  };
  loginUserData:any=[];
  isAllowNotification = true;
  isDeleted = false;
  isPause = false;
  constructor(
    private alertController:AlertController,
    private modalController:ModalController,
    private navCtrl:NavController ) {
    }

  ngOnInit() {
  }
  ionViewWillEnter(){
  }

  refresh(){
    this.ionViewWillEnter();
  }

  // Pause Profile
  async changePause(evnt){
    console.log('evnet',evnt.detail.checked);

    if(evnt.detail.checked) {
      const alert = await this.alertController.create({
        header: "PAUSE PROFILE",
        subHeader: "Please Verify your action!",
        message: "By Pausing profile, your profile will be invisible! are you sure you want to pause profile ",
        buttons: [
          {
            text: "Cancel",
            role:'cancel',
            handler:()=>{
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
      }).then(aa=>{
        aa.present();
      });

    }

    if(!evnt.detail.checked) {
      this.changeProfileStatus("Unhide");
      this.isPause= false;
    }

  }

  async changeProfileStatus(pstatus){
    this.loading.status = true;
    this.loading.msg= 'loading ...';
    let fromData = {
      'task': 'updateStatus',
      'pstatus': pstatus
    }
  }

  openCamera(){

  }

  // Deleted profile
  async deleteProfile(evnt){
    if(evnt.detail.checked) {
      const alert = await this.alertController.create({
        header: "Delete PROFILE",
        subHeader: "Please Verify your action!",
        message: "After clicking on Delete Profile, your profile will be deleted and your profile will be unseen by the public.",
        buttons: [
          {
            text: "Cancel",
            role:'cancel',
            handler:()=>{
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
      }).then(aa=>{
        aa.present();
      });

    }

  }

  async deletedProfileStatus(pstatus){
    this.loading.status = true;
    this.loading.msg= 'loading ...';
    let fromData = {
      'task': 'updateStatus',
      'pstatus': pstatus
    }
  }


  onSettings(){
    this.modalController.create({
      component: SettingsComponent,
      componentProps: {
      }
    }).then(modal=>{
      modal.present();
      return modal.onDidDismiss();
    }).then((res)=>{

    });
  }

  onChangePassword() {
    this.modalController.create({
      component: ResetPassComponent,
      componentProps: {
        type: 'change'
      }
    }).then(modal=>{
      modal.present();
      return modal.onDidDismiss();
    }).then((res)=>{

    });
  }

}

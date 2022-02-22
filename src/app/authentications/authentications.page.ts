import { Router } from '@angular/router';
import { SignupDetailsComponent } from './signup-details/signup-details.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActionSheetController, MenuController, ModalController, NavController, Platform } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-authentications',
  templateUrl: './authentications.page.html',
  styleUrls: ['./authentications.page.scss'],
})
export class AuthenticationsPage implements OnInit {
  loginType = 'mobile';

  loginUser = {
    email: '',
    password: ''
  }
  passwordType = 'password';
  passeye = 'eye';
  isLoading= false;

  formDetails = {
    phone_number: ''
  }

  selectedContry = {
    phone_code:827,
    flag:''
  }
  constructor(
    private navCtrl: NavController,
    private route: Router,
    private actionSheetController: ActionSheetController,
    private modalCtrl: ModalController) {
    }

  ngOnInit() {
  }

  ionViewWillLeave() { }
  
  ionViewDidLeave() { }

  managePassword() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passeye = 'eye-off';
    } else {
      this.passwordType = 'password';
      this.passeye = 'eye';
    }
  }


  createAccount() {
    this.modalCtrl.create({
      component: SignupDetailsComponent,
      componentProps: {
        type: 'signup'
      }
    }).then(modal=>{
      modal.present();
      return modal.onDidDismiss();
    }).then((res)=>{
      
    });
  }

  loginInAs(type){
    this.loginType = type;
  }

  async doLogin(f: NgForm) {
    this.navCtrl.navigateRoot(['home/tabs/home']);
  }


}

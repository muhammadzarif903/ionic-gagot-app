import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignupDetailsComponent } from './signup-details/signup-details.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { CountryCodesComponent } from '../shared/components/country-codes/country-codes.component';


@Component({
  selector: 'app-authentications',
  templateUrl: './authentications.page.html',
  styleUrls: ['./authentications.page.scss'],
})
export class AuthenticationsPage implements OnInit {
  loginType = 'mobile';
  countriesList: any = [];
  selectedCountry = {
    country_code: '',
    country_calling_code: '',
    country_id: '',
    country_name: '',
    country_flag: '',
    regex:''
  }
  loginUser = {
    email: '',
    password: ''
  }
  passwordType = 'password';
  passeye = 'eye';
  isLoading = false;

  formDetails = {
    phone_number: ''
  }
  constructor(
    private navCtrl: NavController,
    private route: Router,
    private actionSheetController: ActionSheetController,
    private modalCtrl: ModalController,
    private http: HttpClient) {
    this.loadCountries();
  }

  ngOnInit() {
  }

  async loadCountries() {
    this.countriesList = JSON.parse(localStorage.getItem('ALL_COUNTRIES'));
    if (this.countriesList == '' || this.countriesList == null ) {
      console.log('loading from live...');
      await this.http.get('https://restcountries.com/v3.1/all').subscribe((data: any) => {
        localStorage.setItem("ALL_COUNTRIES", JSON.stringify(data));
        this.countriesList = data;
        this.selectedCountry.country_code = this.countriesList[0].cca2;
        this.selectedCountry.country_calling_code = `${this.countriesList[0].idd.root}${this.countriesList[0].idd.suffixes}`;
        this.selectedCountry.country_name = this.countriesList[0].name.common;
        this.selectedCountry.country_flag = this.countriesList[0].flags.png;
        this.selectedCountry.regex = this.countriesList[0].postalCode.regex;
      });
    } else {
      console.log('loading from Local...');
      this.selectedCountry.country_code = this.countriesList[0].cca2;
        this.selectedCountry.country_calling_code = `${this.countriesList[0].idd.root}${this.countriesList[0].idd.suffixes}`;
        this.selectedCountry.country_name = this.countriesList[0].name.common;
        this.selectedCountry.country_flag = this.countriesList[0].flags.png;
        this.selectedCountry.regex = this.countriesList[0].postalCode.regex;
    }

  }

  getCountryCode() {
    this.modalCtrl.create({
      component: CountryCodesComponent,
      componentProps: {
        countriesList: this.countriesList
      }
    }).then(model => {
      model.present();
      return model.onDidDismiss();
    }).then(resultdata => {
      this.selectedCountry = resultdata.data;
      console.log("🚀 ~ file: authentications.page.ts ~ line 84 ~ AuthenticationsPage ~ getCountryCode ~ selectedCountry", this.selectedCountry)
      
    });
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
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then((res) => {

    });
  }

  loginInAs(type) {
    this.loginType = type;
  }

  async doLogin(f: NgForm) {
    this.navCtrl.navigateRoot(['home/tabs/home']);
  }


}

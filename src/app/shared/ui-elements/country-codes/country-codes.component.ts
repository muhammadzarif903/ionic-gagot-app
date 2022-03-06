import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-country-codes',
  templateUrl: './country-codes.component.html',
  styleUrls: ['./country-codes.component.scss'],
})
export class CountryCodesComponent implements OnInit {

  @Input() countriesList: [];

  loading = false;
  showSearch = false;
  countryCodes: any = [];
  countryCodesOrignial: any = [];

  selectedCountry = {
    country_code: '',
    country_calling_code: '',
    country_id: '',
    country_name: '',
    country_flag: '',
    regex:''
  }
  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient
  ) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.getAllCountryCode();
  }
  getAllCountryCode() {
    this.countryCodes = JSON.parse(localStorage.getItem("ALL_COUNTRIES"));
    console.log('Dataaaaaa', this.countryCodes);
    this.countryCodes = this.countriesList;
    this.countryCodesOrignial = this.countryCodes;

    // Store data in system database to avoid extra calls to third party server
    // if (this.countryCodes) {
    //   console.log('loading from live...');
    //   this.http.get('https://restcountries.com/v3.1/all').subscribe((data) => {
    //     this.countryCodes = data;
    //     this.countryCodesOrignial = this.countryCodes;
    //     localStorage.setItem("ALL_COUNTRIES", JSON.stringify(data));
    //   });
    // } else {
    //   console.log('loading from Local...');
    // }
  }
  doSearch(ev) {
    let searchTerm = ev.detail.value.toLowerCase();
    if (searchTerm === '') {
      this.countryCodes = this.countryCodesOrignial;
    } else {
      this.countryCodes = this.countryCodesOrignial.filter((item) => {
        if (item.name.common !== null && item.name.common.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
      );
    }
  }
  showSearchBar() {
    this.showSearch = true;
  }
  closeSearch() {
    this.showSearch = false;
  }
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ionViewWillEnter();
    }, 2000);
  }
  setCountryVariables(country: any) {
    this.selectedCountry.country_code = country.cca2;
    this.selectedCountry.country_calling_code = `${country.idd.root}${country.idd.suffixes}`;
    this.selectedCountry.country_name = country.name.common;
    this.selectedCountry.country_flag = country.flags.png;
    this.selectedCountry.regex = country.postalCode.regex;
    this.dismiss();
  }
  dismiss() {
    this.modalCtrl.dismiss(this.selectedCountry, 'selected');
  }
  saveCountryCode() {
    this.dismiss();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mx-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  img: any;
  selectedTab = 1;
  showPassword = false;
  signUpType = 1;
  showConfirmPassword = false;
  selectedCountryCode: any;

  contryCode = [
    { countryName: 'Israel', code: '+972', img: 'assets/flag/ISRAEL.jpeg' },
    { countryName: 'FRANCE', code: '+33', img: 'assets/flag/FRANCE.png' },

    { countryName: 'USA', code: '+1', img: 'assets/flag/USA.png' },
  ];

  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
    companyId: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.selectedTab = ev.target.value;
  }

  toggleShow(): void {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPass(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  imagepload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event1: any) => {
        this.img = event1.target.result;
      };
    }
  }

  numberOnly(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}

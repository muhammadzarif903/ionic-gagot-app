import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginType = 1;
  showPassword = false;
  selectedCountryCode = '+33';
  phoneNumber: number;

  constructor() {}

  ngOnInit() {}

  toggleShow(): void {
    this.showPassword = !this.showPassword;
  }
}

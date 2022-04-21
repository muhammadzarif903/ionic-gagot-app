import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  selectedCountryCode = 'FRANCE';
  screenType = 1;
  OTP: any;

  otpController(event: any, next: any, prev: any) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    } else if (next && event.target.value.length > 0) {
      next.setFocus();
    } else {
      return 0;
    }
  }

  constructor() {}

  ngOnInit() {}
}

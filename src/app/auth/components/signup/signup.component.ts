import { Component, OnInit } from '@angular/core';

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
}

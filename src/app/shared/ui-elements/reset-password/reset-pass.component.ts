import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mx-reset-password',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
})
export class ResetPassComponent implements OnInit {
  @Input() type = 'change';
  loading = {
    status:false,
    msg:''
  }

  logedInUserId:any;
  message = false;
  formDetails = {
    email:'',
    old_password: '',
    new_password: ''
  };
  constructor(private modalController:ModalController) {
  }

  ngOnInit() {}

  onDismiss(){
    this.modalController.dismiss();
  }

  sendEmail(f){
    this.loading.status = true;
    if(this.formDetails.email){
      let formData= {
        'task':'forget',
        'email': this.formDetails.email
      }

    } else {
      this.loading.status = true;
    }
  }

  async changePassword(){
    if(this.formDetails.old_password !== this.formDetails.new_password){
      this.message = true;
      return;
    }

    if(this.formDetails.new_password.length>=6){
      let fomData = {
        task:'updatePassword',
        cpassword: this.formDetails.new_password,
        password: this.formDetails.new_password
      }

    } else {
    }


  }

}

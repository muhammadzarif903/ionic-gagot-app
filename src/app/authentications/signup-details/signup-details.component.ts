import { AnimationController, ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CustomLoaderComponent } from 'src/app/shared/components/custom-loader/custom-loader.component';
import { setInterval } from 'timers';


@Component({
  selector: 'app-signup-details',
  templateUrl: './signup-details.component.html',
  styleUrls: ['./signup-details.component.scss'],
})
export class SignupDetailsComponent implements OnInit {

  passwordType = 'password';
  passeye = 'eye';

  activeSegment = 'basic-info';

  steps = {
    step:1,
    progressBar:0
  }

  managePassword() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passeye = 'eye-off';
    } else {
      this.passwordType = 'password';
      this.passeye = 'eye';
    }
  }

  loading = false;
  formDetails= {
    fname:'',
    lname:'',
    email:'',
    password:'',
    phone_number:''
  }


  selectedContry= {
    phone_code:388,
  }

  constructor(private modalCtrl: ModalController,
    private animatioCntrl: AnimationController,
    private navCtrl: NavController
  ) {

  }

  segmentChange(ev){
    this.activeSegment = ev.detail.value;
  }

  loginInAs(type){
    this.modalCtrl.dismiss({type:type},'move');
  }

  ngOnInit() { }

  ionViewWillEnter() {
  }

  dismiss() {
    this.modalCtrl.dismiss('', 'dismiss');
  }

  goNext() {
    this.steps.step = this.steps.step + 1;
    this.steps.progressBar = this.steps.progressBar + 30;
  }
  goBack() {
    this.steps.step = this.steps.step - 1;
    this.steps.progressBar = this.steps.progressBar - 30;
  }

  async conformReg() {
    this.steps.step = this.steps.step + 1;
    this.steps.progressBar = this.steps.progressBar + 30;
  }

  generateRandomCode() {
    let code = Math.floor(1000 + Math.random() * 9000)
    console.log('code', code);
  }

  digitCode = [];

  digChange(nextElement) {
    if (nextElement != 'no') {
      nextElement.setFocus();
      return;
    }
    console.log("code in array",this.digitCode);
    const completeCode = this.digitCode.join('');
    console.log("code after join",completeCode);
    if (this.digitCode.length == 4) {
      this.verifyEmailBtn();
    }


  }

  async verifyEmailBtn() {
    this.loading = true;

    this.navCtrl.navigateRoot(['profile']);
  }

  async reSendEmail() {
    await this.generateRandomCode();
  }

  async signup(f) {
    
    // this.steps.step = this.steps.step + 1;
    // this.steps.progressBar = this.steps.progressBar + 16;
  }

  terms(){

  }


}

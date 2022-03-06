import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-personal-profile',
  templateUrl: './update-personal-profile.component.html',
  styleUrls: ['./update-personal-profile.component.scss'],
})
export class UpdatePersonalProfileComponent implements OnInit {

  loading = false;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onDismiss(){
    this.modalCtrl.dismiss();
  }

 
}

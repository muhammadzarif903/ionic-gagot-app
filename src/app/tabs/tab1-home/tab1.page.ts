import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'mx-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showPage:boolean = true;
  segmentvalue: any = 'tab1';
  count = 0
  public isGridOpen = false;
  public isSortOpen = false;

  constructor(public modalController: ModalController) {
  }

  showNextTab(x){
    var x ;
    if(x == 1){
     this.count =  this.count+1
    }
    if(this.count == 1){
      document.getElementById("change").style.background="white"
    }
    else if(this.count == 2){
      document.getElementById("change").style.background="red"
      this.count=0;
    }
  }

  public showChangeGrid() {
    this.isGridOpen = !this.isGridOpen;
  }

  public showSortModel() {
    this.isSortOpen = !this.isSortOpen;
  }

  public closeModal() {
    this.isGridOpen = false;
    this.isSortOpen = false;
  }
}


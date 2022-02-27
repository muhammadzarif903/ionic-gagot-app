import { Component, Input, OnInit } from '@angular/core';
import { TextType } from 'src/app/shared/components/text/text.component';
import { IProperty } from 'src/app/shared/interfaces/property.interface'
@Component({
  selector: 'mx-add-price-and-agreement',
  templateUrl: './add-price-and-agreement.component.html',
  styleUrls: ['./add-price-and-agreement.component.scss'],
})
export class AddPriceAndAgreementComponent implements OnInit {
  @Input() property: IProperty;
  public textType = TextType;
  constructor() { }
  options=[{name:"Euro",value:"euro"},{name:"Dollar",value:"dollar"}]
  public items=[{img:'../../../../assets/img.png',name:"Sell"},{img:'../../../../assets/img.png',name:"Rent"}]
  ngOnInit() {}
  public onCategorySelect($event) {
    this.property.categoryID = $event;
  }
  public onVideoLinkInput($event){

  }
}

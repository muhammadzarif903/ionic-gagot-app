import { Component, Input, OnInit } from '@angular/core';
import { TextType } from 'src/app/shared/components/text/text.component';
import { IProperty } from 'src/app/shared/interfaces/property.interface'
@Component({
  selector: 'mx-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss'],
})
export class AddMediaComponent implements OnInit {
  @Input() property: IProperty;
  public textType = TextType;
  constructor() { }
  percentage:number=20;
  imageLink="../../../../assets/img.png";
  ngOnInit() {}
  public onVideoLinkInput($event) {
    this.property.videoURLs = $event;
  }

}

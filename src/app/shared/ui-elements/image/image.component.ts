import {Component, Input, OnInit} from '@angular/core';


export interface Image {
  name: string;
  isLoading: boolean;
  path: string;
}

@Component({
  selector: 'mx-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {

  @Input() data: Image = {
    name: 'name',
    isLoading: false,
    path: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

}

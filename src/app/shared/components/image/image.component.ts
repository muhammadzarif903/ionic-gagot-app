import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mx-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() imageLink: string;
  constructor() { }

  ngOnInit() {}

}

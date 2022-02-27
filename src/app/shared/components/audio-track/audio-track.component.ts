import { Component, Input, OnInit } from '@angular/core';
import { TextType } from '../text/text.component';

@Component({
  selector: 'mx-audio-track',
  templateUrl: './audio-track.component.html',
  styleUrls: ['./audio-track.component.scss'],
})
export class AudioTrackComponent implements OnInit {

  @Input() title: string;
  constructor() { }
  track:boolean=true;
  ngOnInit() {
    console.log(this.title);
  }
  toogle(){
    this.track=!this.track;
  }

}

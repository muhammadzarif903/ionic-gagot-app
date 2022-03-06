import {Component, Input, OnInit} from '@angular/core';
import {PAUSE_PIC, STATIC_PIC} from '../../../../global';

@Component({
  selector: 'mx-audio-track',
  templateUrl: './audio-track.component.html',
  styleUrls: ['./audio-track.component.scss'],
})
export class AudioTrackComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  public PAUSE_PIC = PAUSE_PIC;
  public STATIC_PIC = STATIC_PIC;

  track = true;

  ngOnInit() {
    console.log(this.title);
  }

  toogle() {
    this.track = !this.track;
  }

}

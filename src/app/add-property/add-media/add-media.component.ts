import {Component, Input, OnInit} from '@angular/core';
import {IProperty} from 'src/app/shared/interfaces/property.interface'
import {TextType} from '../../shared/ui-elements/text/text.component';
import {IMAGE_PATH} from '../../../global';

@Component({
  selector: 'mx-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss'],
})
export class AddMediaComponent implements OnInit {
  @Input() property: IProperty;
  public textType = TextType;
  public images = [{
    name: 'hall', path: IMAGE_PATH, isLoading: false
  }, {
    name: 'corner',
    path: IMAGE_PATH,
    isLoading: false
  }, {
    name: 'window view',
    path: IMAGE_PATH,
    isLoading: false
  }, {
    name: 'bath',
    path: IMAGE_PATH,
    isLoading: true
  }, {
    name: 'name5', path: IMAGE_PATH, isLoading: true
  }];

  constructor() {
  }

  public percentage = 20;

  public imageLink = IMAGE_PATH;

  ngOnInit() {
  }

  public onVideoLinkInput($event) {
    this.property.videoURLs = $event;
  }

}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Utils} from '../../../../utils';
import {ActionSheetController} from '@ionic/angular';
import {TextType} from '../text/text.component';

// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
@Component({
  selector: 'mx-upload-media-button',
  templateUrl: './upload-media-button.component.html',
  styleUrls: ['./upload-media-button.component.scss'],
})
export class UploadMediaButtonComponent implements OnInit {

  @Input() images: string[];
  @Input() values: string[];
  @Input() preview = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  public TextType = TextType;
  previewImages: string[];

  constructor(public actionSheetController: ActionSheetController
              // ,private camera: Camera
  ) {
  }

  public selectimage(checkOption) {
    // const options: CameraOptions = {
    //   quality: 100,
    //   sourceType: checkOption,
    //   correctOrientation: true,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    // this.camera.getPicture(options).then((imageData) => {
    //    var imageFile = 'data:image/jpeg;base64,' + imageData;
    //   // this.uploadImage(imageFile);
    // }, (err) => {
    //   console.log('error: ', err);
    // });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Option',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.selectimage(1);
          }
        }, {
          text: 'Gallery',
          icon: 'image-outline',
          handler: () => {
            this.selectimage(2);
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();

    const {role, data} = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  ngOnInit() {
  }


}

import {Component, Input, OnInit} from '@angular/core';
import {IMAGE_PATH} from '../../../../global';
import {BathEnum} from '../../enums/bath.enum';
import {MeasurementEnum} from '../../enums/measurement.enum';
import {IProperty} from '../../interfaces/property.interface';
import {PropertyState} from '../../enums/propertyState';
import {CategoryEnum} from '../../enums/categoryEnum';
import {IUser} from '../../interfaces/user.interface';
import {CurrencyEnum} from '../../enums/currency.enum';
import {RoleEnum} from '../../enums';
import {ModalController} from '@ionic/angular';
import {NextToEnum} from '../../enums/nexto.num';
import {Router} from '@angular/router';

export enum PropertiesModalType {
  renting = 'RENTING',
  selling = 'SELLING',
  recentViewed = 'RECENT_VIEWED',
  favorites = 'FAVORITES'
}

@Component({
  selector: 'mx-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {

  @Input() public viewType: PropertiesModalType;

  public Measurement = MeasurementEnum;
  public userSettings: IUser = {
    appIdentifier: '',
    createdAt: new Date(),
    currency: CurrencyEnum.ILS,
    email: '',
    firstName: '',
    id: 1,
    isOnline: false,
    lastName: '',
    lastOnlineTimestamp: '',
    location: undefined,
    mobile: '',
    notifications: false,
    detectLanguage: true,
    phone: '',
    profilePictureURL: '',
    pushToken: '',
    role: RoleEnum.USER,
    signUpLocation: {latitude: '', longitude: ''},
    updatedAt: new Date(),
    measurement: MeasurementEnum.meter
  };
  public property: IProperty = {
    authorID: 0,
    id: 222,
    category: CategoryEnum.Land,
    description: '',
    facilities: [],
    floor: 12,
    priceUp: true,
    priceDown: false,
    geoHash: '',
    isApproved: false,
    lastFloor: false,
    latitude: '',
    longitude: '',
    newConstruction: false,
    open_doors: undefined,
    place: '',
    price: 12220202,
    updatedAt: new Date(),
    createdAt: new Date(2021),
    state: [PropertyState.Selling, PropertyState.Renting],
    title: '',
    type: undefined,
    videoURLs: '',
    bathroom: 3,
    bedroom: 2,
    nextTo: [NextToEnum.Airport, NextToEnum.Train, NextToEnum.Mall, NextToEnum.Subway],
    address: 'Avenue 123, NY',
    square: 231
  }

  constructor(private modalCtrl: ModalController, private router: Router) {
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }

  public items = [{
    ...this.property,
    img: IMAGE_PATH,
    name: BathEnum.BathCabin
  }, {
    id: 2,
    ...this.property,
    priceUp: false,
    priceDown: true,
    updatedAt: new Date('2021'),
    state: [PropertyState.Selling],
    nextTo: [NextToEnum.Sea, NextToEnum.Garden],
    img: IMAGE_PATH,
    name: BathEnum.BathCabin
  }, {
    id: 3,
    ...this.property,
    floor: 1,
    bedroom: 1,
    bathroom: 1,
    priceUp: false,
    priceDown: true,
    state: [PropertyState.Renting],
    updatedAt: new Date('2021'),
    price: 1200000,
    nextTo: [NextToEnum.MedicalCenter, NextToEnum.Bus],
    img: IMAGE_PATH,
    name: BathEnum.BathCabin
  }, {
    id: 4,
    ...this.property,
    img: IMAGE_PATH,
    name: BathEnum.Jacuzzi
  },
    {
      id: 5,
      ...this.property,
      img: IMAGE_PATH,
      name: BathEnum.Bath
    }, {
      id: 6,
      ...this.property,
      img: IMAGE_PATH,
      name: BathEnum.Washbasins
    }];

  ngOnInit() {
  }

  public showDetails(item: IProperty) {
    var myurl = `/details/${item.id}`;
    this.router.navigateByUrl(myurl);
  }

}

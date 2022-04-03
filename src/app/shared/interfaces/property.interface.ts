import {CommonAmenitiesEnum, SafetyAmenitiesEnum} from '../enums/amenities.enum';
import {NextToEnum} from '../enums/nexto.num';
import {PropertyState} from '../enums/propertyState';
import {FacilitiesEnum} from '../enums/facilities.enum';
import {IUser} from './user.interface';
import {IVisit} from './visit.interface';
import {KitchenEnum} from '../enums/kitchen.enum';
import {BathEnum} from '../enums/bath.enum';
import {CategoryEnum} from '../enums/categoryEnum';

export enum PropertyType {
  Sell = 'sell',
  Buy = 'buy'
}

export interface IPropertyPreview {
  id?: number;
  title: string;
  bedroom: number;
  bathroom: number;
  square: number;
  type: PropertyType;
  createdAt?: Date;
  updatedAt?: Date;
  price: number;
  place: string;
  photoURLs?: string;
  videoURLs?: string;
  latitude: string;
  longitude: string;
  address: string;
}


export interface IProperty extends IPropertyPreview {
  additionalBath?: BathEnum[];
  description: string;
  isApproved: boolean;
  authorID: number;
  category: CategoryEnum;
  priceUp: boolean,
  priceDown: boolean,
  geoHash: string;
  newConstruction: boolean;
  lastFloor: boolean;
  floor: number;
  kitchen?: KitchenEnum[];
  balcony?: number;
  built?: number;
  phone?: string;
  agentID?: number;
  photo?: string;
  photoURLs?: string;
  amenities?: CommonAmenitiesEnum[];
  safetyAmenities?: SafetyAmenitiesEnum[];
  nextTo?: NextToEnum[];
  videoURLs: string;
  open_doors: any;
  delete?: boolean;
  yearBuild?: number;
  onTheLand?: boolean;
  elevator?: boolean;
  additionalDetails?: boolean; // in case use selected
  rating?: number;
  state: PropertyState[];
  facilities: FacilitiesEnum[];
  owner?: IUser; // foreign key
  visits?: IVisit[];
  images360?: any[];
  images?: any[];
  cancellation?: any;
  agreement?: any;
  rules?: any;
  video?: any;
  videoUrl?: string;
  audio?: any;
}

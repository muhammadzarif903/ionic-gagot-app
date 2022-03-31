import { RoleEnum } from "../enums";
import {MeasurementEnum} from '../enums/measurement.enum';
import {CurrencyEnum} from '../enums/currency.enum';

export interface IUser {
  appIdentifier: string;
  id: number;
  role: RoleEnum;
  measurement: MeasurementEnum;
  currency: CurrencyEnum;
  createdAt: any;
  updatedAt: any;
  email: string;
  firstName: string;
  lastName: string;
  profilePictureURL: string;
  signUpLocation: {
    latitude: string;
    longitude: string;
  };
  pushToken: string;
  mobile: string;
  phone: string;
  location: any;
  notifications: boolean;
  detectLanguage: boolean;
  isOnline: boolean;
  lastOnlineTimestamp: string;
}

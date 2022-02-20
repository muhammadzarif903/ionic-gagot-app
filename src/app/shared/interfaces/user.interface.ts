import { RoleEnum } from "../enums";

export interface IUser {
  appIdentifier: string;
  id: string;
  userID: string;
  role: RoleEnum;
  createdAt: string;
  created_at: string;
  updatedAt: string;
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
  isOnline: boolean;
  lastOnlineTimestamp: string;
}

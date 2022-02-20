import {IProperty} from './property.interface';
import {IUser} from './user.interface';

export enum DayOfTheWeekEnum {
  Sunday = 'Sun',
  Monday = 'Mon',
  Tuesday = 'Tue',
  Wednesday = 'Wed',
  Thursday = 'Thu',
  Friday = 'Fr',
  Saturday = 'Sat',
}


export interface IVisit {
  timeFrom?: string;
  timeTo?: string;
  date?: Date;
  day?: DayOfTheWeekEnum;
  property?: IProperty;
  visitors?: IUser[];
}

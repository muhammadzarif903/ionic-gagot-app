import {Injectable} from '@angular/core';
import {Color} from '../enums';

export enum StateType {
  initial = 'initial',
  submitted = 'submitted',
  invalid = 'invalid',
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() {
  }


  public stateBackgroundColor(state: StateType) {
    switch (state) {
      case StateType.submitted:
        return Color.primary;
      case StateType.invalid:
        return Color.danger;
      case StateType.initial:
      default:
        return Color.light;
    }
  }

  public stateTextColor(state: StateType) {
    switch (state) {
      case StateType.submitted:
      case StateType.invalid:
        return Color.light;
      case StateType.initial:
      default:
        return Color.secondary;
    }
  }
}

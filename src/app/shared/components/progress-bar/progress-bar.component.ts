import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Color, IconSize} from '../../enums';
import {roundNumber} from '../../utils';
import {StateService, StateType} from '../../services/state.service';

export enum ProgressBarPosition {
  horizontalTop = 'top',
  horizontalBottom = 'bottom',
  verticalLeft = 'left',
  verticalRight = 'right'
}


export interface IProgressBarConfig {
  position?: ProgressBarPosition;
  size?: number;
  borderColor?: Color | string;
  selectedColor?: Color | string;
  icon?: string;
  fontSize?: number;
  fontWeight?: number;
  titlePosition?: ProgressBarPosition;
}

export interface IProgressBarStep {
  title?: string;
  state?: StateType;
  active?: boolean;
  disabled?: boolean;
  visible?: boolean;
  borderColor?: Color;
  icon?: string;
  size?: IconSize | number;
  click?: any;
}

export interface IClickStepEvent {
  event: any;
  step: IProgressBarStep;
}

@Component({
  selector: 'mx-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {

  @Input() config: IProgressBarConfig;
  @Input() steps: IProgressBarStep[];

  @Output() onClick: EventEmitter<IClickStepEvent> = new EventEmitter<IClickStepEvent>();

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
  }

  public backgroundColor(step: IProgressBarStep): Color {
    return this.stateService.stateBackgroundColor(step.state);
  }

  public iconColor(step: IProgressBarStep): Color {
    return this.stateService.stateTextColor(step.state);
  }

  private getActiveIndex(): number {
    return this.steps.findIndex(step => !!step.active) || 0;
  }

  public get value() {
    const doneCount = this.getActiveIndex() + 1;
    return roundNumber(doneCount / this.steps.length, 1);
  }

  public get activeStep(): IProgressBarStep {
    return this.steps.find(s => s.active);
  }

  public clickHandler(event, step: IProgressBarStep) {
    this.onClick.emit({event, step});
  }

}

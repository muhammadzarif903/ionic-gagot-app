// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {IProgressBarStep, ProgressBarComponent, ProgressBarPosition} from './progress-bar.component';
import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {CheckboxComponent} from '../checkbox/checkbox.component';
import {StateType} from '../../services/state.service';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBarComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [moduleMetadata({
    declarations: [CheckboxComponent],
    imports: [IonicModule.forRoot()],
  }),]
} as Meta;

const steps: IProgressBarStep[] = [
  {
    title: 'First',
    state: StateType.submitted,
  },
  {
    title: 'Second',
    state: StateType.submitted,
  },
  {
    title: 'Third',
    state: StateType.submitted,
  },
  {
    title: 'Third',
    state: StateType.submitted,
  },
  {
    title: 'Fifth',
  },
  {
    title: 'Fifth',
  }
];

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  props: args,
});

export const HorizontalTop = Template.bind({});
HorizontalTop.args = {
  config: {
    position: ProgressBarPosition.horizontalTop
  },
  steps,
  activeStepIndex: 2,
  label: 'Button',
};

export const HorizontalBottom = Template.bind({});
HorizontalBottom.args = {
  config: {
    position: ProgressBarPosition.horizontalBottom
  },
  steps,
  activeStepIndex: 2,
  label: 'Button',
};


const invalidSteps: IProgressBarStep[] = [
  {
    state: StateType.submitted,
  },
  {
    state: StateType.submitted,
  },
  {
    state: StateType.invalid,
  },
  {
    state: StateType.invalid,
  },
  {},
  {}
];

export const DangerBar = Template.bind({});
DangerBar.args = {
  config: {
    icon: 'checkmark-outline'
  },
  steps: invalidSteps,
  activeStepIndex: 2,
  label: 'Button',
};



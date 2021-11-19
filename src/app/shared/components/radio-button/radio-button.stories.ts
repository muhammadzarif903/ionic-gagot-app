import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {RadioButtonComponent} from './radio-button.component';

export default {
  title: 'Components/RadioButton',
  component: RadioButtonComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, RadioButtonComponent],
      imports: [IonicModule.forRoot()],
    }),
  ]
} as Meta;

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};



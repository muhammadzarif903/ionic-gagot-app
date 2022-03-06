import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {CheckboxComponent} from './checkbox.component';

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, CheckboxComponent],
      imports: [IonicModule.forRoot()],
    }),
  ]
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};



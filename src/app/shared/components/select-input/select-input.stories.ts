import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {SelectInputComponent} from './select-input.component';

export default {
  title: 'Components/SelectInput',
  component: SelectInputComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, SelectInputComponent],
      imports: [IonicModule.forRoot()],
    }),
  ]
} as Meta;

const Template: Story<SelectInputComponent> = (args: SelectInputComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};



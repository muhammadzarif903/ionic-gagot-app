import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {ButtonListComponent} from './button-list.component';

export default {
  title: 'Components/ButtonList',
  component: ButtonListComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, ButtonListComponent],
      imports: [IonicModule.forRoot()],
    }),
  ]
} as Meta;

const Template: Story<ButtonListComponent> = (args: ButtonListComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};




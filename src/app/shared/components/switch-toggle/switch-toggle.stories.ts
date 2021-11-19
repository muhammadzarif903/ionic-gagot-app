import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {SwitchToggleComponent} from './switch-toggle.component';

export default {
  title: 'Components/SwitchToggle',
  component: SwitchToggleComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, SwitchToggleComponent],
      imports: [IonicModule.forRoot()],
    }),
  ]
} as Meta;

const Template: Story<SwitchToggleComponent> = (args: SwitchToggleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};



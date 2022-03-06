import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {PlusMinusToggleComponent} from './plus-minus-toggle.component';

export default {
  title: 'Components/PlusMinusToggle',
  component: PlusMinusToggleComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, PlusMinusToggleComponent],
      imports: [IonicModule.forRoot()],
    }),
  ]
} as Meta;

const Template: Story<PlusMinusToggleComponent> = (args: PlusMinusToggleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};



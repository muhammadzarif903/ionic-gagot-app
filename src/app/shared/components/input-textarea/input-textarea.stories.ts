import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {InputAreaMode, InputTextAreaComponent} from './input-textarea.component';

export default {
  title: 'Components/InputArea',
  component: InputTextAreaComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      declarations: [InputTextAreaComponent],
      imports: [IonicModule.forRoot()],
    }),
  ]
} as Meta;

const Template: Story<InputTextAreaComponent> = (args: InputTextAreaComponent) => ({
  props: args,
});

export const InputTextArea = Template.bind({});
InputTextArea.args = {
  value: 'text area field',
  placeholder: 'placeholder',
  mode: InputAreaMode.text,
  required: true
};



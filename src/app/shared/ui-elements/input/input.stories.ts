import {componentWrapperDecorator, moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {InputComponent, InputType} from './input.component';

export default {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    componentWrapperDecorator(InputComponent),
    moduleMetadata({
      declarations: [InputComponent],
      imports: [IonicModule.forRoot()],
    })],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args
});

export const Text = Template.bind({});
Text.args = {
  placeholder: 'enter text',
  type: InputType.text,
  required: true
};

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  placeholder: 'enter text',
  required: true,
  icon: 'locate-outline'
};

export const NumberMinMax = Template.bind({});
NumberMinMax.args = {
  value: 1,
  type: InputType.numberType,
  min: 0,
  max: 3
};


export const Email = Template.bind({});
Email.args = {
  placeholder: 'enter email',
  type: InputType.email
};

export const Telephone = Template.bind({});
Telephone.args = {
  placeholder: 'enter tel',
  type: InputType.tel
};

export const Password = Template.bind({});

Password.args = {
  placeholder: 'search for ..',
  type: InputType.search
};

export const Search = Template.bind({});
Search.args = {
  placeholder: 'search for ..',
  type: InputType.search
};

export const File = Template.bind({});
File.args = {
  placeholder: 'url ..',
  required: true,
  type: InputType.file
};



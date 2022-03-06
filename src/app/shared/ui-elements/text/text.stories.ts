import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent, TextType} from './text.component';
import {Color} from '../../enums';

export default {
  title: 'Components/Text',
  component: TextComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [moduleMetadata({
    declarations: [],
    imports: [IonicModule.forRoot()],
  }),]
} as Meta;

const Template: Story<TextComponent> = (args: TextComponent) => ({
  props: args,
});

const Header = Template.bind({});
Header.args = {
  title: 'Header',
  type: TextType.header,
  color: Color.dark
};

const SectionTitle = Template.bind({});
SectionTitle.args = {
  title: 'Section',
  type: TextType.sectionTitle,
  color: Color.dark
};

const Title = Template.bind({
  title: 'Title',
  type: TextType.title,
  color: Color.dark
});
Title.args = {
  title: 'Title',
  type: TextType.title,
  color: Color.dark
};

const Description = Template.bind({});
Description.args = {
  title: 'Description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  type: TextType.description,
  color: Color.dark
};

const TemplateAll: Story<TextComponent> = (args: TextComponent) => ({
  props: args,
  template: `<div style="display: flex; flex-direction: column; margin: 1rem">
             <mx-text style="padding: 0.5rem" [title]="Header.title" [type]="Header.type"></mx-text>
             <mx-text style="padding: 0.5rem" [title]="SectionTitle.title" [type]="SectionTitle.type"></mx-text>
             <mx-text style="padding: 0.5rem" [title]="Title.title" [type]="Title.type"></mx-text>
             <mx-text style="padding: 0.5rem" [title]="Description.title" [type]="Description.type"></mx-text>
            </div>`
});


export const All = TemplateAll.bind({});
All.args = {
  Header: Header.args,
  SectionTitle: SectionTitle.args,
  Title: Title.args,
  Description: Description.args
};

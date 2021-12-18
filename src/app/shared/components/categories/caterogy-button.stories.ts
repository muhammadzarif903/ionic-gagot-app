import {componentWrapperDecorator, moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {CheckboxComponent} from '../checkbox/checkbox.component';

export default {
  title: 'Components/CategoryButton',
  // component: CategoryButtonComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, CheckboxComponent],
      imports: [IonicModule.forRoot()],
    }),
    componentWrapperDecorator(story => `<div style="display: flex; flex-direction: row">${story}</div>`),
  ],
} as Meta;

// const Template: Story<CategoryButtonComponent> = (args: CategoryButtonComponent) => ({
//   props: args,
// });
//
//
// export const Default = Template.bind({});
// Default.args = {
//   title: 'House',
//   icon: 'home-outline',
//   selected: false
// };
//
// export const Selected = Template.bind({});
// Selected.args = {
//   title: 'Community Center',
//   icon: 'home-outline',
//   selected: true
// };


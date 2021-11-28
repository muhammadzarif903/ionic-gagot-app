import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {CheckboxComponent} from '../checkbox/checkbox.component';
import {CategoriesComponent} from './categories.component';
import {CategoryButtonComponent, ICategory} from '../category-button/category-button.component';
import * as Category from '../category-button/caterogy-button.stories';
import {categories} from './categories.data';

export default {
  title: 'Components/CategoryList',
  component: CategoriesComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  parameters: {
    backgrounds: {
      values: [
        {name: 'red', value: '#f00'},
        {name: 'green', value: '#0f0'},
        {name: 'blue', value: '#00f'},
      ],
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, CheckboxComponent, CategoryButtonComponent],
      imports: [IonicModule.forRoot()],
    }),
  ],
} as Meta;

const Template: Story<CategoriesComponent> = (args: CategoriesComponent) => ({
  props: args,
});



export const Many = Template.bind({});
Many.args = {
  categories: () => categories.map(obj => {
    return {
      ...Category.Default.args,
      ...obj
    };
  })
};

Many.args = {
  categories,
};


import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {CheckboxComponent} from '../checkbox/checkbox.component';
import {CategoriesComponent} from './categories.component';
import {CategoryButtonComponent, ICategory} from '../category-button/category-button.component';
import * as Category from '../category-button/caterogy-button.stories';

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

const categories: ICategory[] = [{
  icon: 'home-outline',
  title: 'Apartment',
}, {
  icon: 'home-outline',
  title: 'Land',
  selected: true,
}, {
  icon: 'home-outline',
  title: 'Penthouse',
}, {
  icon: 'home-outline',
  title: 'Condos',
}, {
  icon: 'home-outline',
  title: 'House',
},
  {
    icon: 'home-outline',
    title: 'Clinics',
  },
  {
    icon: 'home-outline',
    title: 'Basement',
  },
  {
    icon: 'home-outline',
    title: 'Offices',
  },
  {
    icon: 'home-outline',
    title: 'Duplex Apartment',
  },
  {
    icon: 'home-outline',
    title: 'Duplex House',
  },
  {
    icon: 'home-outline',
    title: 'Town Houses',
  },
  {
    icon: 'home-outline',
    title: 'Community Center',
  }
];

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


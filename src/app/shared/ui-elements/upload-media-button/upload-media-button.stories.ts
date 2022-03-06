import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {TextComponent} from '../text/text.component';
import {UploadMediaButtonComponent} from './upload-media-button.component';

export default {
  title: 'Components/UploadMediaButton',
  component: UploadMediaButtonComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, UploadMediaButtonComponent],
      imports: [IonicModule.forRoot()],
    }),
  ]
} as Meta;

const Template: Story<UploadMediaButtonComponent> = (args: UploadMediaButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};



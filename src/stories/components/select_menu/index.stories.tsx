import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectMenu } from '../../../lib/components/select_menu';

export default {
  title: 'components/Select Menu',
  component: SelectMenu
} as ComponentMeta<typeof SelectMenu>;

const Template: ComponentStory<typeof SelectMenu> = () => (
  <SelectMenu />
);

export const Component = Template.bind({});
Component.storyName = 'Select Menu';

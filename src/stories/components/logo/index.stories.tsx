import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from '../../../lib/components/logo';

export default {
  title: 'components/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => (
  <Logo className="h-14 w-14 text-primary-500" />
);

export const Component = Template.bind({});
Component.storyName = 'Logo';

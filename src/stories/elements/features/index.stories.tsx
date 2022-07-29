import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Features } from '../../../lib/elements/features';

export default {
  title: 'Elements/Features',
  component: Features
} as ComponentMeta<typeof Features>;

const Template: ComponentStory<typeof Features> = () => (
  <Features />
);

export const Component = Template.bind({});
Component.storyName = 'Features';
Component.parameters = { layout: 'padded' };

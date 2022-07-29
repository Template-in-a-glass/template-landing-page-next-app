import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Faq } from '../../../lib/elements/faq';

export default {
  title: 'Elements/Faq',
  component: Faq
} as ComponentMeta<typeof Faq>;

const Template: ComponentStory<typeof Faq> = () => (
  <Faq />
);

export const Component = Template.bind({});
Component.storyName = 'Faq';
Component.parameters = { layout: 'padded' };

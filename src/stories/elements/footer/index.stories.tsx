import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from '../../../lib/elements/footer';

export default {
  title: 'Elements/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <Footer />
);

export const Component = Template.bind({});
Component.storyName = 'Footer';
Component.parameters = { layout: 'padded' };

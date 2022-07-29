import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Hero } from '../../../lib/elements/hero';
import { HeroMainButton } from '../../../lib/elements/hero/hero-main-button';
import { HeroSecondaryButton } from '../../../lib/elements/hero/hero-secondary-button';

export default {
  title: 'Elements/Hero',
  component: Hero
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (properties) => {
  const { props } = properties;
  return (
    <Hero props={props} />
  );
};

export const Component = Template.bind({});
Component.storyName = 'Hero';
Component.args = {
  props: {
    mainButton: <HeroMainButton props={{ title: 'Explore' }} />,
    secondButton: <HeroSecondaryButton props={{ title: 'Follow us' }} />
  }
};

import LinkTo from '@storybook/addon-links/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  HeaderDesktopLink, HeaderMobileLink, HeroMainButton, HeroSecondaryButton, HomePage, HomePageProperties
} from '../../../lib';

export default {
  title: 'Pages/Home',
  component: HomePage
} as ComponentMeta<typeof HomePage>;

const homePageProperties: HomePageProperties = {
  headerProps: {
    headerDesktopLink: [
      <LinkTo story="Home" kind="Pages"><HeaderDesktopLink props={{ name: 'Showoff TV', current: true }} /></LinkTo>,
      <LinkTo story="TV Shows" kind="Pages"><HeaderDesktopLink props={{ name: 'TV Shows', current: false }} /></LinkTo>,
      <LinkTo story="Seasons" kind="Pages"><HeaderDesktopLink props={{ name: 'Seasons', current: false }} /></LinkTo>
    ],
    headerMobileLink: [
      <LinkTo story="Home" kind="Pages"><HeaderMobileLink props={{ name: 'Showoff TV', current: true }} /></LinkTo>,
      <LinkTo story="TV Shows" kind="Pages"><HeaderMobileLink props={{ name: 'TV Shows', current: false }} /></LinkTo>,
      <LinkTo story="Seasons" kind="Pages"><HeaderMobileLink props={{ name: 'Seasons', current: false }} /></LinkTo>
    ]
  },
  heroProps: {
    mainButton: <LinkTo story="TV Shows" kind="Pages"><HeroMainButton props={{ title: 'Shows Ended' }} /></LinkTo>,
    secondButton: <LinkTo story="Seasons" kind="Pages"><HeroSecondaryButton props={{ title: 'Seasons Ended' }} /></LinkTo>
  }
};

const Template: ComponentStory<typeof HomePage> = () => (
  <HomePage props={homePageProperties} />
);

export const Component = Template.bind({});
Component.storyName = 'Home';
Component.parameters = {
  layout: 'fullscreen'
};
Component.argTypes = {
  props: { control: false }
};

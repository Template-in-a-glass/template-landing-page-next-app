import LinkTo from '@storybook/addon-links/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from '../../../lib/elements/header';
import { HeaderDesktopLink } from '../../../lib/elements/header/header-desktop-link';
import { HeaderMobileLink } from '../../../lib/elements/header/header-mobile-link';

export default {
  title: 'Elements/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (properties) => {
  const { props } = properties;
  return (
    <Header props={props} />
  );
};

export const Component = Template.bind({});
Component.storyName = 'Header';
Component.parameters = {
  layout: 'fullscreen'
};
Component.args = {
  props: {
    headerDesktopLink: [
      <LinkTo><HeaderDesktopLink props={{ name: 'Showoff TV', current: true }} /></LinkTo>,
      <LinkTo><HeaderDesktopLink props={{ name: 'TV Shows', current: false }} /></LinkTo>
    ],
    headerMobileLink: [
      <LinkTo><HeaderMobileLink props={{ name: 'Showoff TV', current: true }} /></LinkTo>,
      <LinkTo><HeaderMobileLink props={{ name: 'TV Shows', current: false }} /></LinkTo>
    ]
  }
};

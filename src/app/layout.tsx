import { NextPage } from 'next';
import { PropsWithChildren } from 'react';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);
export default RootLayout;

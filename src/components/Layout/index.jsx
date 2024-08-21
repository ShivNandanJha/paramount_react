import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterStyle4 from '../Footer/FooterStyle4';
import Header from '../Header';

export default function Layout() {
  return (
    <>
      <Header logoSrc="/images/logo.svg" variant="cs_heading_color" />
      <Outlet />
      <FooterStyle4 />
    </>
  );
}

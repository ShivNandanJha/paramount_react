import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterStyle4 from '../Footer/FooterStyle4';
import Header from '../Header';

export default function Layout2() {
  return (
    <>
      <Header logoSrc="/images/logo_white.svg" variant="cs_white_color" />
      <Outlet />
      <FooterStyle4 />
    </>
  );
}

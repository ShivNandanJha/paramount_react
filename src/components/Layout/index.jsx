import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterStyle4 from '../Footer/FooterStyle4';
import Header from '../Header';
import ScrollToTop from '../ScrollToTop';

export default function Layout() {
  return (
    <>  <ScrollToTop /> 
      <Header logoSrc="/images/logo.svg" variant="cs_heading_color" />
      <Outlet />
      <FooterStyle4 />
    </>
  );
}

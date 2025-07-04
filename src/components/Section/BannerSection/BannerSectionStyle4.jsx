import React from 'react';
import parser from 'html-react-parser';

export default function BannerSectionStyle4({
  bgUrl,
  title,
  subTitle,
  center,
}) {
  return (
    <div className="container">
      <div
        className={`cs_banner cs_style_4 cs_bg_filed overflow-hidden ${
          center ? 'text-center' : ''
        }`}
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      >


      </div>
    </div>
  );
}

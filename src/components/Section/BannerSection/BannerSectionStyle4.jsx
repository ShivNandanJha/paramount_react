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
        <div style = {{
            backgroundColor: " rgba(243, 239, 239, 0.678)",
            padding: "10px"
          }}>
           <h2  className = "cs_section_title cs_fs_72 m-0 cs_primary" >
          {parser(title)}
        </h2>
        <p className = "cs_banner_subtitle cs_primary cs_fs_20 m-0">
          {parser(subTitle)}
        </p>
         </div>
        
      </div>
    </div>
  );
}

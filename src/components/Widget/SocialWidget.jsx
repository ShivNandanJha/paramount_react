// import { Icon } from '@iconify/react';
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function SocialWidget() {
//   return (
//     <div className="cs_social_links_wrap">
//       <h2>Follow Us</h2>
//       <div className="cs_social_links" >
//         <Link to="https://www.facebook.com/paramounthospitalslg">
//           <Icon  icon="fa-brands:facebook-f" />
//         </Link>
//         <Link to="https://www.facebook.com/paramounthospitalslg">
//           <Icon icon="fa-brands:youtube" />
//         </Link>
//         <Link to="/https://www.linkedin.com/company/paramounthospitalslg/mycompany/">
//           <Icon icon="fa-brands:linkedin-in" />
//         </Link>

//         <Link to="/https://www.instagram.com/paramounthospitalslg/">
//           <Icon icon="fa-brands:instagram" />
//         </Link>
//       </div>
//     </div>
//   );
// }


import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const socialLinks = [
  {
    url: 'https://www.facebook.com/paramounthospitalslg',
    icon: 'fa-brands:facebook-f'
  },
  {
    url: 'https://www.youtube.com/paramounthospitalslg',
    icon: 'fa-brands:youtube'
  },
  {
    url: 'https://www.linkedin.com/company/paramounthospitalslg/mycompany/',
    icon: 'fa-brands:linkedin-in'
  },
  {
    url: 'https://www.instagram.com/paramounthospitalslg/',
    icon: 'fa-brands:instagram'
  }
];

const SocialWidget = () => (
  <div className="cs_social_links_wrap">
    <h2>Follow Us</h2>
    <div>
      {socialLinks.map((link, index) => (
        <a    key  = {index} href      = {link.url} target = "_blank" rel = "noopener noreferrer">
        <Icon icon = {link.icon} style = {{ fontSize: '60px', padding: '10px'}} />
        </a>
      ))}
    </div>
  </div>
);

export default SocialWidget

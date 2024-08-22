
import TextWidget from '../Widget/TextWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import SocialWidget from '../Widget/SocialWidget';
import MenuWidget from '../Widget/MenuWidget';

const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Departments', href: '/departments' },
  { title: 'Doctors', href: '/doctors' },
  { title: 'Timetable', href: '/timetable' },
  { title: 'Appointment', href: '/appointments' },
];

const menuDataTwo = [
  { title: 'Testimonials', href: '/' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact Us', href: '/' },
  { title: 'FAQs', href: '/' },
];
const menuDataThree = [
  { title: 'Privacy Policy', href: '/' },
  { title: 'Terms and Conditions', href: '/blog' },
];

export default function FooterStyle4() {
  return (
    <footer className="cs_footer cs_style_2 cs_type_1 cs_primary_bg cs_primary_color" style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)` }}>
      <div className="container">
   
        <div className="cs_footer_in">
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <TextWidget
                logoUrl="/images/logo 1.svg"
                text="Healing Touch Par Excellence"
              />
              <ContactInfoWidget />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataOne} />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataTwo} />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataThree} />
              <SocialWidget />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom">
        <div className="container">
          <div className="cs_copyright">
           Healing Touch Par Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}

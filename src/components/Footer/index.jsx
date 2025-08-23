import TextWidget from '../Widget/TextWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import SocialWidget from '../Widget/SocialWidget';
import MenuWidget from '../Widget/MenuWidget';

const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Departments', href: '/departments' },
  { title: 'Doctors', href: '/doctors' },
  { title: 'Appointment', href: '/appointment' },
];

const menuDataTwo = [
  { title: 'Testimonials', href: '/' },
  { title: 'Blog', href: '/' },
  { title: 'Contact Us', href: '/' },
];

export default function FooterStyle4() {
  return (
    <footer
      className="cs_footer cs_style_2 cs_type_1 cs_primary_bg cs_primary_color"
      style={{ backgroundColor: 'white', backgroundSize: '100vw' }}
    >
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
          {/* <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataTwo} />
            </div>
          </div> */}<div className="mt-6">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fparamounthospitalslg&tabs=timeline&width=300&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&locale=en_US"
                  width="300"
                  height="300"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <SocialWidget />

              {/* Facebook Page Embed */}
              
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


import BannerSectionStyle7 from '../Section/BannerSection/BannerSectionStyle7';
import Section from '../Section';
import AppointmentSection from '../Section/AppointmentSection';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import AboutSectionStyle2 from '../Section/AboutSection/AboutSectionStyle2';
import FeaturesSectionStyle3 from '../Section/FeaturesSection/FeaturesSectionStyle5';
import TeamSectionStyle3 from '../Section/TeamSection/TeamSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';
import img from '../../assets/neurosurgery.jpg'

const featureData = [
  {
      title   : 'Orthopaedic and Joint Replacement Surgery',
      subTitle: 
          'Our Orthopaedic and Joint Replacement Surgery department specializes in the diagnosis, treatment, and management of musculoskeletal conditions. From fractures to joint replacements, our expert surgeons use advanced techniques to restore mobility and enhance quality of life for our patients.',
      iconUrl: '/images/departments/icon_9.svg',
  },
  {
      title   : 'Joint Replacement Surgery',
      subTitle: 
          'We offer comprehensive joint replacement services, including hip, knee, and shoulder replacements. Our team employs minimally invasive techniques and state-of-the-art technology to ensure optimal recovery and function for patients experiencing joint pain and dysfunction.',
      iconUrl: '/images/departments/icon_10.svg',
  },
  {
      title   : 'Sports Medicine',
      subTitle: 
          'Our Sports Medicine specialists provide diagnosis and treatment for sports-related injuries and conditions. We focus on both surgical and non-surgical interventions to help athletes and active individuals return to their peak performance levels as safely and quickly as possible.',
      iconUrl: '/images/departments/icon_11.svg',
  },
  {
      title   : 'Spine Surgery',
      subTitle: 
          'The Spine Surgery team addresses a range of spinal conditions, including herniated discs, spinal stenosis, and scoliosis. We utilize the latest surgical techniques and technologies to alleviate pain and improve spinal function, helping patients achieve a better quality of life.',
      iconUrl: '/images/departments/icon_12.svg',
  },
];


const doctorData = [
  {
    imgUrl      : '/images/doctors/AmalBasak.png',
    name        : 'Dr. Amal Basak, D.Ortho, MS',
    designation : 'Consultant Orthopaedic Surgeon',
    description : "",
    social      : [],
    availableUrl: '10 AM - 03 PM ',

    btnText: 'Booking',
    btnUrl : '/appointments',
  },
  {
    imgUrl      : '/images/doctors/SoutrikMukherjee.png',
    name        : 'Dr. Soutrik Mukherjee, MS',
    designation : 'Consultant Orthopaedic Surgeon',
    description : "",
    social      : [],
    availableUrl: '10 AM - 08 PM',

    btnText: 'Booking',
    btnUrl : '/appointments',
  },

];

export default function Orthopaedic() {
  pageTitle('Department Details');
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd = {135} topLg = {100} topXl = {100}>
        <AboutSectionStyle2
          title    = "Orthopaedic & Joint Replacement Surgery "
          subTitle = "This department specializes in the care of infants, children, adolescents, and provides a range of services including preventive care, developmental screenings, and treatment of childhood illnesses and conditions."
          imgUrl   = "/images/departments/orthopaedic.png"
        />
      </Section>

      <Section topMd = {170} topLg = {145} topXl = {90}>
        <FeaturesSectionStyle3
          sectionTitle   = "Treatments"
          sectionTitleUp = "MORE TYPE OF"
          data           = {featureData}
        />
      </Section>


      <Section topMd     = {200} topLg = {150} topXl = {100}>
      <div     className = "row cs_dept_blog" >
      <div     className = "col-lg-8">
      <div     className = "cs_blog_details">
              <h2>Orthopaedic Excellence at Paramount Hospital: <br /> Restoring Mobility,                                                                                  Enhancing Lives </h2>
              At              Paramount Hospital,               we offer a comprehensive range of orthopaedic services to address a wide variety of musculoskeletal issues, including: 
              <ol>
                <li>
                  <b>Joint Replacement: </b>
                  <br />
                  Our experienced orthopaedic surgeons perform state-of-the-art joint replacement surgeries, including hip, knee, and shoulder replacements, using the latest techniques and prosthetic materials.
                </li>
                <li>
                  <b>Sports Medicine: </b> <br />
                  We provide specialized care for athletes and individuals with sports-related injuries, offering a multidisciplinary approach to rehabilitation and performance enhancement.                </li>
                <li>
                  <b>Spine Care: </b>
                  <br />
                  Our spine specialists diagnose and treat spinal conditions, such as herniated discs, spinal stenosis, and scoliosis, employing both surgical and non-surgical approaches.
                </li>
                <li>
                  <b>Trauma and Fracture Care: </b>
                  <br />
                  We are equipped to handle traumatic injuries and fractures, offering immediate care and comprehensive fracture management.
                </li>
                <li>
                  <b>Arthroscopy: </b> <br />
                  Our orthopaedic surgeons use minimally invasive arthroscopic techniques to diagnose and treat joint problems, reducing pain and recovery time.
                </li>
                <li>
                  <b>Pediatric Orthopaedics: </b> <br />
                  Paramount Hospital provides specialized care for children with musculoskeletal conditions, ensuring they receive age-appropriate treatment and support.                </li>
              </ol>
              <h2> State-of-the-Art Facilities at Paramount Hospital</h2>
              <p>
              Our orthopaedic department is equipped with state-of-the-art diagnostic tools and surgical facilities, enabling us to provide accurate assessments and perform advanced surgical procedures with precision. We employ the latest imaging technologies, including MRI and CT scans, to ensure the most accurate diagnoses.
              </p>
              <blockquote
                style={{
                  backgroundImage: `url(${img})`
                }}
              >
                <p>
                  “Paramount Hospital stands out with a stellar medical team, renowned for extraordinary skills and impactful contributions, shaping the forefront of healthcare excellence in Siliguri. ”
                </p>
              </blockquote>
              <h2>
              Patient-Centered Care
              </h2>
              <p>
              Paramount Hospital is dedicated to delivering patient-centered care that addresses not only the physical aspects of orthopaedic conditions but also the emotional and psychological well-being of our patients. We believe that effective communication and a compassionate approach are essential components of successful treatment and recovery.
              </p>

            </div>
          </div>
        </div>
      </Section>


      <Section           topMd        = {200} topLg           = {150} topXl = {100}>
      <TeamSectionStyle3 sectionTitle = "Related Doctor" data = {doctorData} />
      </Section>

      {/* Start Appointment Section */}
      <Section
        topMd    = {190}
        topLg    = {145}
        topXl    = {105}
        bottomMd = {190}
        bottomLg = {145}
        bottomXl = {110}
        id       = "appointment"
      >
        <AppointmentSection
          sectionTitle   = "Appointment"
          sectionTitleUp = "BOOK AN"
          imgUrl         = "/images/departments/appointment.JPG"
        />
      </Section>
      {/* End Appointment Section */}
      <Section className = "cs_footer_margin_0">
        <BannerSectionStyle7
          imgUrl   = "/images/departments/banner_img_3.png"
          bgUrl    = "/images/departments/banner_bg_3.svg"
          title    = "Don’t Let Your Health <br />Take a Backseat!"
          subTitle = "Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}

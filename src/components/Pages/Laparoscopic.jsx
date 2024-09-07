
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
    title: 'Minimized Scarring',
    subTitle:
      'One of the primary advantages of laparoscopic surgery is the minimal scarring it leaves behind. Our expert surgeons make tiny incisions, resulting in smaller scars compared to traditional open surgery.',
      iconUrl: '/images/departments/icon_9.svg',
  },
  {
    title: 'Faster Recovery',
    subTitle:
      'Laparoscopic procedures typically require less downtime, allowing patients to return to their daily activities sooner. Reduced pain and discomfort contribute to a speedier recovery. ',
    iconUrl: '/images/departments/icon_10.svg',
  },
  {
    title: 'Greater Precision',
    subTitle:
      'Laparoscopic surgery offers surgeons a magnified, high-definition view of the surgical area, enabling them to perform procedures with enhanced precision and accuracy.',
    iconUrl: '/images/departments/icon_11.svg',
  },
  {
    title: 'Less Pain and Discomfort',
    subTitle:
      'The minimally invasive nature of laparoscopic surgery often leads to less postoperative pain and discomfort for patients. Smaller incisions mean fewer tissues are affected during the procedure',
    iconUrl: '/images/departments/icon_12.svg',
  },
];

const doctorData = [
  {
    imgUrl: '/images/doctors/VivekSarkar.png',
    name: 'Dr. Vivek Sarkar, MS',
    designation: 'Consultant General Surgeon',
    description: "",
    social: [],
    availableUrl: '11 AM - 05 PM & 06 PM - 08 PM',

    btnText: 'Booking',
    btnUrl: '/appointments',
  },
  {
    imgUrl: '/images/doctors/PenzimBhutiya.png',
    name: 'Dr. Penzim D Bhutia, MS',
    designation: 'Consultant General Surgeon',
    description: "",
    social: [],
    availableUrl: '03 PM - 06 PM',

    btnText: 'Booking',
    btnUrl: '/appointments',
  },
  {
    imgUrl: '/images/doctors/',
    name: 'Dr. Kalyan Mandal, MS',
    designation: 'Consultant General Surgeon',
    description: "",
    social: [],
    availableUrl: ' 07 PM - 08 PM',

    btnText: 'Booking',
    btnUrl: '/appointments',
  },
  {
    imgUrl: '/images/doctors/',
    name: 'Dr. J Jameezul Irfan, MS',
    designation: 'Consultant General Surgeon',
    description: "",
    social: [],
    availableUrl: ' 09 AM - 10 AM & 03 PM - 06 PM',

    btnText: 'Booking',
    btnUrl: '/appointments',
  },
];

export default function Neurology() {
  pageTitle('Department Details');
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Laparoscopic & General Surgery"
          subTitle="This department specializes in the care of infants, children, adolescents, and provides a range of services including preventive care, developmental screenings, and treatment of childhood illnesses and conditions."
          imgUrl="/images/departments/surgery.jpg"
        />
      </Section>

      <Section topMd={170} topLg={145} topXl={90}>
        <FeaturesSectionStyle3
          sectionTitle="Treatments"
          sectionTitleUp="MORE TYPE OF"
          data={featureData}
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog" >
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>Why Choose Laparoscopic Surgery at Paramount Hospital?</h2>

              <ol>
                <li>
                  <b>Minimized Scarring: </b>
                  <br />
                  One of the primary advantages of laparoscopic surgery is the minimal scarring it leaves behind. Our expert surgeons make tiny incisions, resulting in smaller scars compared to traditional open surgery.
                </li>
                <li>
                  <b>Faster Recovery: </b> <br />
                  Laparoscopic procedures typically require less downtime, allowing patients to return to their daily activities sooner. Reduced pain and discomfort contribute to a speedier recovery.                </li>
                <li>
                  <b>  Less Pain and Discomfort: </b>
                  <br />
                  The minimally invasive nature of laparoscopic surgery often leads to less postoperative pain and discomfort for patients. Smaller incisions mean fewer tissues are affected during the procedure.
                </li>
                <li>
                  <b> Shorter Hospital Stays:  </b>
                  <br />
                  In many cases, patients undergoing laparoscopic surgery experience shorter hospital stays compared to traditional surgery. This means less time spent in the hospital and a quicker return to the comforts of home.                </li>
                <li>
                  <b>Greater Precision:  </b> <br />
                  Laparoscopic surgery offers surgeons a magnified, high-definition view of the surgical area, enabling them to perform procedures with enhanced precision and accuracy.
                </li>

              </ol>
              <h2>Patient-Centered Care </h2>
              <p>


                At Paramount Hospital, patient well-being and comfort are at the forefront of our approach to laparoscopic surgery. Our dedicated surgical team works closely with each patient to ensure they receive personalized care, clear communication, and support throughout their surgical journey.

                If you or a loved one are considering surgery, rest assured that Paramount Hospital's laparoscopic surgery services are characterized by excellence, innovation, and a commitment to your health and recovery. We are here to provide you with the most advanced and minimally invasive surgical options available. Your health is our paramount concern, and your journey to wellness begins with us.
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
                Common Laparoscopic Procedures at Paramount Hospital
              </h2>
              <p>
                <ol>
                  <li> Laparoscopic cholecystectomy (gallbladder removal)</li>
                  <li> Laparoscopic appendectomy (appendix removal)</li>
                  <li> Laparoscopic hernia repair</li>
                  <li> Laparoscopic colon and rectal surgery</li>
                  <li> Laparoscopic gynecological surgery (e.g., hysterectomy)</li>
                  <li> Laparoscopic bariatric surgery (weight loss surgery)</li>
                  <li> Laparoscopic urological procedures</li>
                </ol>
              </p>

            </div>
          </div>
        </div>
      </Section>


      <Section topMd={200} topLg={150} topXl={100}>
        <TeamSectionStyle3 sectionTitle="Related Doctor" data={doctorData} />
      </Section>

      {/* Start Appointment Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={190}
        bottomLg={145}
        bottomXl={110}
        id="appointment"
      >
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/departments/appointment.JPG"
        />
      </Section>
      {/* End Appointment Section */}
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle7
          imgUrl="/images/departments/banner_img_3.png"
          bgUrl="/images/departments/banner_bg_3.svg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}

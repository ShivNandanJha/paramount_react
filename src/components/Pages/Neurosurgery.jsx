
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
    title: 'Surgical Treatment of Brain and Spinal Conditions',
    subTitle:
      'The Neurosurgery Department performs complex surgical procedures to treat conditions affecting the brain and spine, such as tumors, aneurysms, and spinal cord injuries. Our surgeons use cutting-edge technology to ensure precision and optimal outcomes.',
    iconUrl: '/images/departments/icon_9.svg',
  },
  {
    title: 'Minimally Invasive Spine Surgery',
    subTitle:
      'We offer minimally invasive spine surgery techniques to treat herniated discs, spinal stenosis, and other spinal conditions. These techniques aim to reduce recovery time and minimize surgical risks.',
    iconUrl: '/images/departments/icon_10.svg',
  },
  {
    title: 'Management of Neurotrauma',
    subTitle:
      'Our department provides emergency and follow-up care for patients with traumatic brain injuries and spinal cord injuries. We focus on stabilizing patients, managing complications, and supporting rehabilitation efforts.',
    iconUrl: '/images/departments/icon_11.svg',
  },
  {
    title: 'Functional Neurosurgery',
    subTitle:
      'We specialize in functional neurosurgery for conditions such as Parkinson’s disease and essential tremor. Procedures like deep brain stimulation are used to improve motor function and quality of life for patients with movement disorders.',
    iconUrl: '/images/departments/icon_12.svg',
  },
];

const doctorData = [
  {
    imgUrl: '/images/doctors/SajalBiswas.png',
    name: 'Dr. Sajal Biswas, MS, MCh',
    designation: 'Consultant Neurosurgeon',
    description: "",
    social: [],
    availableUrl: '02 PM - 04 PM & 06 PM - 08 PM',

    btnText: 'Booking',
    btnUrl: '/appointments',
  },
];

export default function Neurosurgery() {
  pageTitle('Department Details');
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Neurosurgery "
          subTitle="This department specializes in the care of infants, children, adolescents, and provides a range of services including preventive care, developmental screenings, and treatment of childhood illnesses and conditions."
          imgUrl="/images/departments/neurology.png"
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
              <h2>Why Choose Paramount Hospital for Neurosurgery?</h2>

              <ol>
                <li>
                  <b>Expert Neurosurgeons:</b>
                  <br />
                  Our team comprises highly trained neurosurgeons with extensive experience in performing complex brain and spine surgeries. They are at the forefront of neurosurgical advancements.
                </li>
                <li>
                  <b>Cutting-Edge Technology:</b> <br />
                  Paramount Hospital is equipped with state-of-the-art neurosurgical facilities, including advanced imaging, navigation systems, and robotic-assisted surgery, ensuring the highest level of precision.
                </li>
                <li>
                  <b> Comprehensive Neurosurgical Services:</b>
                  <br />
                  We offer a wide range of neurosurgical treatments, including but not limited to:    <br />
                  Brain surgery for tumors, vascular conditions, and epilepsy    <br />
                  Spinal surgery for herniated discs, spinal stenosis, and deformities    <br />
                  Minimally invasive neurosurgery for reduced pain and faster recovery    <br />
                  Cranial and spinal trauma surgery for injuries    <br />
                  Complex skull base surgery for tumors and vascular issues    <br />
                  Peripheral nerve surgery for conditions like carpal tunnel syndrome    <br />
                </li>
                <li>
                  <b> Patient-Centered Care: </b>
                  <br />
                  Our patient-focused approach means you receive personalized care tailored to your unique needs. We understand the emotional and physical challenges of neurosurgery, and we are here to support you and your family throughout the journey.
                </li>
                <li>
                  <b>Rapid and Accurate Diagnosis: </b> <br />
                  This is characterized by recurrent, unwanted thoughts
                  (obsessions) and/or repetitive behaviors (compulsions).
                </li>
                <li>
                  <b>Post-Traumatic Stress Disorder (PTSD): </b> <br />
                  Paramount Hospital&apos;s advanced diagnostic capabilities, including MRI, CT scans, ensure timely and precise diagnoses, crucial for successful neurosurgical interventions.
                </li>
              </ol>
              <p>
                We recognize that facing a neurosurgical procedure can be daunting. Paramount Hospital's neurosurgical team is committed to providing compassionate care, addressing your concerns, and ensuring you have a clear understanding of your treatment plan.
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
                Choose Paramount Hospital for Your Neurosurgical Needs
              </h2>
              <p>
                When you choose Paramount Hospital for neurosurgery, you are selecting a partner dedicated to your well-being, comfort, and recovery. Our commitment to excellence, advanced technology, and patient-centered care make us the ideal choice for your neurosurgical journey. Don't let neurological conditions hold you back—take the first step towards better neurological health with Paramount Hospital today.
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

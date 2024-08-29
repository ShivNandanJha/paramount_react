
import BannerSectionStyle7 from '../Section/BannerSection/BannerSectionStyle7';
import Section from '../Section';
import AppointmentSection from '../Section/AppointmentSection';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import AboutSectionStyle2 from '../Section/AboutSection/AboutSectionStyle2';
import FeaturesSectionStyle3 from '../Section/FeaturesSection/FeaturesSectionStyle5';
import TeamSectionStyle3 from '../Section/TeamSection/TeamSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';

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

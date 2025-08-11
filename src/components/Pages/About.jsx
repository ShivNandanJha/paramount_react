import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
const departmentData = [
    {
    title: "Trauma & Emergency Care",
    subTitle: "24/7 emergency response and trauma management for critical injuries and accidents.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Neuro-Cardio Cathlab",
    subTitle: "Advanced diagnostics and interventional procedures for neurological and cardiac conditions.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Diagnostic Testing",
    subTitle: "Blood work, imaging (X-rays, MRIs), and other tests to identify health conditions accurately.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Rehabilitation Services",
    subTitle: "Physical and occupational therapy to help patients recover after injury or surgery.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Preventive Care",
    subTitle: "Routine check-ups, immunizations, and health screenings to maintain overall well-being.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Acute & Chronic Condition Treatment",
    subTitle: "Disease management, medication, and long-term care for ongoing or sudden illnesses.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
 

];


const featureListData = [
  {
    title: "Experienced Medical Professionals",
    subTitle:
      "Our team includes experienced doctors, nurses, <br />and other healthcare professionals who are <br />dedicated to providing the best possible care to <br />our patients.",
    iconUrl: "images/icons/professional.svg",
  },
  {
    title: "Comprehensive <br />Services",
    subTitle:
      "We offer a wide range of healthcare services, <br />from preventive care to specialized treatment <br />for complex conditions.",
    iconUrl: "images/icons/comprehensive.svg",
  },
  {
    title: "Patient-centered <br />Approach",
    subTitle:
      "We believe in treating each patient as an <br />individual, and we take the time to understand <br />your unique health needs and concerns.",
    iconUrl: "images/icons/patient.svg",
  },
  {
    title: "State-of-the-art <br />Facilities",
    subTitle:
      "Our healthcare center is equipped with the <br />latest technology and equipment to provide our <br />patients with the most advanced care possible.",
    iconUrl: "images/icons/facilities.svg",
  },
];

const funFactData = [
  { number: "29+", title: "Years of experience" },
  { number: "95%", title: "Patient satisfaction rating" },
  { number: "5000+", title: "Patients served annually" },
  { number: "20+", title: "Healthcare providers on staff" },
];

const galleryData = [
  {
    imgUrl: "/images/about/image.jpg",
  },
  { imgUrl: "/images/about/image2.jpg" },
  { imgUrl: "/images/about/image5.jpg" },

  { imgUrl: "/images/about/image8.JPG" },
  { imgUrl: "/images/about/image7.jpg" },
  { imgUrl: "/images/about/imagea.webp" },
  { imgUrl: "/images/about/imageb.webp" },
  { imgUrl: "/images/about/imagec.webp" },
];
const awardData = [
  {
    iconUrl: "/images/icons/approved.png",
    title: "WBHS ECHS RAIL Empanelled",
  },
  {
    iconUrl: "/images/icons/approved2.png",
    title: "NABH Pre Accredited",
  },
  {
    iconUrl: "/images/icons/approved3.png",
    title: "NABL Certified ",
  },
  
];

export default function About() {
  pageTitle("About");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.webp"
        title="Welcome to <br />Paramount Hospital"
        subTitle="Best Multi-Super Speciality Hospitals in Siliguri"
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Our Best Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl="images/about/why_choose_us.webp"
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
      {/* <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section> */}
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Approvals & <br />Recognitions"
          sectionTitleUp="Hospital"
          sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
          data={awardData}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/about/banner.webp"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section>
    </>
  );
}

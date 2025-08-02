import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import AppointmentSectionStyle2 from "../Section/AppointmentSection";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import FeaturesSectionStyle3 from "../Section/FeaturesSection/FeaturesSectionStyle5";
import TeamSectionStyle3 from "../Section/TeamSection/TeamSectionStyle3";
import { pageTitle } from "../../helpers/PageTitle";
import img from "../../assets/neurosurgery.jpg";
const featureData = [
  {
    title: "Vaccinations Department",
    subTitle:
      "he Cardiology Department provides comprehensive evaluation and management of heart conditions such as congenital heart defects, arrhythmias, and coronary artery disease. Our team uses advanced diagnostic tools to assess heart health and develop personalized treatment plans.",
    iconUrl: "/images/departments/icon_9.svg",
  },
  {
    title: "Cardiac Stress Testing",
    subTitle:
      "Our department offers cardiac stress testing to assess how well the heart performs under physical exertion. This helps in diagnosing conditions such as coronary artery disease and evaluating the effectiveness of treatments.",
    iconUrl: "/images/departments/icon_10.svg",
  },
  {
    title: "Interventional Cardiology",
    subTitle:
      "The Cardiology Department performs minimally invasive procedures such as angioplasty and stent placement to treat blocked arteries and other cardiovascular issues. Our expert cardiologists use state-of-the-art technology to ensure optimal patient outcomes.",
    iconUrl: "/images/departments/icon_11.svg",
  },
  {
    title: "Heart Failure Management",
    subTitle:
      "We provide specialized care for patients with heart failure, including medication management, lifestyle counseling, and monitoring of cardiac function to improve quality of life and overall heart health.",
    iconUrl: "/images/departments/icon_12.svg",
  },
];

const doctorData = [
  {
    imgUrl: "/images/doctors/ArabindaSaha.webp",
    name: "Dr. Arabinda Saha, MD, DM",
    designation: "Consultant Cardiologist",
    description: "",
    social: [],
    availableUrl: " 09 AM - 10 AM & 06 PM - 07 PM",

    btnText: "Booking",
    btnUrl: "/appointment",
  },
  {
    imgUrl: "/images/doctors/IndranilSen.webp",
    name: "Dr. Indranil Sen, MD, DNB",
    designation: "Consultant Cardiologist",
    description: "",
    social: [],
    availableUrl: "09 AM - 11 AM & 04 PM - 07 PM",

    btnText: "Booking",
    btnUrl: "/appointment",
  },
 
];

export default function Cardiology() {
  pageTitle("Best Cardiology Department in Siliguri");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Cardiology"
          subTitle="Paramount Hospital Siliguri offers comprehensive cardiology services to manage and treat heart conditions. Our experienced cardiologists use advanced diagnostic tools and innovative treatments to address a range of cardiac issues, from routine check-ups to complex procedures. We are committed to providing personalized care to ensure heart health and overall well-being."
          imgUrl="/images/departments/cardiology.webp"
        />
      </Section>

      <Section topMd={170} topLg={145} topXl={90}>
        <FeaturesSectionStyle3
          sectionTitle="Treatments"
          sectionTitleUp="MORE TYPE OF"
          data={featureData}
        />
      </Section>
      <Section topMd     = {200} topLg = {150} topXl = {100}>
      <div     className = "row cs_dept_blog">
      <div     className = "col-lg-8">
      <div     className = "cs_blog_details">
              <h1>
                Excellence in Cardiac Care at Paramount Hospital <br />{" "}
              </h1>
              <p>
                The Cardiology department at Paramount Hospital is committed to providing specialized care for patients with heart diseases and related conditions. From managing high blood pressure to treating complex cardiovascular disorders, we employ state-of-the-art diagnostic and therapeutic techniques to ensure the best outcomes for our patients.
              </p>
              <h2>Advanced Diagnostic and Treatment Technologies</h2>
              <p>
                Paramount Hospital&apos;s Cardiology department is equipped with modern diagnostic tools such as echocardiograms, electrocardiograms (ECGs), stress tests, and cardiac catheterization labs. These cutting-edge technologies allow us to detect heart conditions at an early stage and provide precise, effective treatment plans.
              </p>
              <h2>Expert Cardiologists Providing Personalized Care</h2>
              <p>
                Our highly experienced cardiologists specialize in diagnosing and treating a wide range of heart conditions, including coronary artery disease, heart failure, arrhythmias, and valvular heart diseases. We adopt a patient-focused approach, ensuring that each treatment plan is tailored to the individual&apos;s unique health needs.
              </p>
              <h2>Preventive Cardiology for Long-Term Heart Health</h2>
              <p>
                At Paramount Hospital, we emphasize preventive cardiology to help patients reduce their risk of heart disease. Through lifestyle modification programs, dietary guidance, and risk assessment screenings, we aim to promote heart health and prevent cardiovascular complications before they arise.
              </p>
              <blockquote
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <p>
                  “At Paramount Hospital, we are dedicated to ensuring that every patient receives world-class cardiac care, improving both longevity and quality of life.”
                </p>
              </blockquote>
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
        style={{
          backgroundColor: "white",
        }}
      >
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/Testi-bg.webp"
          sectionTitle="Book an Appointment"
        />
      </Section>
      {/* End Appointment Section */}

      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="/images/departments/banner_img.webp"
          title="Take Charge of Your Hormonal Health!"
          subTitle="Consult with our expert endocrinologists for personalized treatment and long-term well-being."
        />
      </Section>
    </>
  );
}

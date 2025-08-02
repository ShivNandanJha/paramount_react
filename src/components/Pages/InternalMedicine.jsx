import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import AppointmentSectionStyle2 from "../Section/AppointmentSection";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import TeamSectionStyle3 from "../Section/TeamSection/TeamSectionStyle3";
import { pageTitle } from "../../helpers/PageTitle";
import img from "../../assets/neurosurgery.jpg";

const doctorData = [
  {
    imgUrl: "/images/doctors/MKDas.webp",
    name: "Dr. M K Das, MD",
    designation: "Consultant General Physician",
    description: "",
    social: [],
    availableUrl: "09 AM - 02 PM",
    btnText: "Booking",
    btnUrl: "/appointment",
  },
  {
    imgUrl: "/images/doctors/SoumyaGhosh.webp",
    name: "Dr. Soumya Ghosh, MD",
    designation: "Consultant General Physician",
    description: "",
    social: [],
    availableUrl: "09 AM - 04 PM & 06 PM - 08 PM",
    btnText: "Booking",
    btnUrl: "/appointment",
  },
];

export default function InternalMedicine() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Internal Medicine "
          subTitle="Internal Medicine is the branch of medicine that deals with the prevention, diagnosis, and treatment of adult diseases. Paramount Hospital&apos;s Internal Medicine department provides comprehensive care for a variety of acute and chronic conditions, ensuring patients receive holistic and personalized treatment."
          imgUrl="/images/departments/internal_medicine.webp"
        />
      </Section>

      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h1>
                Excellence in Internal Medicine Care <br />{" "}
              </h1>
              <p>
                Paramount Hospital&apos;s Internal Medicine department is committed to delivering high-quality, evidence-based care to patients suffering from a wide range of medical conditions. The department specializes in treating complex illnesses that affect multiple organ systems, ensuring comprehensive and coordinated care.
              </p>
              <h2>Advanced Diagnostic and Treatment Facilities</h2>
              <p>
                The Internal Medicine department at Paramount Hospital is equipped with state-of-the-art diagnostic tools and laboratories. From advanced imaging techniques to in-depth pathology tests, our specialists use the latest technology to accurately diagnose and manage various medical conditions.
              </p>
              <h2>Expert Physicians</h2>
              <p>
                Our team of experienced physicians specializes in diagnosing and treating a wide range of conditions, from infectious diseases to chronic illnesses like diabetes, hypertension, and heart disease. The doctors focus on personalized treatment plans that promote long-term well-being.
              </p>
              <h2>Holistic Patient-Centered Approach</h2>
              <p>
                Paramount Hospital&apos;s Internal Medicine department believes in a holistic approach to patient care. Our experts emphasize preventive measures, lifestyle modifications, and patient education to help individuals take control of their health and well-being.
              </p>
              <blockquote
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <p>
                  “At Paramount Hospital, we are dedicated to providing patient-centric internal medicine services, ensuring every individual receives the best possible care tailored to their needs.”
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
          title="Prioritize Your Health Today!"
          subTitle="Schedule an appointment with our expert physicians for comprehensive medical care."
        />
      </Section>
    </>
  );
}

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
        imgUrl: "/images/doctors/SoumyaGhosh.webp",
        name: "Dr. Soumya Ghosh, MD",
        designation: "Consultant Pulmonologist",
        description: "",
        social: [],
        availableUrl: "09 AM - 04 PM & 06 PM - 08 PM",
        btnText: "Booking",
        btnUrl: "/appointments",
      },
];

export default function Pulmonology() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Pulmonology "
          subTitle="Pulmonology is the medical specialty that focuses on diseases affecting the lungs and respiratory system. At Paramount Hospital&apos;s Pulmonology department, we diagnose and treat conditions such as asthma, COPD, lung infections, and sleep disorders. With advanced diagnostic tools and a patient-centered approach, we ensure comprehensive respiratory care."
          imgUrl="/images/departments/pulmonology.webp"
        />
      </Section>

      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h1>
                Comprehensive Respiratory Care at Paramount Hospital <br />{" "}
              </h1>
              <p>
                At Paramount Hospital, our Pulmonology department is dedicated to providing expert care for patients with respiratory illnesses. From common conditions like bronchitis to complex lung diseases, our specialists offer precise diagnosis and effective treatments tailored to each patient&apos;s needs.
              </p>
              <h2>Advanced Pulmonary Diagnostic Tools</h2>
              <p>
                The Pulmonology department is equipped with modern diagnostic tools such as pulmonary function tests (PFTs), bronchoscopy, and advanced imaging techniques. These enable accurate assessment of lung health and early detection of respiratory disorders.
              </p>
              <h2>Specialized Treatment for Lung Diseases</h2>
              <p>
                Our expert pulmonologists specialize in treating various lung conditions, including interstitial lung disease, pneumonia, and tuberculosis. We utilize the latest medical advancements to improve breathing and enhance patients&apos; quality of life.
              </p>
              <h2>Personalized Care for Chronic Respiratory Conditions</h2>
              <p>
                Managing chronic lung diseases such as asthma and COPD requires long-term care and patient education. At Paramount Hospital, we provide individualized treatment plans, pulmonary rehabilitation programs, and lifestyle counseling to help patients lead healthier lives.
              </p>
              <blockquote
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <p>
                  “Our Pulmonology department at Paramount Hospital is committed to providing expert respiratory care, ensuring every breath you take is healthier and easier.”
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
          title="Breathe Easy with Expert Pulmonary Care!"
          subTitle="Schedule an appointment with our pulmonologists for personalized respiratory treatment."
        />
      </Section>
    </>
  );
}

import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import AppointmentSectionStyle2 from "../Section/AppointmentSection";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";

import { pageTitle } from "../../helpers/PageTitle";
import img from "../../assets/neurosurgery.jpg";



export default function Endocrinology() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Endocrinology "
          subTitle="Endocrinology is a specialized field of medicine that focuses on the diagnosis and treatment of hormone-related disorders. Paramount Hospital&apos;s Endocrinology department is dedicated to providing comprehensive care for conditions affecting the endocrine system, including diabetes, thyroid disorders, metabolic syndromes, and hormonal imbalances. Our team of experts ensures that each patient receives personalized treatment to manage and improve their hormonal health."
          imgUrl="/images/departments/endocrinology.webp"
        />
      </Section>

      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h1>
                Comprehensive Endocrine Care at Paramount Hospital <br />{" "}
              </h1>
              <p>
                The Endocrinology department at Paramount Hospital is committed to diagnosing and treating a wide range of endocrine disorders. Hormonal imbalances can impact various bodily functions, leading to conditions like diabetes, osteoporosis, and adrenal or pituitary gland disorders. Our expert endocrinologists use the latest advancements in medical science to provide accurate diagnoses and effective treatment plans tailored to each patient&apos;s needs.
              </p>
              <h2>State-of-the-Art Diagnostic and Treatment Facilities</h2>
              <p>
                Paramount Hospital&apos;s Endocrinology department is equipped with cutting-edge diagnostic tools, including advanced blood tests, imaging techniques, and hormone assays. Our facility enables precise identification of endocrine disorders, allowing our specialists to develop effective and customized treatment strategies for patients.
              </p>
              <h2>Expert Endocrinologists and Personalized Treatment</h2>
              <p>
                Our team of skilled endocrinologists specializes in managing various conditions, including diabetes, thyroid dysfunction, polycystic ovary syndrome (PCOS), and other metabolic disorders. We focus on a patient-centric approach, ensuring that treatment plans incorporate lifestyle modifications, medication management, and ongoing monitoring to achieve optimal health outcomes.
              </p>
              <h2>Holistic and Long-Term Patient Care</h2>
              <p>
                At Paramount Hospital&apos;s Endocrinology department, we understand that endocrine disorders require long-term management and close monitoring. We emphasize a holistic approach to patient care, integrating nutritional counseling, weight management programs, and preventive care to enhance the overall quality of life for our patients. Our goal is to empower individuals with the knowledge and resources they need to manage their conditions effectively.
              </p>
              <blockquote
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <p>
                  “At Paramount Hospital, we prioritize the well-being of our patients by offering comprehensive endocrine care, ensuring a healthier and more balanced life.”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
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

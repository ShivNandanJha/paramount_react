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
    imgUrl: "/images/doctors/VikrantDeshmukh.webp",
    name: "Dr. Vikrant Deshmukh, DNB",
    designation: "Consultant Nephrologist",
    description: "",
    social: [],
    availableUrl: "05 PM - 07 PM",
    btnText: "Booking",
    btnUrl: "/appointments",
  },
];

export default function Nephrology() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Nephrology "
          subTitle="Nephrology is the branch of medicine that specializes in kidney health and diseases. At Paramount Hospital&apos;s Nephrology department, we offer expert diagnosis and treatment for conditions such as chronic kidney disease, kidney stones, and hypertension-related kidney complications. Our specialists focus on providing the highest standard of renal care."
          imgUrl="/images/departments/nephrology.webp"
        />
      </Section>

      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h1>
                Advanced Kidney Care at Paramount Hospital <br />{" "}
              </h1>
              <p>
                Paramount Hospital&apos;s Nephrology department is dedicated to delivering exceptional kidney care through advanced diagnostics and specialized treatment options. From managing kidney-related disorders to offering dialysis support, we strive to enhance our patients&apos; quality of life.
              </p>
              <h2>Comprehensive Kidney Disease Management</h2>
              <p>
                Our department provides a holistic approach to managing kidney diseases, including chronic kidney disease (CKD), glomerulonephritis, and nephrotic syndrome. Our team ensures precise diagnosis and personalized treatment plans for each patient.
              </p>
              <h2>State-of-the-Art Dialysis Services</h2>
              <p>
                Paramount Hospital offers cutting-edge dialysis services, including hemodialysis and peritoneal dialysis, to support patients with kidney failure. Our experienced nephrologists and specialized nursing staff ensure safe and effective dialysis sessions.
              </p>
              <h2>Hypertension and Kidney Health</h2>
              <p>
                Hypertension is a major cause of kidney disease. Our nephrology team works closely with patients to manage high blood pressure, offering lifestyle guidance and medical intervention to prevent kidney complications.
              </p>
              <blockquote
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <p>
                  “At Paramount Hospital, we prioritize kidney health, offering world-class nephrology care to help our patients live healthier, fuller lives.”
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
          title="Protect Your Kidney Health Today!"
          subTitle="Consult with our nephrology specialists for expert renal care and treatment."
        />
      </Section>
    </>
  );
}

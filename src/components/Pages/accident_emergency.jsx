import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import AppointmentSectionStyle2 from "../Section/AppointmentSection";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import img from "../../assets/neurosurgery.jpg";


export default function Accident_and_Emergency() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Accident-Emergency-Care"
          subTitle="Paramount Hospital, our Department of Accident and Emergency Care is your unwavering ally in the face of medical emergencies, ranging from critical life-threatening crises to everyday mishaps like cuts and fractures. We believe that every emergency deserves the same level of care and attention, and our dedicated team is committed to providing just that. "
          imgUrl="/images/departments/emergency.webp"
        />
      </Section>



      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h1>
                Comprehensive 24/7 Care <br />{" "}
              </h1>
              <p>
                Paramount Hospital&#39;s Accident and Emergency Department
                operates around the clock, 24 hours a day, 7 days a week.
                Whether it&#39;s a distressed infant, an adventurous teenager,
                or an adult in need of immediate medical attention, our team is
                prepared to handle all kinds of medical emergencies promptly and
                efficiently. Learn more about our{" "}
                <a href="/departments/accident-emergency-care">
                  Critical Care Unit
                </a>
                .
              </p>
              <br /> <br />
              <h2>Unmatched Expertise </h2>
              <p>
                Our highly skilled and compassionate medical professionals are
                well-versed in addressing a wide spectrum of emergencies. From
                life-threatening situations like{" "}
                <a href="/departments/cardiology">heart attacks</a> and{" "}
                <a href="/departments/neurology">strokes</a> to more routine
                injuries, our team approaches every case with the same level of
                expertise and dedication.
              </p>
              <h2>Care for All Ages </h2>
              <p>
                Paramount Hospital takes pride in offering specialized care for
                patients of all ages, from infants to children, adolescents, and
                adults. Learn about our{" "}
                <a href="/departments/paediatrics-neonatal-surgery">
                  Pediatric Services
                </a>
                .
              </p>
              <h2> Emergency Care at Its Best </h2>
              <p>
                Our Accident and Emergency Department is equipped with
                state-of-the-art facilities, advanced medical technology, and a
                patient-centered approach. We provide rapid assessment and
                triage to prioritize cases based on their severity, ensuring
                that critical cases receive immediate attention. Visit our{" "}
                <a href="/about">Facilities Page</a> for more details.
              </p>
              <blockquote
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <p>
                  “Paramount Hospital stands out with a stellar medical team,
                  renowned for extraordinary skills and impactful contributions,
                  shaping the forefront of healthcare excellence in Siliguri.
                  Learn more about our <a href="/doctors">medical team</a>.”
                </p>
              </blockquote>
              <h2>Patient-Centric Urology Care</h2>
              <p>
                Paramount Hospital places a strong emphasis on patient-centric
                care within its urology department. The hospital recognizes the
                sensitive nature of urological conditions and strives to provide
                a supportive, compassionate environment. Learn more about{" "}
                <a href="/departments/urology">Urology Services</a>.
              </p>
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
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        >
          {" "}
        </BannerSectionStyle4>
      </Section>
    </>
  );
}

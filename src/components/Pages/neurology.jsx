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
    imgUrl: "/images/doctors/NRHalder.webp",
    name: "Dr. N R Halder, MD,DM",
    designation: "Consultant Neurologist",
    description: "",
    social: [],
    availableUrl: "08 AM - 10 AM & 05 PM - 07 PM",

    btnText: "Booking",
    btnUrl: "/appointments",
  },
];

export default function Neurology() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Neurology "
          subTitle="The field of Neurology is dedicated to the intricate and critical study of the brain and nervous system, addressing a wide range of neurological conditions. Paramount Neurology Center is at the forefront of excellence in this field, offering comprehensive and advanced care for patients facing neurological challenges. With a commitment to precision, cutting-edge technology, and a team of highly skilled neurologists, Paramount Neurology Center has become a trusted institution for individuals seeking top-tier neurological care."
          imgUrl="/images/departments/neurology.webp"
        />
      </Section>

      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h1>
                The Core of Paramount Neurology Center <br />{" "}
              </h1>
              Paramount Hospital&apos;s Neurology Center is dedicated to addressing the complex and diverse needs of patients with neurological conditions. These conditions can range from common headaches to life-altering disorders like epilepsy and Parkinson&apos;s disease, and the center is committed to providing compassionate care at every stage of the patient&apos;s journey.
              <h2>State-of-the-Art Facilities at Paramount Hospital</h2>
              <p>
                The hospital&apos;s facilities are equipped with advanced diagnostic tools, cutting-edge imaging equipment, and innovative treatment modalities to ensure that patients have access to the latest advancements in neurological care. From electroencephalograms (EEGs) to magnetic resonance imaging (MRI) and electrodiagnostic studies, Paramount Neurology Center is well-prepared to deliver world-class care.{" "}
              </p>
              <h2>Highly Skilled Neurologist</h2>
              <p>
              The success of Paramount Neurology Center rests on its team of highly skilled neurologists. These specialists are not only experts in their field but also possess a deep understanding of the intricate structures and functions of the brain and nervous system. Their expertise spans a wide range of neurological conditions, and they are dedicated to providing precise and compassionate care.
              </p>
              <h2> Patient-Centric Care</h2>
              <p>
              Paramount Neurology Center places a strong emphasis on patient-centric care in the field of Neurology. The center recognizes that neurological conditions can significantly impact a patient&apos;s quality of life. It strives to create a supportive and compassionate environment where patients actively participate in their care plans, and their individual concerns and goals are the top priority.
              </p>
              <blockquote
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <p>
                  “Paramount Hospital stands out with a stellar medical team,
                  renowned for extraordinary skills and impactful contributions,
                  shaping the forefront of healthcare excellence in Siliguri. ”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </Section>
  <Section           topMd        = {200} topLg           = {150} topXl = {100}>
  <TeamSectionStyle3 sectionTitle = "Related Doctor" data = {doctorData} />
      </Section>

      {/* Start Appointment Section */}
      <Section
        topMd    = {190}
        topLg    = {145}
        topXl    = {105}
        bottomMd = {190}
        bottomLg = {145}
        bottomXl = {110}
        id       = "appointment"
        style    = {{
          backgroundColor: "white",
        }}
      >
        <AppointmentSectionStyle2
          bgUrl        = "/images/home_2/Testi-bg.webp"
          sectionTitle = "Book an Appointment"
        />
      </Section>
      {/* End Appointment Section */}
       <Section className = "cs_footer_margin_0">
              <BannerSectionStyle4
                bgUrl    = "/images/departments/banner_img.webp"
                title    = "Don’t Let Your Health <br />Take a Backseat!"
                subTitle = "Schedule an appointment with one of our experienced <br />medical professionals today!"
              > </BannerSectionStyle4>

            </Section>
    </>
  );
}

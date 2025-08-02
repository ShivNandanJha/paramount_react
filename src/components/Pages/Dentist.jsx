import BannerSectionStyle7 from "../Section/BannerSection/BannerSectionStyle7";
import Section from "../Section";
import AppointmentSectionStyle2 from "../Section/AppointmentSection";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import TeamSectionStyle3 from "../Section/TeamSection/TeamSectionStyle3";
import { pageTitle } from "../../helpers/PageTitle";
import img from "../../assets/neurosurgery.jpg";


const doctorData = [
  {
    imgUrl: "/images/doctors/MukeshChhetri.webp",
    name: "Dr. Mukesh Chhetri, BDS",
    designation: "Consultant Oral & Maxillofacial Surgeon & Dentist",
    description: "",
    social: [],
    availableUrl: "09 AM - 08 PM ",

    btnText: "Booking",
    btnUrl: "/appointment",
  },
];

export default function Dentist() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Oral & Maxillofacial Surgery & Dentistry"
          subTitle="Oral and Maxillofacial Surgery is a specialized branch of medicine that deals with the diagnosis and surgical treatment of conditions affecting the mouth, jaw, and face. Paramount Hospital stands as a beacon of excellence in Oral and Maxillofacial Surgery, offering hope and transformation to patients seeking to regain their oral health, facial aesthetics, and overall well-being. With a commitment to precision, state-of-the-art technology, and a team of highly skilled surgeons, Paramount Hospital is a trusted institution for individuals facing complex oral and maxillofacial conditions.  "
          imgUrl="/images/departments/dentist.webp"
        />
      </Section>

      {/* <Section topMd={170} topLg={145} topXl={90}>
        <FeaturesSectionStyle3
          sectionTitle="Treatments"
          sectionTitleUp="MORE TYPE OF"
          data={featureData}
        />
      </Section> */}

      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h1>
                The Core of Paramount hospital&apos;s Oral and Maxillofacial
                Surgery Department
              </h1>
              Paramount hospital&apos;s Oral and Maxillofacial Surgery
              department is dedicated to addressing the unique and often complex
              needs of patients facing conditions that impact their oral and
              facial regions. These conditions can vary from dental issues and
              facial trauma to more severe conditions like oral cancer, and the
              hospital is committed to providing compassionate care at every
              stage of the treatment journey.
              <br /> <br />
              <h2>State-of-the-Art Facilities at Paramount Hospital</h2>
              <p>
                The hospital&apos;s Oral and Maxillofacial Surgery department is
                known for its state-of-the-art facilities. Equipped with
                advanced diagnostic tools, cutting-edge surgical equipment, and
                innovative techniques, Paramount Hospital ensures that patients
                have access to the latest advancements in oral and maxillofacial
                care. From dental implant procedures to jaw reconstruction
                surgeries, the hospital offers world-class treatment.
              </p>
              <h2> Highly Skilled Surgeons and Dentist</h2>
              <p>
                The success of Paramount hospital&apos;s Oral and Maxillofacial
                Surgery department hinges on its team of highly skilled oral and
                maxillofacial surgeons. These specialists are not only experts
                in their field but also possess a deep understanding of the
                sensitive nature of oral and facial conditions. Their expertise
                spans a wide range of services, and their commitment to patient
                care is unwavering.
              </p>
              <h2> Patient-Centric Care</h2>
              <p>
                Paramount Hospital places a strong emphasis on patient-centric
                care in the field of Oral and Maxillofacial Surgery. The
                hospital understands that oral and facial conditions can
                significantly impact a patient&apos;s quality of life and
                self-esteem. It strives to create a supportive and compassionate
                environment where patients actively participate in their care
                plans, and their individual concerns and goals are the top
                priority.
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
              <h2>Advanced Imaging and Diagnostics</h2>
              <p>
                Paramount Dental Center is equipped with advanced imaging
                technologies such as digital X-rays, intraoral cameras, and 3D
                imaging, which enable precise diagnosis and treatment planning.
                These technologies are particularly valuable in endodontics for
                identifying root canal complexities.
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
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle7
          imgUrl="/images/departments/banner_img_3.webp"
          bgUrl="/images/departments/banner_bg_3.svg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}

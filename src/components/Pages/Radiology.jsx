import DepartmentSectionStyle4 from "../Section/DepartmentSection/DepartmentSectionStyle4";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import AppointmentSectionStyle2 from "../Section/AppointmentSection";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import TeamSectionStyle3 from "../Section/TeamSection/TeamSectionStyle3";
import { pageTitle } from "../../helpers/PageTitle";
import img from "../../assets/neurosurgery.jpg";

const departmentData = [
  {
    title: "Gastrointestinal & Hepatology",
    iconUrl: "/images/home_2/Stomach.webp",
    href: "/departments/department-details",
  },
  {
    title: "Neurosurgery & Neurology",
    iconUrl: "/images/home_2/Brain.webp",
    href: "/departments/department-details",
  },
  {
    title: "Orthopaedic & Joint Replacement Surgery",
    iconUrl: "/images/home_2/Knee.webp",
    href: "/departments/department-details",
  },
  {
    title: "Cardiology",
    iconUrl: "/images/home_2/Heart.webp",
    href: "/departments/department-details",
  },
  {
    title: "Spine Surgery",
    iconUrl: "/images/home_2/Spine.webp",
    href: "/departments/department-details",
  },
  {
    title: "Nephrology",
    iconUrl: "/images/home_2/Kidney.webp",
    href: "/departments/department-details",
  },
  {
    title: "Obstetrics & Gynaecology",
    iconUrl: "/images/home_2/gynae.webp",
    href: "/departments/department-details",
  },
  {
    title: "Pulmonology",
    iconUrl: "/images/home_2/Lungs.png",
    href: "/departments/department-details",
  },
  {
    title: "Urology",
    iconUrl: "/images/home_2/Bladder.png",
    href: "/departments/department-details",
  },
];

const doctorData = [
  {
    imgUrl: "/images/doctors/MukeshChhetri.webp",
    name: "Dr. Mukesh Chhetri, BDS",
    designation: "Consultant Oral & Maxillofacial Surgeon & Dentist",
    description: "",
    social: [],
    availableUrl: "09 AM - 08 PM ",

    btnText: "Booking",
    btnUrl: "/appointments",
  },
];

export default function Radiology() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Radiology"
          subTitle="In the realm of modern medicine, diagnostic imaging plays a pivotal role in the accurate detection, assessment, and treatment of various medical conditions. Paramount Radiology Center stands as a beacon of excellence in diagnostic imaging, offering a wide spectrum of state-of-the-art imaging services to facilitate precise diagnoses and guide patient care. With a commitment to cutting-edge technology, highly skilled radiologists, and a patient-centered approach, Paramount Radiology Center has become a trusted institution for individuals and healthcare providers seeking top-tier diagnostic imaging services. "
          imgUrl="/images/departments/radiology.jpg"
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
              <h1>The Core of Paramount hospital&apos;s Radiology Center</h1>
              Paramount Radiology Center is dedicated to addressing the unique
              and critical needs of patients and healthcare providers by
              delivering accurate, timely, and comprehensive diagnostic imaging
              services. The center serves as a crucial link in the diagnostic
              process, providing healthcare professionals with the insights they
              need to make informed decisions about patient care.
              <br /> <br />
              <h2>State-of-the-Art Facilities at Paramount Hospital</h2>
              <p>
                The center&apos;s facilities are equipped with advanced
                diagnostic tools, cutting-edge imaging equipment, and innovative
                techniques to ensure that patients receive the latest
                advancements in diagnostic imaging. From X-rays and CT scans to
                MRI and ultrasound, Paramount Radiology Center&apos;s commitment
                to technological innovation is evident in every aspect of its
                services.
              </p>
              <h2> Highly Skilled Radiologists</h2>
              <p>
                The success of Paramount Radiology Center rests on its team of
                highly skilled radiologists and imaging specialists. These
                professionals are not only experts in their field but also have
                a deep understanding of the importance of accurate and timely
                diagnoses. Their expertise spans a wide range of diagnostic
                modalities, and they are dedicated to providing precise and
                compassionate care.
              </p>
              <h2> Patient-Centric Care</h2>
              <p>
                Paramount Radiology Center places a strong emphasis on
                patient-centric care in the field of diagnostic imaging. The
                center understands that undergoing diagnostic procedures can be
                an anxiety-inducing experience for many patients. It strives to
                create a supportive and compassionate environment where patients
                are actively involved in their diagnostic process, and their
                individual concerns and comfort are the top priority.
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
              <h2>Cardiovascular Imaging</h2>
              <p>
                The center offers advanced cardiovascular imaging services, such
                as cardiac CT and MRI, to diagnose and monitor heart conditions,
                ensuring a comprehensive approach to healthcare.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section topMd={200} topLg={150} topXl={100}>
        <TeamSectionStyle3 sectionTitle="Related Doctor" data={doctorData} />
      </Section>

      <Section
        bottomMd={125}
        bottomLg={125}
        bottomXl={85}
        style={{
          backgroundColor: "white",
        }}
      >
        <DepartmentSectionStyle4
          sectionTitle="For Your Health"
          sectionTitleUp="More Services"
          data={departmentData}
        />
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

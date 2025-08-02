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
    imgUrl: "/images/doctors/PlasticSurgeryDoctor.webp",
    name: "Dr. John Doe, MD",
    designation: "Consultant Plastic & Reconstructive Surgeon",
    description: "",
    social: [],
    availableUrl: "09 AM - 11 AM & 04 PM - 06 PM",
    btnText: "Booking",
    btnUrl: "/appointment",
  },
];

export default function PlasticReconstructiveSurgery() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Plastic & Reconstructive Surgery"
          subTitle="The Plastic & Reconstructive Surgery department at Paramount Hospital specializes in aesthetic and reconstructive procedures to enhance function and appearance. Our expert surgeons offer state-of-the-art techniques for trauma, congenital anomalies, burns, and cosmetic enhancements, ensuring patients receive world-class care with precision and compassion."
          imgUrl="/images/departments/plastic_surgery.webp"
        />
      </Section>

      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h1>
                Excellence in Plastic & Reconstructive Surgery <br />{" "}
              </h1>
              <p>
                Our Plastic & Reconstructive Surgery department is dedicated to restoring appearance and function for patients who have experienced trauma, birth defects, or other medical conditions that affect their physical features.
              </p>
              <h2>Advanced Reconstructive Procedures</h2>
              <p>
                From post-traumatic reconstruction to microsurgery, our team is equipped with cutting-edge technology to deliver optimal results for patients requiring complex reconstructive procedures.
              </p>
              <h2>Cosmetic Enhancements</h2>
              <p>
                We provide a variety of aesthetic treatments, including rhinoplasty, facelifts, breast augmentation, and body contouring, tailored to meet individual goals and enhance natural beauty.
              </p>
              <h2>Burn & Scar Management</h2>
              <p>
                Our specialists employ the latest treatments in burn care and scar revision techniques, helping patients recover with improved function and minimized scarring.
              </p>
              <blockquote
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <p>
                  “Paramount Hospital’s Plastic & Reconstructive Surgery department is dedicated to enhancing both aesthetics and function, ensuring every patient regains confidence and quality of life.”
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
          title="Enhance & Restore with Expert Care!"
          subTitle="Schedule a consultation with our leading plastic and reconstructive surgeons today!"
        />
      </Section>
    </>
  );
}

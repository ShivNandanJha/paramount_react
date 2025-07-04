import BannerSectionStyle7 from "../Section/BannerSection/BannerSectionStyle7";
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
    title: "Obstetrics and Gynaecology",
    subTitle:
      "Our Obstetrics and Gynaecology department offers comprehensive care for women’s health, including prenatal care, childbirth, and management of gynecological conditions. Our expert team provides personalized care to support women through all stages of life.",
    iconUrl: "/images/departments/icon_9.svg",
  },
  {
    title: "Prenatal and Maternity Care",
    subTitle:
      "We provide expert prenatal and maternity care, ensuring the health and well-being of both mother and baby throughout pregnancy and delivery. Our services include routine check-ups, labor and delivery support, and postpartum care.",
    iconUrl: "/images/departments/icon_10.svg",
  },
  {
    title: "Gynecological Surgery",
    subTitle:
      "Our department offers a range of gynecological surgeries for conditions such as fibroids, endometriosis, and ovarian cysts. We use minimally invasive techniques whenever possible to reduce recovery times and improve patient outcomes.",
    iconUrl: "/images/departments/icon_11.svg",
  },
  {
    title: "Menopause Management",
    subTitle:
      "We provide specialized care for women experiencing menopause, including hormone replacement therapy and lifestyle counseling. Our goal is to manage symptoms effectively and support overall health during this transition.",
    iconUrl: "/images/departments/icon_12.svg",
  },
];

const doctorData = [
  {
    imgUrl: "/images/doctors/TanyaSingla.png",
    name: "Dr. Tanya Singla, MS",
    designation: "Consultant Obstetrician & Gynaecologist",
    description: "",
    social: [],
    availableUrl: "10 AM - 08 PM ",

    btnText: "Booking",
    btnUrl: "/appointments",
  },
  {
    imgUrl: "/images/doctors/RanjanPal.webp",
    name: "Dr.Ranjan Pal, MD",
    designation: "Consultant Gynaecologist",
    description: "",
    social: [],
    availableUrl: "Appointment Only",

    btnText: "Booking",
    btnUrl: "/appointments",
  },
];

export default function Gynaecology() {
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Obstetrics and Gynaecology"
          subTitle="The journey of motherhood and women's reproductive health is a profound and life-altering experience. Paramount Hospital stands as a beacon of excellence in Obstetrics and Gynaecology, offering comprehensive care to women at every stage of their reproductive lives. With a commitment to compassion, state-of-the-art technology, and a team of highly skilled obstetricians and gynaecologists, Paramount Hospital has emerged as a trusted institution for women seeking top-tier care in these crucial healthcare areas. Light Shape Obstetrics & Gynaecology "
          imgUrl="/images/departments/gynae.webp"
        />
      </Section>

      <Section topMd={170} topLg={145} topXl={90}>
        <FeaturesSectionStyle3
          sectionTitle="Treatments"
          sectionTitleUp="MORE TYPE OF"
          data={featureData}
        />
      </Section>

      <Section topMd={200} topLg={150} topXl={100}>
        <div className="row cs_dept_blog">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h1>
                State-of-the-Art Obstetrics and Gynaecology Facilities <br />{" "}
              </h1>
              Paramount Hospital&apos;s Obstetrics and Gynaecology department is
              dedicated to the unique needs of women, from adolescence to
              pregnancy, childbirth, and menopause. These moments in a
              woman&apos;s life are deeply significant, and the hospital is
              committed to providing unwavering support and the highest standard
              of care.
              <h2>State-of-the-Art Facilities at Paramount Hospital</h2>
              <p>
                The hospital&apos;s Obstetrics and Gynaecology department is
                distinguished by its state-of-the-art facilities. Equipped with
                advanced diagnostic tools, cutting-edge surgical equipment, and
                innovative techniques, the hospital ensures that women receive
                the latest advancements in obstetric and gynaecological care.
                From prenatal care to minimally invasive surgeries, the hospital
                is well-prepared to provide world-class treatment.{" "}
              </p>
              <h2>Highly Skilled Obstetricians and Gynaecologists</h2>
              <p>
                The success of Paramount hospital&apos;s Obstetrics and
                Gynaecology department hinges on its team of highly skilled
                obstetricians and gynaecologists. These medical professionals
                are experts in their field and bring a deep understanding of the
                unique challenges and sensitivities of woman&apos;s healthcare.
                Their expertise spans a wide range of services, and they are
                committed to providing compassionate and effective care.
              </p>
              <h2> Obstetrics and Maternity Care</h2>
              <p>
                Paramount Hospital provides expert obstetric care, from prenatal
                visits to childbirth and postpartum support. The hospital&apos;s
                maternity services aim to ensure a safe and memorable childbirth
                experience. Skilled obstetricians and dedicated labor and
                delivery suites create an environment where expecting mothers
                and their families feel cared for and secure
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
              <h2>Gynaecological Wellness Programs</h2>
              <p>
                Paramount Hospital offers wellness programs tailored to the
                unique needs of women. These programs encompass preventive care,
                screenings, and educational seminars to promote woman&apos;s
                health and well-being. By empowering women with knowledge about
                their bodies and health, the hospital plays a crucial role in
                disease prevention and early detection.
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
      <Section className = "cs_footer_margin_0">
        <BannerSectionStyle7
          imgUrl   = "/images/departments/banner_img_3.webp"
          bgUrl    = "/images/departments/banner_bg_3.svg"
          title    = "Don’t Let Your Health <br />Take a Backseat!"
          subTitle = "Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}

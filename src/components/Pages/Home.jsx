import HeroStyle2 from "../Hero/index";
import Section from "../Section";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import AboutSectionStyle3 from "../Section/AboutSection/AboutSectionStyle3";
import DepartmentSectionStyle4 from "../Section/DepartmentSection/DepartmentSectionStyle4";
import TestimonialSectionStyle2 from "../Section/TestimonialSection";
import WorkingProcess from "../Section/WorkingProcess";
import BlogSectionStyle3 from "../Section/BlogSection/BlogSectionStyle3";
import FaqSectionStyle2 from "../Section/FaqSection";
import AppointmentSectionStyle2 from "../Section/AppointmentSection";
import video from "./herobanner.mp4";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";

const departmentData1 = [
  {
    title: "Trauma & Emergency Care",
    subTitle: "24/7 emergency response and trauma management for critical injuries and accidents.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Neuro-Cardio Cathlab",
    subTitle: "Advanced diagnostics and interventional procedures for neurological and cardiac conditions.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Diagnostic Testing",
    subTitle: "Blood work, imaging (X-rays, MRIs), and other tests to identify health conditions accurately.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Rehabilitation Services",
    subTitle: "Physical and occupational therapy to help patients recover after injury or surgery.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Preventive Care",
    subTitle: "Routine check-ups, immunizations, and health screenings to maintain overall well-being.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Acute & Chronic Condition Treatment",
    subTitle: "Disease management, medication, and long-term care for ongoing or sudden illnesses.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },

];
const departmentData = [
  {
    title: "Gastrointestinal & Hepatology",
    iconUrl: "/images/home_2/Stomach.webp",
    href: "/departments/gastroenterology",
  },
  {
    title: "Neurosurgery & Neurology",
    iconUrl: "/images/home_2/Brain.webp",
    href: "/departments/neurology",
  },
  {
    title: "Orthopaedic & Joint Replacement Surgery",
    iconUrl: "/images/home_2/Knee.webp",
    href: "/departments/orthopaedic-joint-replacement-surgery",
  },
  {
    title: "Cardiology",
    iconUrl: "/images/home_2/Heart.webp",
    href: "/departments/cardiology",
  },
  {
    title: "Spine Surgery",
    iconUrl: "/images/home_2/Spine.webp",
    href: "/departments/spine-surgery",
  },
  {
    title: "Nephrology",
    iconUrl: "/images/home_2/Kidney.webp",
    href: "/departments/nephrology",
  },
  {
    title: "Obstetrics & Gynaecology",
    iconUrl: "/images/home_2/gynae.webp",
    href: "/departments/obstetrics-gynecology",
  },
  {
    title: "Pulmonology",
    iconUrl: "/images/home_2/Lungs.webp",
    href: "/departments/pulmonology",
  },
  {
    title: "Urology",
    iconUrl: "/images/home_2/Bladder.webp",
    href: "/departments/urology",
  },
];
const testimonialData = [
  {
    text: "Paramount Hospital in Siliguri provides exceptional care. During my emergency, I was met with professionalism and empathy. The staff explained every step clearly, and the clean facility created a comforting atmosphere. I felt completely safe throughout. They set a high standard for healthcare, and I highly recommend them",
    ratingNumber: "5",
    avatarImgUrl: "/images/home_2/user.png",
    avatarName: "Kishan Paswan",
    avatarDesignation: "Siliguri,West Bengal",
  },
   {
    text: "My wife was admitted in this hospital for C-section. The entire hospital staffs, nurses and everyone was very cooperative and understanding. The gynaecologist Dr. T Singla was very approachable, dedicated and outstanding as well as the paediatrician Dr. R. Agarwal was also very polite and cleared all our doubts regarding our newborn baby. Overall, the hospital is highly recommended.",
    ratingNumber: "5",
    avatarImgUrl: "/images/home_2/user.png",
    avatarName: "Rajen Gurung",
    avatarDesignation: "Siliguri,West Bengal",
  },
  {
    text: "I am delighted to share my experience with Paramount Hospital. They manage numerous patients systematically. Highly qualified doctors are available 24/7, ensuring excellent care. The staff’s behavior is truly commendable, making the experience comforting. Their professionalism and dedication set them apart, and I highly recommend their services.”",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/home_2/user.png",
    avatarName: "Inzamam Ul Haq",
    avatarDesignation: "Siliguri,West Bengal",
  },
  {
    text: "I truly appreciate Dr. Kundan Kumar’s expertise. His DJ stent removal felt like magic—painless and completed in just 2 minutes! Watching the procedure live was an incredible experience. His skill and efficiency reflect his vast experience. I am grateful for his outstanding treatment and highly recommend him.”",
    ratingNumber: "5",
    avatarImgUrl: "/images/home_2/user.png",
    avatarName: "D Fighter Lochan",
    avatarDesignation: "Sikkim, Gangtok",
  },
  {
    text: " I was admitted for gallbladder stone surgery at Paramount Hospital. The hospital was spotless, and Dr. Vivek Shankar was very supportive. The nursing staff made me feel at home during my difficult time. I sincerely thank everyone for their care and dedication. Wishing them continued success!”",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/home_2/user.png",
    avatarName: "Varsha Jha",
    avatarDesignation: "Siliguri, West Bengal",
  },
];
const workingProcessData = [
  {
    title: "Book Appointment",
    subTitle:
      "You can book an appointment with us by <br />calling our office, filling out an online form, or <br />using our mobile app.",
    iconUrl: "/images/home_2/wording_process_icon_1.svg",
    number: "01",
  },
  {
    title: "Visit Our Facility",
    subTitle:
      "On the day of your appointment, come to our <br />facility at the designated time. Our staff will greet <br />you and guide you through the check-in process.",
    iconUrl: "/images/home_2/wording_process_icon_2.svg",
    number: "02",
  },
  {
    title: "Meet with Our Healthcare <br />Professionals",
    subTitle:
      "You will meet with one of our healthcare <br />professionals who will conduct a thorough <br />examination and provide a diagnosis or <br />treatment plan.",
    iconUrl: "/images/home_2/wording_process_icon_3.svg",
    number: "03",
  },
  {
    title: "Follow-up Care",
    subTitle:
      "We will schedule any necessary follow-up <br />appointments, tests, or procedures to ensure <br />that you receive the best possible care.",
    iconUrl: "/images/home_2/wording_process_icon_4.svg",
    number: "04",
  },
  {
    title: "Insurance and Billing",
    subTitle:
      "We accept most major insurance plans and <br />our billing department will work with you to <br />ensure that you understand your coverage <br />and any out-of-pocket expenses.",
    iconUrl: "/images/home_2/wording_process_icon_5.svg",
    number: "05",
  },
];
// const blogData = [
//   {
//     title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
//     thumbUrl: "images/blog/blog1.webp",
//     date: "May 1, 2023",
//   },
//   {
//     title: "Healthy Eating on a Budget: Tips and Strategies",
//     thumbUrl: "images/blog/blog2.webp",
//     date: "May 4, 2023",
//   },
//   {
//     title: "The Importance of Regular Cancer Screenings and Early Detection",
//     thumbUrl: "images/blog/blog3.webp",
//     date: "May 1, 2023",
//   },
// ];
const faqData = [
  {
    title: "What specialties and medical services does Paramount Hospital in Siliguri offer?",
    content:
      "Paramount Hospital is the best multispeciality hospital in Siliguri, offering a full range of advanced medical and surgical services including cardiology, neurology, orthopedics, pediatrics, gynecology, and 24/7 emergency care. Our expert doctors provide personalized treatment using modern diagnostic technology to ensure the highest quality healthcare near you.",
  },
  {
    title: "How can I book an appointment with expert doctors at Paramount Hospital, Siliguri?",
    content:
      "You can schedule an appointment by calling our front desk at +91 9800896511 / 9800896830 or by visiting our website and using the online appointment booking system. Walk-in appointments are also available based on doctor availability.",
  },
  {
    title: "Does Paramount Hospital Siliguri provide 24/7 emergency and trauma care?",
    content:
      "Yes, Paramount Hospital is a leading hospital in Siliguri with round-the-clock emergency and trauma care services. Our experienced medical team and state-of-the-art emergency facilities ensure you receive prompt and effective treatment whenever you need a hospital near me.",
  },
  {
    title: "What insurance policies does Paramount Hospital accept in Siliguri?",
    content:
      "Paramount Hospital accepts a wide range of health insurance and mediclaim plans. We work with multiple insurance providers to offer cashless facilities and hassle-free billing, making quality healthcare accessible for all our patients looking for the best hospital in Siliguri.",
  },
  {
    title: "Why is Paramount Hospital considered the best hospital in Siliguri?",
    content:
      "TParamount Hospital stands out as the best hospital in Siliguri due to its multispeciality approach, highly qualified expert doctors, modern infrastructure, 24/7 emergency care services, and a compassionate patient-centered philosophy. We are committed to delivering world-class healthcare close to you.",
  },
];

const featureListData = [
  {
    title: "Experienced Medical Professionals",
    subTitle:
      "Our team includes experienced doctors, nurses, <br />and other healthcare professionals who are <br />dedicated to providing the best possible care to <br />our patients.",
    iconUrl: "images/icons/professional.svg",
  },
  {
    title: "Comprehensive <br />Services",
    subTitle:
      "We offer a wide range of healthcare services, <br />from preventive care to specialized treatment <br />for complex conditions.",
    iconUrl: "images/icons/comprehensive.svg",
  },
  {
    title: "Patient-centered <br />Approach",
    subTitle:
      "We believe in treating each patient as an <br />individual, and we take the time to understand <br />your unique health needs and concerns.",
    iconUrl: "images/icons/patient.svg",
  },
  {
    title: "State-of-the-art <br />Facilities",
    subTitle:
      "Our healthcare center is equipped with the <br />latest technology and equipment to provide our <br />patients with the most advanced care possible.",
    iconUrl: "images/icons/facilities.svg",
  },
];
export default function HomeStyle2() {
  pageTitle("Homepage");
  return (
    <>
      <div
        className="cs_hero cs_style_2 cs_bg_filed"
        style={{
          position: "relative", // Ensure that child elements are positioned relative to this parent
          width: "100%",
          height: "120vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black", // Optional: Set a fallback background color
          zIndex: -11, // Ensure this has a lower z-index than the overlapping section
        }}
      >
        {/* Background Video */}
        <video
          src={video}
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw", // Full viewport width
            height: "100vh", // Full viewport height
            objectFit: "cover", // Cover the container
            zIndex: -1, // Ensure the video is behind other content
          }}
        />

        <style>{`
    @media (max-width: 768px) {
      video {
        object-fit: contain; // Prevent cropping by containing the video inside the viewport
      }
    }

    @media (max-width: 480px) {
      video {
        object-fit: contain;
        height: auto; // Allow the video height to adjust automatically to prevent cropping
        width: 100%;  // Full width of the screen
      }
    }
  `}</style>
      </div>

      {/* HeroStyle2 Section overlapping the video */}

      <HeroStyle2
        title="CBest Multispeciality Hospital in Siliguri with Expert Doctors"
        subTitle="Paramount Hospital is Siliguri&apos;s trusted destination for advanced medical and surgical care. Our expert doctors, compassionate staff, and 24/7 emergency services ensure comprehensive healthcare for you and your family, right near you.
"
        bgUrl="/images/home_2/bg.webp"
    
        btnText="Book your appointment"
        btnUrl="/appointment"
        funfactList={[
          { number: "29+", title: "Years of experience" },
          { number: "95%", title: "Patient satisfaction rating" },
          { number: "5000+", title: "Patients served annually" },
          { number: "20+", title: "Healthcare providers on staff" },
        ]}
      />

      {/* Remaining Sections */}
      <Section
        bottomMd={190}
        bottomLg={145}
        bottomXl={105}
        style={{
          backgroundColor: "white",
          backgroundSize: "100vw",
        }}
      >
        <AboutSectionStyle3
          titleUp="ABOUT US"
          title="Paramount Hospital is a team of experienced medical professionals"
          subTitle="Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms."
          imgUrl="/images/home_2/about.webp"
        />
      </Section>

      <Section
        topMd={175}
        topLg={125}
        topXl={85}
        bottomMd={100}
        bottomLg={110}
        style={{
          backgroundColor: "white",
          backgroundSize: "100vw",
        }}
      >
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl="images/about/why_choose_us.webp"
          data={featureListData}
        />
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
          sectionTitleUp="OUR DEPARTMENTS"
          data={departmentData}
        />
      </Section>
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: `url(/images/home_2/Testi-bg.webp)` }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle2
          sectionTitle="What Our Patients Say <br /> About Us"
          sectionTitleUp="TESTIMONIALS"
          data={testimonialData}
        />
      </Section>
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        style={{
          backgroundColor: "white",
        }}
      >
        <WorkingProcess
          sectionTitle="How it Works"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={workingProcessData}
        />
      </Section>
      <Section
        style={{
          backgroundColor: "white",
        }}
      >
        <BannerSectionStyle4
          bgUrl="/images/home_2/banner.JPG"

        />
      </Section>
      {/* <Section
        topMd={190}
        topLg={145}
        topXl={105}
        style={{
          backgroundColor: "white",
        }}
      >
        <BlogSectionStyle3
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          sectionTitleDown=""
          sectionSubTitle=""
          data={blogData}
        />
      </Section> */}
      {/* Start FAQ Section */}

      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        style={{
          position: "relative",
          backgroundColor: "white",
          backgroundImage: `
          linear-gradient(to right, #f0f0f0 1px, transparent 1px),
          linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
        `,
          backgroundSize: "6rem 4rem",
        }}
      >
        <FaqSectionStyle2
          style={{
            position: "absolute",

            backgroundImage:
              "radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)",
          }}
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}
      <Section
        style={{
          backgroundColor: "white",
        }}
      >
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/Testi-bg.webp"
          sectionTitle="Book an Appointment"
        />
      </Section>
      {/* <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSectionStyle2 data={brandData} />
      </Section> */}
    </>
  );
}

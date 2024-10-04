
import BannerSectionStyle7 from '../Section/BannerSection/BannerSectionStyle7';
import Section from '../Section';
import AppointmentSection from '../Section/AppointmentSection';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import AboutSectionStyle2 from '../Section/AboutSection/AboutSectionStyle2';
import FeaturesSectionStyle3 from '../Section/FeaturesSection/FeaturesSectionStyle5';
import TeamSectionStyle3 from '../Section/TeamSection/TeamSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';
import img from '../../assets/neurosurgery.jpg'

const featureData = [
    {
        title: 'Urology',
        subTitle:
            'Our Urology department specializes in the diagnosis and treatment of conditions related to the urinary tract and male reproductive system. From managing kidney stones to addressing prostate issues, our skilled urologists use advanced techniques to provide comprehensive care.',
        iconUrl: '/images/departments/icon_9.svg',
    },
    {
        title: 'Kidney Stone Treatment',
        subTitle:
            'We offer a range of treatments for kidney stones, including non-invasive methods like shock wave lithotripsy and minimally invasive procedures. Our goal is to relieve pain and prevent recurrence while ensuring optimal kidney function.',
        iconUrl: '/images/departments/icon_10.svg',
    },
    {
        title: 'Prostate Health',
        subTitle:
            'Our team provides expert care for prostate conditions, including benign prostatic hyperplasia (BPH) and prostate cancer. We offer both medical and surgical treatments tailored to each patient’s needs, focusing on improving quality of life and managing symptoms effectively.',
        iconUrl: '/images/departments/icon_11.svg',
    },
    {
        title: 'Bladder Disorders',
        subTitle:
            'We specialize in diagnosing and treating various bladder disorders, including urinary incontinence and interstitial cystitis. Our approach combines medical management, behavioral therapy, and, when necessary, surgical options to address and manage bladder health issues.',
        iconUrl: '/images/departments/icon_12.svg',
    },
];



const doctorData = [
    {
        imgUrl: '/images/doctors/KundanKumar.png',
        name: 'Dr. Kundan Kumar, MS, MCh',
        designation: 'Consultant Urologist',
        description: "",
        social: [],
        availableUrl: '09 AM - 08 PM ',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },


];

export default function InternalMedicine() {
    pageTitle('Department Details');
    return (
        <>
            <BreadcrumbStyle2 />
            <Section topMd={135} topLg={100} topXl={100}>
                <AboutSectionStyle2
                    title="Accident-Emergency-Care"
                    subTitle="Paramount Hospital, our Department of Accident and Emergency Care is your unwavering ally in the face of medical emergencies, ranging from critical life-threatening crises to everyday mishaps like cuts and fractures. We believe that every emergency deserves the same level of care and attention, and our dedicated team is committed to providing just that. "
                    imgUrl="/images/departments/intensive_care_unit.jpg"
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
                <div className="row cs_dept_blog" >
                    <div className="col-lg-8">
                        <div className="cs_blog_details">
                            <h1>Comprehensive 24/7 Care <br />  </h1>
                            Paramount Hospital&#39;s Accident and Emergency Department operates around the clock, 24 hours a day, 7 days a week. Whether it&#39;s a distressed infant, an adventurous teenager, or an adult in need of immediate medical attention, our team is prepared to handle all kinds of medical emergencies promptly and efficiently.
                            <br /> <br />
                            <h2>Unmatched Expertise </h2>
                            <p>
                            Our highly skilled and compassionate medical professionals are well-versed in addressing a wide spectrum of emergencies. From life-threatening situations like heart attacks and strokes to more routine injuries, our team approaches every case with the same level of expertise and dedication.
                            </p>
                            <h2>Care for All Ages </h2>
                            <p>
                            Paramount Hospital takes pride in offering specialized care for patients of all ages, from infants to children, adolescents, and adults. We understand that the needs of each age group can vary significantly, and our healthcare providers are trained to deliver age-appropriate care with the utmost compassion
                            </p>
                            <h2> Emergency Care at Its Best </h2>
                            <p>
                               Our Accident and Emergency Department is equipped with state-of-the-art facilities, advanced medical technology, and a patient-centered approach. We provide rapid assessment and triage to prioritize cases based on their severity, ensuring that critical cases receive immediate attention.
                            </p>
                            <blockquote
                                style={{
                                    backgroundImage: `url(${img})`
                                }}
                            >
                                <p>
                                    “Paramount Hospital stands out with a stellar medical team, renowned for extraordinary skills and impactful contributions, shaping the forefront of healthcare excellence in Siliguri. ”
                                </p>
                            </blockquote>
                            <h2>
                                Patient-Centric Urology Care
                            </h2>
                            <p>
                                Paramount Hospital places a strong emphasis on patient-centric care within its urology department. The hospital recognizes the sensitive nature of urological conditions and strives to provide a supportive, compassionate environment. Clear communication, education, and patient involvement in treatment decisions are integral to the care process.
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
                topMd={190}
                topLg={145}
                topXl={105}
                bottomMd={190}
                bottomLg={145}
                bottomXl={110}
                id="appointment"
            >
                <AppointmentSection
                    sectionTitle="Appointment"
                    sectionTitleUp="BOOK AN"
                    imgUrl="/images/departments/appointment.JPG"
                />
            </Section>
            {/* End Appointment Section */}
            <Section className="cs_footer_margin_0">
                <BannerSectionStyle7
                    imgUrl="/images/departments/banner_img_3.png"
                    bgUrl="/images/departments/banner_bg_3.svg"
                    title="Don’t Let Your Health <br />Take a Backseat!"
                    subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
                />
            </Section>
        </>
    );
}

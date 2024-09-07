
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
    {
        imgUrl: '/images/doctors/SurajitPaul.png',
        name: 'Dr.Surajit Paul, MS, MCh',
        designation: 'Consultant Urologist',
        description: "",
        social: [],
        availableUrl: '09 AM - 12 PM & 03 PM - 05 PM',

        btnText: 'Booking',
        btnUrl : '/appointments',
        

       
    },
    {
        imgUrl: '/images/doctors/BiswajeetDutta.png',
        name: 'Dr.Biswajit Dutta, MS, MCh',
        designation: 'Consultant Urologist',
        description: "",
        social: [],
        availableUrl: '01:30 PM - 02:30 PM',

        btnText: 'Booking',
        btnUrl : '/appointments',
        

       
    },

];

export default function Urology() {
    pageTitle('Department Details');
    return (
        <>
            <BreadcrumbStyle2 />
            <Section topMd={135} topLg={100} topXl={100}>
                <AboutSectionStyle2
                    title="Urology"
                    subTitle="Urology is a medical specialty that focuses on the diagnosis and treatment of conditions affecting the urinary tract, as well as male reproductive organs. Paramount Hospital's urology department understands the crucial nature of these conditions and is dedicated to providing comprehensive care, tailored to individual needs. "
                    imgUrl="/images/departments/urology.png"
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
                            <h1>State-of-the-Art Urological Facilities <br />                                                                                  Enhancing Lives </h1>
                            Paramount Hospital&apos;s commitment to excellence is reflected in its state-of-the-art urological facilities. Equipped with the latest advancements in diagnostic and surgical technology, the hospital ensures patients receive the highest standard of care. From minimally invasive procedures to advanced imaging techniques, Paramount Hospital is at the forefront of urological innovation.
                            <h2>Innovative Urological Procedures </h2>
                            <p>
                                Paramount Hospital is known for its innovative approach to urology. The hospital pioneers the use of minimally invasive and robotic-assisted surgical techniques, which offer patients the advantage of shorter recovery times, reduced pain, and smaller incisions. These cutting-edge approaches are particularly valuable for conditions such as prostate surgery, kidney stone removal, and bladder surgery, where precision and minimal disruption are essential.
                            </p>
                            <h2>Dedication to Urological Research</h2>
                            <p>
                                Paramount Hospital&apos;s commitment to advancing urological care extends to its dedication to research and development. The hospital actively engages in clinical trials and collaborates with leading experts in the field to push the boundaries of urology. This commitment not only ensures that patients receive the most up-to-date treatment options but also contributes to the overall advancement of urological medicine.
                            </p>
                            <h2> Highly Skilled Urologists</h2>
                            <p>
                                At the core of Paramount Hospital&apos;s success in urology is its team of highly skilled urologists. These specialists bring a wealth of experience and expertise to the table, offering a wide range of surgical and non-surgical solutions for urological conditions. Their dedication to patient well-being and personalized care is unparalleled.
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

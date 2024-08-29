
import BannerSectionStyle7 from '../Section/BannerSection/BannerSectionStyle7';
import Section from '../Section';
import AppointmentSection from '../Section/AppointmentSection';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import AboutSectionStyle2 from '../Section/AboutSection/AboutSectionStyle2';
import FeaturesSectionStyle3 from '../Section/FeaturesSection/FeaturesSectionStyle5';
import TeamSectionStyle3 from '../Section/TeamSection/TeamSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';

const featureData = [
    {
        title: 'Comprehensive Spine Care',
        subTitle:
            'The Spine Surgery Department offers comprehensive care for spinal conditions, including degenerative diseases, deformities, and injuries. Our team utilizes advanced imaging and surgical techniques to address issues and restore spinal health.',
        iconUrl: '/images/departments/icon_9.svg',
    },
    {
        title: 'Surgical Correction of Spinal Deformities',
        subTitle:
            'We perform corrective surgeries for spinal deformities such as scoliosis and kyphosis. Our approach includes personalized surgical plans and postoperative care to achieve optimal spinal alignment and function.',
        iconUrl: '/images/departments/icon_10.svg',
    },
    {
        title: 'Spinal Fusion and Disc Replacement',
        subTitle:
            'Our department provides spinal fusion and disc replacement surgeries to treat conditions such as herniated discs and spinal instability. We use state-of-the-art techniques to enhance recovery and long-term spinal health.',
        iconUrl: '/images/departments/icon_11.svg',
    },
    {
        title: 'Non-Surgical Spine Management',
        subTitle:
            'In addition to surgical options, we offer non-surgical treatments such as physical therapy, pain management, and lifestyle modifications to manage spine conditions and improve quality of life.',
        iconUrl: '/images/departments/icon_12.svg',
    },
];

const doctorData = [
    {
        imgUrl: '/images/doctors/SajalBiswas.png',
        name: 'Dr. Sajal Biswas, MS, MCh',
        designation: 'Consultant Spine Surgeon',
        description: "",
        social: [],
        availableUrl: ' 09 AM - 10 AM & 03 PM - 06 PM',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },
    {
        imgUrl: '/images/doctors/AmalBasak.png',
        name: 'Dr. Amal Basak, D.Ortho, MS',
        designation: 'Consultant Spine Surgeon',
        description: "",
        social: [],
        availableUrl: '10 AM - 03 PM ',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },
    {
        imgUrl: '/images/doctors/SoutrikMukherjee.png',
        name: 'Dr. Soutrik Mukherjee, MS',
        designation: 'Consultant Spine Surgeon',
        description: "",
        social: [],
        availableUrl: '10 AM - 08 PM',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },


];

export default function Spine() {
    pageTitle('Department Details');
    return (
        <>
            <BreadcrumbStyle2 />
            <Section topMd={135} topLg={100} topXl={100}>
                <AboutSectionStyle2
                    title="Spine Surgery"
                    subTitle="Spine surgery addresses conditions affecting the spine, including herniated discs, spinal stenosis, and fractures. The goal is to relieve pain, restore function, and improve quality of life through various procedures, ranging from minimally invasive techniques to complex reconstructive surgeries. Skilled spine surgeons use advanced technology and personalized approaches to ensure optimal outcomes and a swift recovery. At Paramount Hospital Siliguri, we specialize in cutting-edge spine surgery to treat a range of spinal conditions. Our expert surgeons use advanced techniques and state-of-the-art technology to provide effective, minimally invasive solutions. We are dedicated to delivering personalized care to enhance recovery and improve your quality of life."
                    imgUrl="/images/departments/spine.png"
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


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
        title: 'Vaccinations Department',
        subTitle:
            'he Cardiology Department provides comprehensive evaluation and management of heart conditions such as congenital heart defects, arrhythmias, and coronary artery disease. Our team uses advanced diagnostic tools to assess heart health and develop personalized treatment plans.',
        iconUrl: '/images/departments/icon_9.svg',
    },
    {
        title: 'Cardiac Stress Testing',
        subTitle:
            'Our department offers cardiac stress testing to assess how well the heart performs under physical exertion. This helps in diagnosing conditions such as coronary artery disease and evaluating the effectiveness of treatments.',
        iconUrl: '/images/departments/icon_10.svg',
    },
    {
        title: 'Interventional Cardiology',
        subTitle:
            'The Cardiology Department performs minimally invasive procedures such as angioplasty and stent placement to treat blocked arteries and other cardiovascular issues. Our expert cardiologists use state-of-the-art technology to ensure optimal patient outcomes.',
        iconUrl: '/images/departments/icon_11.svg',
    },
    {
        title: 'Heart Failure Management',
        subTitle:
            'We provide specialized care for patients with heart failure, including medication management, lifestyle counseling, and monitoring of cardiac function to improve quality of life and overall heart health.',
        iconUrl: '/images/departments/icon_12.svg',
    },
];

const doctorData = [
    {
        imgUrl: '/images/doctors/ArabindaSaha.png',
        name: 'Dr. Arabinda Saha, MD, DM',
        designation: 'Consultant Cardiologist',
        description: "",
        social: [],
        availableUrl: ' 09 AM - 10 AM & 06 PM - 07 PM',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },
    {
        imgUrl: '/images/doctors/IndranilSen.png',
        name: 'Dr. Indranil Sen, MD, DNB',
        designation: 'Consultant Cardiologist',
        description: "",
        social: [],
        availableUrl: '09 AM - 11 AM & 04 PM - 07 PM',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },
    {
        imgUrl: '/images/doctors/DeepakTomar.png',
        name: 'Dr. Deepak Tomar, MD, DM',
        designation: 'Consultant Cardiologist',
        description: "",
        social: [],
        availableUrl: '10 AM - 08 PM',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },


];

export default function Cardiology() {
    pageTitle('Department Details');
    return (
        <>
            <BreadcrumbStyle2 />
            <Section topMd={135} topLg={100} topXl={100}>
                <AboutSectionStyle2
                    title="Cardiology"
                    subTitle="Paramount Hospital Siliguri offers comprehensive cardiology services to manage and treat heart conditions. Our experienced cardiologists use advanced diagnostic tools and innovative treatments to address a range of cardiac issues, from routine check-ups to complex procedures. We are committed to providing personalized care to ensure heart health and overall well-being."
                    imgUrl="/images/departments/cardiology.png"
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

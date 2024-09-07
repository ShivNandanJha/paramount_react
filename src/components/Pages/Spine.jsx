
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
                <div className="row cs_dept_blog" >
                    <div className="col-lg-8">
                        <div className="cs_blog_details">
                            <h2>Why Choose Paramount Hospital for Spine Care?</h2>

                            <ol>
                                <li>
                                    <b>Expert Spine Specialists: </b>
                                    <br />
                                    Our team comprises highly trained neurosurgeons with extensive experience in performing complex brain and spine surgeries. They are at the forefront of neurosurgical advancements.
                                </li>
                                <li>
                                    <b>Cutting-Edge Technology:</b> <br />
                                    Paramount Hospital is equipped with state-of-the-art neurosurgical facilities, including advanced imaging, navigation systems, and robotic-assisted surgery, ensuring the highest level of precision.
                                </li>
                                <li>
                                    <b> Comprehensive Neurosurgical Services:</b>
                                    <br />
                                    We offer a wide range of spine care services, including:

                                    Non-Surgical Options: Our experts explore non-invasive treatments such as physical therapy, medication management, and injections to alleviate pain and improve spine health. <br />
                                    Minimally Invasive Spine Surgery: When surgery is necessary, we employ minimally invasive techniques, reducing recovery time and postoperative discomfort. <br />
                                    Complex Spine Surgery: Our skilled surgeons are capable of performing intricate spinal procedures for conditions like herniated discs, spinal stenosis, scoliosis, and more. <br />
                                    Spinal Fusion: For cases requiring stabilization and fusion of the spine, we use cutting-edge technology to enhance surgical outcomes. <br />
                                </li>
                                <li>
                                    <b> Patient-Centered Care: </b>
                                    <br />
                                    Our patient-focused approach means you receive personalized care tailored to your unique needs. We understand the emotional and physical challenges of neurosurgery, and we are here to support you and your family throughout the journey.
                                </li>
                                <li>
                                    <b>Rapid and Accurate Diagnosis: </b> <br />
                                    This is characterized by recurrent, unwanted thoughts
                                    (obsessions) and/or repetitive behaviors (compulsions).
                                </li>
                                <li>
                                    <b>Post-Traumatic Stress Disorder (PTSD): </b> <br />
                                    Paramount Hospital&apos;s advanced diagnostic capabilities, including MRI, CT scans, ensure timely and precise diagnoses, crucial for successful neurosurgical interventions.
                                </li>
                            </ol>
                            <h2>Spine Care with Compassion</h2>
                            <p>
                            We understand the impact that spine-related issues can have on your daily life. Paramount Hospital's Spine Care Center is dedicated to delivering compassionate care, helping you make informed decisions, and providing the support you need to achieve optimal spine health.
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
                                Choose Paramount Hospital for Your Neurosurgical Needs
                            </h2>
                            <p>
                                When you choose Paramount Hospital for neurosurgery, you are selecting a partner dedicated to your well-being, comfort, and recovery. Our commitment to excellence, advanced technology, and patient-centered care make us the ideal choice for your neurosurgical journey. Don't let neurological conditions hold you back—take the first step towards better neurological health with Paramount Hospital today.
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

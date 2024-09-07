
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
        title: 'Paediatrics and Neonatal Surgery',
        subTitle:
            'Our Paediatrics and Neonatal Surgery department offers specialized care for infants, children, and adolescents, addressing a range of conditions from congenital abnormalities to complex surgical needs. We utilize advanced techniques and compassionate care to ensure the best outcomes for our young patients.',
        iconUrl: '/images/departments/icon_9.svg',
    },
    {
        title: 'Neonatal Intensive Care Unit (NICU)',
        subTitle:
            'The NICU provides intensive care for critically ill or premature newborns, with a focus on stabilizing and nurturing fragile infants. Our team of neonatologists and neonatal nurses offer round-the-clock care and support to ensure the best possible start for these tiny patients.',
        iconUrl: '/images/departments/icon_10.svg',
    },
    {
        title: 'Pediatric Surgery',
        subTitle:
            'Our Pediatric Surgery team is skilled in performing surgical procedures for children of all ages, from minor operations to complex interventions. We use the latest technology and techniques to minimize discomfort and promote quick recovery for our young patients.',
        iconUrl: '/images/departments/icon_11.svg',
    },
    {
        title: 'Developmental and Behavioral Pediatrics',
        subTitle:
            'We offer comprehensive evaluations and interventions for children with developmental and behavioral challenges. Our approach includes diagnostic assessments, therapy options, and support for families to help children achieve their full potential.',
        iconUrl: '/images/departments/icon_12.svg',
    },
];

const doctorData = [
    {
        imgUrl: '/images/doctors/VivekSarkar.png',
        name: 'Dr. Vivek Sarkar,MS',
        designation: 'Consultant Paeditrics & Neonatal Surgeon',
        description: "",
        social: [],
        availableUrl: ' 11 AM - 05 PM & 06 PM - 08 PM',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },
    {
        imgUrl: '/images/doctors/AlokeSinha.png',
        name: 'Dr. Aloke Sinha Babu, MS, Mch',
        designation: 'Consultant Paeditrics & Neonatal Surgeon',
        description: "",
        social: [],
        availableUrl: ' 08 AM - 10 AM & 3 PM - 05 PM',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },
    {
        imgUrl: '/images/doctors/RajarshiKumar.png',
        name: 'Dr. Rajarshi Kumar , MS, MCh',
        designation: 'Consultant Paeditrics & Neonatal Surgeon',
        description: "",
        social: [],
        availableUrl: '09 AM - 11 AM & 04 PM - 07 PM',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },

    {
        imgUrl: '/images/doctors/JJameezul.png',
        name: 'Dr. J Jameezul Irfan, MS',
        designation: 'Consultant Paeditrics & Neonatal Surgeon',
        description: "",
        social: [],
        availableUrl: ' 09 AM - 10 AM & 3 PM - 06 PM',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },


];

export default function Paeditrics_Surgery() {
    pageTitle('Department Details');
    return (
        <>
            <BreadcrumbStyle2 />
            <Section topMd={135} topLg={100} topXl={100}>
                <AboutSectionStyle2
                    title="Paediatrics & Neonatal Surgery"
                    subTitle="Paramount Hospital's pediatric department is driven by a profound understanding that children are not just small adults. Pediatric surgery, especially neonatal surgery, requires a special set of skills and an environment tailored to the unique needs of young patients. At Paramount Hospital, children and neonates receive the care, attention, and specialized treatment they deserve. "
                    imgUrl="/images/departments/paediatrics.jpg"
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
                            <h2>State-of-the-Art Pediatric Facilities</h2>
                            <p>
                                Yhe hospital&apos;s pediatric and neonatal units are equipped with state-of-the-art facilities. This includes advanced diagnostic and imaging equipment, minimally invasive surgical tools, and cutting-edge technologies that aid in the diagnosis and treatment of complex pediatric conditions. Paramount Hospital ensures that the smallest patients have access to the best resources available.
                            </p>
                            <h2>Patient-Centric Pediatric Care </h2>
                            <p>

                                Beyond the technical expertise, Paramount Hospital places a strong emphasis on patient-centric care in the field of pediatrics and neonatal surgery. The hospital is dedicated to ensuring that both young patients and their parents feel comfortable, informed, and well-supported throughout their healthcare journey. Child-friendly environments, child life specialists, and clear communication are hallmarks of the pediatric care provided.
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
                                Highly Skilled Pediatric Surgeons
                            </h2>
                            <p>
                                The cornerstone of Paramount Hospital's pediatric success is its team of highly skilled pediatric surgeons. These surgeons are not only experts in their field but also have a deep understanding of the unique needs and challenges associated with treating children and neonates. Their expertise spans a wide range of pediatric surgical procedures, and their commitment to patient care is unwavering.
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

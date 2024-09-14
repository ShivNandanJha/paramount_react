
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
        title: 'Obstetrics and Gynaecology',
        subTitle:
            'Our Obstetrics and Gynaecology department offers comprehensive care for women’s health, including prenatal care, childbirth, and management of gynecological conditions. Our expert team provides personalized care to support women through all stages of life.',
        iconUrl: '/images/departments/icon_9.svg',
    },
    {
        title: 'Prenatal and Maternity Care',
        subTitle:
            'We provide expert prenatal and maternity care, ensuring the health and well-being of both mother and baby throughout pregnancy and delivery. Our services include routine check-ups, labor and delivery support, and postpartum care.',
        iconUrl: '/images/departments/icon_10.svg',
    },
    {
        title: 'Gynecological Surgery',
        subTitle:
            'Our department offers a range of gynecological surgeries for conditions such as fibroids, endometriosis, and ovarian cysts. We use minimally invasive techniques whenever possible to reduce recovery times and improve patient outcomes.',
        iconUrl: '/images/departments/icon_11.svg',
    },
    {
        title: 'Menopause Management',
        subTitle:
            'We provide specialized care for women experiencing menopause, including hormone replacement therapy and lifestyle counseling. Our goal is to manage symptoms effectively and support overall health during this transition.',
        iconUrl: '/images/departments/icon_12.svg',
    },
];



const doctorData = [
    {
        imgUrl: '/images/doctors/ParthaPratim.png',
        name: 'Dr. Partha Pratim Saha, MS',
        designation: 'Consultant Otorhinolaryngologist',
        description: "",
        social: [],
        availableUrl: '09 AM - 10:30 AM & 02 PM - 04 PM ',

        btnText: 'Booking',
        btnUrl: '/appointments',
    },
    {
        imgUrl: '/images/doctors/SandeepGhosh.png',
        name: 'Dr.Sandeep Ghosh, MD',
        designation: 'Consultant Otorhinolaryngologist',
        description: "",
        social: [],
        availableUrl: 'Appointment Only',

        btnText: 'Booking',
        btnUrl: '/appointments',

    },


];

export default function Ent() {
    pageTitle('Department Details');
    return (
        <>
            <BreadcrumbStyle2 />
            <Section topMd={135} topLg={100} topXl={100}>
                <AboutSectionStyle2
                    title    = "Otorhinolaryngology (ENT)"
                    subTitle = "The world of Otorhinolaryngology, often referred to as ENT (Ear, Nose, and Throat) medicine, encompasses a vast range of conditions that affect some of the most essential senses and functions of the human body. Paramount Hospital proudly stands at the forefront of excellence in Otorhinolaryngology, offering comprehensive care for patients dealing with ear, nose, and throat disorders. With a commitment to precision, state-of-the-art technology, and a team of highly skilled ENT specialists, Paramount Hospital has become a beacon of hope for individuals seeking top-tier care in this specialized field.  "
                    imgUrl   = "/images/departments/ent.png"
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
                         
                            Paramount hospital&apos;s ENT department is dedicated to addressing the unique needs of patients experiencing a wide spectrum of ear, nose, and throat issues. These conditions can range from common ear infections to complex head and neck cancers, and the hospital is committed to providing top-quality care throughout the journey to recovery.
                            <br /> <br />
                            <h2>State-of-the-Art Facilities at Paramount Hospital</h2>
                            <p>
                            The hospital&apos;s ENT department is distinguished by its state-of-the-art facilities. Equipped with advanced diagnostic tools, cutting-edge surgical equipment, and innovative techniques, Paramount Hospital ensures that patients have access to the latest advancements in ENT care. From hearing tests to sinus surgeries, the hospital is well-prepared to deliver world-class treatment.                  </p>
                            <h2> Highly Skilled ENT Specialists</h2>
                            <p>
                                The success of Paramount hospital&apos;s  ENT department relies on its team of highly skilled ENT specialists. These professionals are not only experts in their field but also have a deep understanding of the intricate structures and functions of the ear, nose, and throat. Their expertise spans a wide range of services, and they are dedicated to providing compassionate and effective care.
                            </p>
                            <h2> Allergy and Immunotherapy</h2>
                            <p>
                            The hospital provides comprehensive allergy testing and immunotherapy options for patients dealing with allergic rhinitis and related conditions. Managing allergies is crucial for overall ENT health, and Paramount Hospital offers tailored treatment plans.
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
                            Comprehensive Swallowing Disorder Care
                            </h2>
                            <p>Paramount hospital&apos;s ENT specialists excel in the diagnosis and management of swallowing disorders (dysphagia), ensuring that patients receive the appropriate care to improve their quality of life and prevent complications.

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

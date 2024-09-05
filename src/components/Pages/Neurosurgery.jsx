
import BannerSectionStyle7 from '../Section/BannerSection/BannerSectionStyle7';
import Section from '../Section';
import AppointmentSection from '../Section/AppointmentSection';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import AboutSectionStyle2 from '../Section/AboutSection/AboutSectionStyle2';
import FeaturesSectionStyle3 from '../Section/FeaturesSection/FeaturesSectionStyle5';
import TeamSectionStyle3 from '../Section/TeamSection/TeamSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';
import Spacing from '../Spacing';

const featureData = [
  {
    title: 'Surgical Treatment of Brain and Spinal Conditions',
    subTitle:
      'The Neurosurgery Department performs complex surgical procedures to treat conditions affecting the brain and spine, such as tumors, aneurysms, and spinal cord injuries. Our surgeons use cutting-edge technology to ensure precision and optimal outcomes.',
    iconUrl: '/images/departments/icon_9.svg',
  },
  {
    title: 'Minimally Invasive Spine Surgery',
    subTitle:
      'We offer minimally invasive spine surgery techniques to treat herniated discs, spinal stenosis, and other spinal conditions. These techniques aim to reduce recovery time and minimize surgical risks.',
    iconUrl: '/images/departments/icon_10.svg',
  },
  {
    title: 'Management of Neurotrauma',
    subTitle:
      'Our department provides emergency and follow-up care for patients with traumatic brain injuries and spinal cord injuries. We focus on stabilizing patients, managing complications, and supporting rehabilitation efforts.',
    iconUrl: '/images/departments/icon_11.svg',
  },
  {
    title: 'Functional Neurosurgery',
    subTitle:
      'We specialize in functional neurosurgery for conditions such as Parkinson’s disease and essential tremor. Procedures like deep brain stimulation are used to improve motor function and quality of life for patients with movement disorders.',
    iconUrl: '/images/departments/icon_12.svg',
  },
];

const doctorData = [
  {
    imgUrl: '/images/doctors/SajalBiswas.png',
    name: 'Dr. Sajal Biswas, MS, MCh',
    designation: 'Consultant Neurosurgeon',
    description: "",
    social: [],
    availableUrl: '02 PM - 04 PM & 06 PM - 08 PM',

    btnText: 'Booking',
    btnUrl: '/appointments',
  },
];

export default function Neurosurgery() {
  pageTitle('Department Details');
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Neurosurgery "
          subTitle="This department specializes in the care of infants, children, adolescents, and provides a range of services including preventive care, developmental screenings, and treatment of childhood illnesses and conditions."
          imgUrl="/images/departments/neurology.png"
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

        <div className = "row cs_dept_blog" >
        <div className = "col-lg-8">
        <div className = "cs_blog_details">
              <h2>What is Anxiety Disorders</h2>
              <p>
                Anxiety disorders are a type of mental health disorder
                characterized by feelings of worry, anxiety, or fear that are
                strong enough to interfere with one's daily activities. These
                feelings may be brought on by certain situations, often relating
                to stress or trauma, but can also occur without any apparent
                reason. <br />
                <br />
                There are several types of anxiety disorders, including:
              </p>
              <ol>
                <li>
                  <b>Generalized Anxiety Disorder (GAD):</b>
                  <br />
                  This is characterized by chronic anxiety, exaggerated worry,
                  and tension, even when there is little or nothing to provoke
                  it.
                </li>
                <li>
                  <b>Panic Disorder:</b> <br />
                  This involves repeated episodes of sudden feelings of intense
                  anxiety and fear or terror that reach a peak within minutes
                  (panic attacks).
                </li>
                <li>
                  <b>Phobia-related disorders:</b>
                  <br />
                  These involve an intense fear or aversion to specific
                  situations or objects that go beyond normal boundaries and may
                  lead to avoidance behavior.
                </li>
                <li>
                  <b>Social Anxiety Disorder (Social Phobia):</b>
                  <br />
                  This is a significant amount of fear, embarrassment, or
                  humiliation in social performance-based situations, leading to
                  avoidance behavior.
                </li>
                <li>
                  <b>Obsessive-Compulsive Disorder (OCD):</b> <br />
                  This is characterized by recurrent, unwanted thoughts
                  (obsessions) and/or repetitive behaviors (compulsions).
                </li>
                <li>
                  <b>Post-Traumatic Stress Disorder (PTSD):</b> <br />
                  This can develop after exposure to a terrifying event or
                  ordeal in which severe physical harm occurred or was
                  threatened.
                </li>
              </ol>
              <p>
                Symptoms of anxiety disorders can include feelings of panic,
                fear, and uneasiness, problems sleeping, cold or sweaty hands or
                feet, shortness of breath, heart palpitations, an inability to
                be still and calm, dry mouth, numbness or tingling in the hands
                or feet, nausea, muscle tension, and dizziness. <br /> <br />
                Treatment for these disorders do exist and often involve a
                combination of psychotherapy, behavioral therapy, and
                medication. Cognitive-behavioral therapy is a particularly
                effective form of therapy that helps people learn to recognize
                and change thought patterns that lead to troublesome feelings.
                Additionally, lifestyle changes, such as dietary adjustments,
                increased physical activity, and reduction of caffeine intake,
                can also help in managing the symptoms. <br />
                <br />
                Please consult a healthcare provider for an accurate diagnosis
                and treatment if you or someone you know is experiencing
                symptoms of an anxiety disorder. This is not an exhaustive list
                of anxiety disorders or their symptoms, so professional help
                should always be sought for mental health concerns.
              </p>
              <blockquote
                style={{
                  backgroundImage: 'url("/images/blog/blog_details_2.jpeg")',
                }}
              >
                <p>
                  “Treatment for these disorders do exist and often involve a
                  combination of psychotherapy, behavioral therapy, and
                  medication.”
                </p>
              </blockquote>
              <h2>
                How to Manage Anxiety Disorders: Techniques and Strategies
              </h2>
              <p>
                Anxiety disorders can be overwhelming and interfere with daily
                life, but there are ways to manage these feelings. From
                self-care strategies to professional help, below are methods to
                effectively cope with anxiety disorders.
              </p>
              <ul>
                <li>
                  <h3>1. Professional Treatment</h3>
                  If you are dealing with an anxiety disorder, seeking
                  professional help is crucial. Mental health professionals can
                  provide a diagnosis and suggest appropriate treatment options.
                  These typically include:
                </li>
                <li>
                  <h3>2. Self-Care Techniques</h3>
                  In addition to professional treatment, there are several
                  self-care strategies that you can adopt to help manage
                  anxiety: <br />
                  <br />
                  <b>Mindful meditation and relaxation techniques:</b> Deep
                  breathing exercises, progressive muscle relaxation, and
                  mindfulness meditation can reduce symptoms of anxiety by
                  promoting relaxation and reducing feelings of fear and worry.{' '}
                  <br />
                  <br />
                  <b>Healthy lifestyle:</b> Regular physical exercise, a healthy
                  diet, adequate sleep, and reducing caffeine and alcohol can
                  also help manage anxiety symptoms. <br />
                  <br />
                  <b>Maintaining a positive outlook:</b> While it may seem
                  challenging, it's beneficial to focus on positive aspects of
                  your life. Gratitude exercises or maintaining a journal to
                  record positive experiences can assist in cultivating an
                  optimistic outlook. <br />
                  <br />
                  <b>Avoiding avoidance:</b> It's common for people with anxiety
                  to avoid situations or objects that trigger their anxiety.
                  However, avoiding these triggers can reinforce the fear. Safe
                  exposure to these triggers under the guidance of a therapist
                  can help in managing and eventually reducing anxiety.
                </li>
                <li>
                  <h3>3. Utilizing Technology</h3>
                  There are numerous digital health platforms, such as
                  smartphone apps and online counseling services, that can help
                  manage anxiety disorders. These platforms can provide
                  cognitive-behavioral therapy, mindfulness training, and other
                  helpful resources.
                </li>
              </ul>
              <h2>Conclusion</h2>
              <p>
                Anxiety disorders can be daunting, but with the right
                combination of professional help and personal coping strategies,
                they can be managed effectively. It's essential to remember that
                help is available and that you're not alone in your struggle.{' '}
                <br />
                <br />
                Remember, it's crucial to reach out to a mental health
                professional if you're experiencing symptoms of an anxiety
                disorder. What works best will depend on the individual and the
                type of anxiety disorder, and it's essential to get a
                professional's guidance for effective management.
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

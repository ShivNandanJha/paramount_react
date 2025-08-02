import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import TeamSectionStyle2 from "../Section/TeamSection/TeamSectionStyle2";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
const teamData = [
  {
    imgUrl: "/images/doctors/AmalBasak.webp",
    department: "Orthopaedic & Joint Replacement Surgery",
    name: "Dr. Amal Basak, D.Ortho, MS",
    designation: " Consultant Orthopaedic & Joint Replacement Surgeon",
    description:
      "Dr. Amal Basak is a specialist in Orthopaedic and Joint Replacement Surgery & Spine Surgery. He holds the degrees of D.Ortho and MS......",

    category: "Orthopaedic & Joint Replacement Surgery",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/SoutrikMukherjee.webp",
    department: "Orthopaedic & Joint Replacement Surgery",
    name: "Dr. Soutrik Mujherjee, MS",
    designation: "Consultant Orthopaedic & Joint Replacement Surgeon",
    description:
      "Dr. Soutrik Mukherjee, a highly qualified and experienced orthopaedic surgeon specializing in joint replacement surgery. With a dedication to improving the quality of life for his patients...",

    category: "Orthopaedic & Joint Replacement Surgery",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/TanyaSingla.png",
    department: "Obstetrics & Gynaecology",
    name: "Dr. Tanya Singla, MS",
    designation: "Consultant Obstetrician & Gynaecologist",
    description: "Dr. Tanya Singla is a highly skilled and experienced obstetrician and gynaecologist, dedicated to providing comprehensive care for women's health and reproductive issues.",
    category: "Obstetrics & Gynaecology",
    href: "/appointment",

  },
  {
    imgUrl: "/images/doctors/SajalBiswas.webp",
    department: "Neurosurgery",
    name: "Dr.Sajal Biswas, MS. MCh.",
    designation: "Consultant Neurosurgeon",
    description:
      "Neurosurgeons diagnose, assess and perform surgery on disorders affecting the central nervous system (brain and spinal cord) and the peripheral nervous system which can involve any area of the body",

    category: "Neurosurgery",
    href: "/appointment",
  },


  {
    imgUrl: "/images/doctors/VivekSarkar.webp",
    department: "Laparoscopic & General Surgery",
    name: "Dr. Vivek Sarkar, MS",
    designation: " Consultant Laparoscopic and General surgeon",
    description:
      "Dr. Vivek Sarkar is a distinguished  Consultant in the field of Laparoscopic and General Surgery, holding a Master of Surgery (MS) degree. With a wealth of knowledge and experience...",

    category: "Laparoscopic & General Surgery",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/JameezulIrfan.webp",
    department: "Laparoscopic & General Surgery",
    name: "Dr. J Jameezul Irfan, MS",
    designation: "Consultant Laparoscopic and General surgeon",
    description:
      "Dr. J. Jameezul Irfan (MS) is a distinguished Consultant in Laparoscopic and General Surgery, renowned for his expertise in minimally invasive surgical techniques and comprehensive general ...",

    category: "Laparoscopic & General Surgery",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/SajalBiswas.webp",
    department: "Spine Surgery",
    name: "Dr.Sajal Biswas, MS. MCh.",
    designation: " Consultant Spine Surgeon",
    description:
      "Neurosurgeons diagnose, assess and perform surgery on disorders affecting the central nervous system (brain and spinal cord) and the peripheral nervous system which can involve any area of the body",

    category: "Spine Surgery",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/SoutrikMukherjee.webp",
    department: "Spine Surgery",
    name: "Dr. Soutrik Mujherjee, MS",
    designation: "Consultant Spine Surgeon",
    description:
      "Dr. Soutrik Mukherjee, a highly qualified and experienced orthopaedic surgeon specializing in joint replacement surgery. With a dedication to improving the quality of life for his patients...",

    category: "Spine Surgery",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/ArabindaSaha.webp",
    department: "Cardiology",
    name: "Dr. Arabinda Saha, MD, DM",
    designation: "Consultant Interventional Cardiologist",
    description:
      "Interventional cardiology is a branch of cardiology that deals specifically with the catheter based treatment of structural heart diseases. Andreas Gruentzig is considered the father of interventional cardiology after the development of angioplasty",

    category: "Cardiology",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/BarunKumar.webp",
    department: "Gastrointestinal Surgery",
    name: "Dr. Barun Kumar Singh, Ms, DrNB",
    designation: "Consultant Gastrointestinal Surgeon",
    description:
      "Gastrointestinal surgery addresses issues within the digestive tract, including the stomach, intestines, and esophagus. It treats conditions like cancer, ulcers, and obstructions, often improving digestive health and overall quality of life.",

    category: "Gastrointestinal Surgery",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/JameezulIrfan.webp",
    department: "Paediatric & Neonatal Surgery",
    name: "Dr. J Jameezul Irfan, MS",
    designation: "Consultant Paediatric & Neonatal Surgeon",
    description:
      "Dr. J. Jameezul Irfan is a highly skilled Consultant in Pediatric and Neonatal Surgery, specializing in the surgical care of infants, children, and newborns. With a focus on addressing congenital anomalies, traumas...",

    category: "Paediatric & Neonatal Surgery",
    href: "/appointment",

  },
  {
    imgUrl: "/images/doctors/VivekSarkar.webp",
    department: "Paediatric & Neonatal Surgery",
    name: "Dr. Vivek Sarkar, MS",
    designation: "Consultant Paediatric & Neonatal Surgeon",
    description:
      "Dr. Vivek Sarkar is a distinguished  Consultant in the field of Laparoscopic and General Surgery, holding a Master of Surgery (MS) degree. With a wealth of knowledge and experience...",

    category: "Paediatric & Neonatal Surgery",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/IndranilSen.webp",
    department: "Cardiology",
    name: "Dr. Indranil Sen, MD, DNB",
    designation: "Consultant Interventional Cardiologist",
    description:
      "Interventional cardiology is a branch of cardiology that deals specifically with the catheter based treatment of structural heart diseases. Andreas Gruentzig is considered the father of interventional cardiology...",

    category: "Cardiology",
    href: "/appointment",
  },

  {
    imgUrl: "/images/doctors/KundanKumar.webp",
    department: "Urology",
    name: "Dr. Kundaan Kumar, MS, MCh",
    designation: "Consultant Urologist",
    description:
      "Dr. Kundaan Kumar, an esteemed urologist with an impressive background in the field of medicine. Dr. Kumar holds a remarkable set of qualifications...",

    category: "Urology",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/MKDas.webp",
    department: "Internal Medicine",
    name: "Dr.M K Das, MD",
    designation: "Consultant General Physician",
    description:
      "Dr. MK Das is a distinguished  Consultant General Physician with extensive experience and a strong commitment to providing comprehensive healthcare to his patients.",

    category: "Internal Medicine",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/NRHalder.webp",
    department: "Neurology",
    name: "Dr. N R Halder, MD, DM",
    designation: "Consultant Neurologist",
    description:
      "Dr. N.R. Haldar is a distinguished  Consultant Neurologist renowned for his expertise and dedication to the field of neurology. With an extensive educational background and specialized...",

    category: "Neurology",
    href: "/appointment",
  },

  {
    imgUrl: "/images/doctors/PBera.webp",
    department: "Pathology & Microbiology",
    name: "Dr. P Bera, MD",
    designation: "Consultant Pathologist & Microbiologist",
    description:
      "Dr. P. Bera is a highly qualified medical professional with an MD degree in Pathology and Microbiology. As a consultant in this field, she possesses a deep understanding of the intricate aspects...",

    category: "Pathology & Microbiology",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/PrabhatRanjan.webp",
    department: "Gastroenterology & Hepatology",
    name: "Dr. Prabhat Ranjan, MD, DM",
    designation: "Consultant Gastroenterologist & Hepatologist",
    description:
      "Dr. Prabhat Ranjan (MD, DM) is a highly esteemed Consultant in Gastroenterology and Hepatology, renowned for his expertise in diagnosing and treating...",

    category: "Gastroenterology & Hepatology",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/RajivAgarwa.webp",
    department: "Paediatrics & Neonatology",
    name: "Dr. Rajiv Agarwal, MD",
    designation: "Consultant Paediatrics & Neonatologist ",
    description:
      "Dr. Rajiv Agarwal, MD, is a distinguished medical professional specializing in Pediatrics and Neonatology. With a strong educational background, Dr. Agarwal has become a trusted consultantin his field....",

    category: "Paediatrics & Neonatology",
    href: "/appointment",
  },

  {
    imgUrl: "/images/doctors/RanjanPal.webp",
    department: "Obstetrics & Gynaecology",
    name: "Dr. Ranjan Pal, MD",
    designation: "Consultant  Obstetrics & Gynaecologist",
    description:
      "Dr. Ranjan Pal is a distinguished  Consultant Gynecologist with an impressive track record of providing compassionate and comprehensive healthcare to women of all ages. With a qualification of MD and..",

    category: "Obstetrics & Gynaecology",
    href: "/appointment",
  },

  {
    imgUrl: "/images/doctors/SoumyaGhosh.webp",
    department: "Internal Medicine",
    name: "Dr. Soumya Ghosh, MD",
    designation: "Consultant General Physician",
    description:
      "Pulmonology is a medical specialty focused on the diagnosis and treatment of diseases and conditions related to the respiratory system, which includes the lungs and the respiratory tract. Pulmonologists are physicians who specialize in pulmonology...",

    category: "Internal Medicine",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/VikrantDeshmukh.webp",
    department: "Nephrology",
    name: "Dr. Vikrant Deshmukh, DNB",
    designation: "Consultant Nephrologist",
    description:
      "Dr. Vikrant Deshmukh, MD, is a distinguished Consultant Nephrologist with a wealth of medical expertise. His extensive education and training have made him a trusted authority in the ...",

    category: "Nephrology",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/SChaterjee.webp",
    department: "Anaesthesiology & Intensive Care",
    name: "Dr. S Chatterjee, MD",
    designation: "Consultant in Anaesthesiology & Intensive Care",
    description:
      "Dr. S. Chatterjee is a highly skilled and dedicated Consultant Anaesthesiologist with extensive qualifications and expertise in the field of anesthesiology. Holding a ...",

    category: "Anaesthesiology & Intensive Care",
    href: "/appointment",
  },

  {
    imgUrl: "/images/doctors/SoumyaGhosh.webp",
    department: "Pulmonology",
    name: "Dr. Soumya Ghosh, MD",
    designation: "Consultant Pulmonologist",
    description:
      "Pulmonology is a medical specialty focused on the diagnosis and treatment of diseases and conditions related to the respiratory system, which includes the lungs and the respiratory tract. Pulmonologists are physicians...",

    category: "Pulmonology",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/ParthaPratim.webp",
    department: "Otorhinolaryngology (ENT)",
    name: "Dr. Partha Pratim Saha, MS",
    designation: "Consultant Otorhinolaryngologist",
    description:
      "Dr. Partha Pratim Saha (MS) is a highly respected Consultant OtorhinolaryngologistWith a profound understanding of the intricate structures of the ear, nose, and throat, Dr. Ghosh is committed to providing top-notch medical care...",

    category: "Otorhinolaryngology (ENT)",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/AlokeSinha.webp",
    department: "Paediatric & Neonatal Surgery",
    name: "Dr. Aloke Sinha Babu, MS, MCh",
    designation: "Consultant Paediatric & Neonatal Surgeon",
    description:
      "Dr. Aloke Sinha Babu offers expert pediatric surgical services, providing specialized care for infants and children.",
    social: [],
    category: "Paediatric & Neonatal Surgery",
    href: "/appointment",
  },

  {
    imgUrl: "/images/doctors/MukeshChhetri.webp",
    department: "Oral & Maxillofacial Surgery & Dentistry",
    name: "Dr.Mukesh Chhetri, BDS",
    designation: "Consultant Oral & Maxillofacial Surgeon & Dentist",
    description:
      "Dr. Mukesh Chhteri is a leading Consultant in Oral and Maxillofacial Surgery and Dentistry, offering specialized care for conditions affecting the mouth, jaw, and face. With extensive training...",

    category: "Oral & Maxillofacial Surgery & Dentistry",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/s jaya.png",
    department: "Plastic, Cosmetic & Reconstructive Surgery",
    name: "Dr. S. Jaya Leima, MS, MCh",
    designation: "Consultant Plastic & Cosmetic Surgeon",
    description:
      "Dr. S. Jaya Leima is a reputed plastic and reconstructive surgeon with special interest in cosmetic enhancements and post-traumatic repairs.",
    social: [],
    category: "Plastic, Cosmetic & Reconstructive Surgery",
    href: "/appointment",
  },
  {
    imgUrl: "/images/doctors/KalyanMandal.webp",
    department: "Laparoscopic & General Surgery",
    name: "Dr. Kalyan Mandal, MS",
    designation: "Consultant Laparoscopic & General Surgeon",
    description:
      "Dr. Kalyan Mandal is an experienced general and laparoscopic surgeon, providing comprehensive surgical care with a patient-first approach.",
    social: [],
    category: "Laparoscopic & General Surgery",
    href: "/appointment",
  },



  // >>>>>>>>>>>>
  // {
  //   imgUrl: "/images/doctors/KalyanMandal.webp",
  //   department: "Laparoscopic & General Surgery",
  //   name: "Dr. Kalyan Mandal, MS",
  //   designation: "Consultant Laparoscopic & General Surgeon",
  //   description:
  //     "Dr. Kalyan Mandal is an experienced general and laparoscopic surgeon, providing comprehensive surgical care with a patient-first approach.",
  //   social: [],
  //   category: "Laparoscopic & General Surgery",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/AmlanJyotiRoy.webp",
  //   department: "Orthopaedic & Joint Replacement Surgery",
  //   name: "Dr. Amlan Jyoti Roy, MS",
  //   designation: "Consultant Orthopaedic Surgeon",
  //   description:
  //     "Dr. Amlan Jyoti Roy is an experienced orthopaedic surgeon specializing in fracture care, trauma, and joint problems.",
  //   social: [],
  //   category: "Orthopaedic & Joint Replacement Surgery",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/RanjitSingh.webp",
  //   department: "Orthopaedic & Joint Replacement Surgery",
  //   name: "Dr. Ranjit Singh, MS",
  //   designation: "Consultant Orthopaedic & Joint Replacement Surgeon",
  //   description:
  //     "Dr. Ranjit Singh offers extensive expertise in joint replacement and complex orthopaedic surgeries.",
  //   social: [],
  //   category: "Orthopaedic & Joint Replacement Surgery",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/AbhayAgarwal.webp",
  //   department: "Neurosurgery",
  //   name: "Dr. Abhay Kr. Agarwal, MS, DNB",
  //   designation: "Consultant Neurosurgeon & Spine Surgeon",
  //   description:
  //     "Dr. Abhay Kr. Agarwal is highly skilled in neurosurgery and spine-related procedures, with advanced training in brain and spinal cord surgery.",
  //   social: [],
  //   category: "Neurosurgery",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/RajarshiKumar.webp",
  //   department: "Paediatric & Neonatal Surgery",
  //   name: "Dr. Rajarshi Kumar, MS, MCh",
  //   designation: "Consultant Paediatric & Neonatal Surgeon",
  //   description:
  //     "Dr. Rajarshi Kumar specializes in surgical care for children and newborns, focusing on congenital anomalies and pediatric conditions.",
  //   social: [],
  //   category: "Paediatric & Neonatal Surgery",
  //   href: "/appointment",
  // },

  // {
  //   imgUrl: "/images/doctors/SJayaLeima.webp",
  //   department: "Plastic, Cosmetic & Reconstructive Surgery",
  //   name: "Dr. S. Jaya Leima, MS, MCh",
  //   designation: "Consultant Plastic & Cosmetic Surgeon",
  //   description:
  //     "Dr. S. Jaya Leima is a reputed plastic and reconstructive surgeon with special interest in cosmetic enhancements and post-traumatic repairs.",
  //   social: [],
  //   category: "Plastic, Cosmetic & Reconstructive Surgery",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/KiranSilwal.webp",
  //   department: "Plastic, Cosmetic & Reconstructive Surgery",
  //   name: "Dr. Kiran Silwal, MS, MCh",
  //   designation: "Consultant Plastic & Reconstructive Surgeon",
  //   description:
  //     "Dr. Kiran Silwal offers comprehensive care in cosmetic, burn, and reconstructive surgeries.",
  //   social: [],
  //   category: "Plastic, Cosmetic & Reconstructive Surgery",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/ManojSingh.webp",
  //   department: "Plastic, Cosmetic & Reconstructive Surgery",
  //   name: "Dr. Manoj Kr. Singh, MS, MCh",
  //   designation: "Consultant Cosmetic & Plastic Surgeon",
  //   description:
  //     "Dr. Manoj Kr. Singh is well-known for aesthetic surgeries and trauma reconstruction procedures.",
  //   social: [],
  //   category: "Plastic, Cosmetic & Reconstructive Surgery",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/BiswajitDutta.webp",
  //   department: "Urology",
  //   name: "Dr. Biswajit Dutta, MS, MCh",
  //   designation: "Consultant Urologist",
  //   description:
  //     "Dr. Biswajit Dutta is a specialist in urological care including kidney, bladder, and prostate-related conditions.",
  //   social: [],
  //   category: "Urology",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/SandeepGhosh.webp",
  //   department: "Otorhinolaryngology (ENT)",
  //   name: "Dr. Sandeep Ghosh, MS",
  //   designation: "Consultant ENT Specialist",
  //   description:
  //     "Dr. Sandeep Ghosh provides expert care in ENT disorders with a focus on surgical and non-surgical treatments.",
  //   social: [],
  //   category: "Otorhinolaryngology (ENT)",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/NilanjanaHaldar.webp",
  //   department: "Ophthalmology",
  //   name: "Dr. Nilanjana Haldar, MS",
  //   designation: "Consultant Ophthalmologist",
  //   description:
  //     "Dr. Nilanjana Haldar is dedicated to delivering advanced eye care and surgical interventions.",
  //   social: [],
  //   category: "Ophthalmology",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/AshishBichpuria.webp",
  //   department: "Ophthalmology",
  //   name: "Dr. Ashish Kr. Bichpuria, MS",
  //   designation: "Consultant Eye Surgeon",
  //   description:
  //     "Dr. Ashish Bichpuria specializes in cataract, retina, and general ophthalmologic surgeries.",
  //   social: [],
  //   category: "Ophthalmology",
  //   href: "/appointment",
  // },
  // {
  //   imgUrl: "/images/doctors/SantanuDe.webp",
  //   department: "Neuropsychiatry",
  //   name: "Dr. Santanu De, MD",
  //   designation: "Consultant Neuropsychiatrist",
  //   description:
  //     "Dr. Santanu De is an expert in treating mental health disorders linked to neurological conditions.",
  //   social: [],
  //   category: "Neuropsychiatry",
  //   href: "/appointment",
  // },
];

export default function Doctors() {
  pageTitle("Doctors");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/Testi-bg.webp"
        title="Introduce You to <br />Our Experts"
        subTitle="The list of certified doctors with years of <br />professional experiences"
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="/images/departments/banner_img.webp"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        > </BannerSectionStyle4>

      </Section>
    </>
  );
}
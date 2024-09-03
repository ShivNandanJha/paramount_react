import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import TeamSectionStyle2 from "../Section/TeamSection/TeamSectionStyle2";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
const teamData = [
  {
    imgUrl: "/images/doctors/AmalBasak.png",
    department: "Orthopaedic & Joint Replacement Surgery",
    name: "Dr. Amal Basak, D.Ortho, MS",
    designation: "Senior Consultant Orthopaedic & Joint Replacement Surgeon",
    description:
      "Dr. Amal Basak is a specialist in Orthopaedic and Joint Replacement Surgery & Spine Surgery. He holds the degrees of D.Ortho and MS......",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Orthopaedic & Joint Replacement Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SoutrikMukherjee.png",
    department: "Orthopaedic & Joint Replacement Surgery",
    name: "Dr. Soutrik Mujherjee, MS",
    designation: "Consultant Orthopaedic & Joint Replacement Surgeon",
    description:
      "Dr. Soutrik Mukherjee, a highly qualified and experienced orthopaedic surgeon specializing in joint replacement surgery. With a dedication to improving the quality of life for his patients...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Orthopaedic & Joint Replacement Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/AmalBasak.png",
    department: "Spine Surgery",
    name: "Dr. Amal Basak, D.Ortho, MS",
    designation: "Senior Consultant Spine Surgeon",
    description:
      "Dr. Amal Basak is a specialist in Orthopaedic and Joint Replacement Surgery & Spine Surgery. He holds the degrees of D.Ortho and MS......",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Spine Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SajalBiswas.png",
    department: "Neurosurgery",
    name: "Dr.Sajal Biswas, MS. MCh.",
    designation: "Senior Consultant Neurosurgeon",
    description:
      "Neurosurgeons diagnose, assess and perform surgery on disorders affecting the central nervous system (brain and spinal cord) and the peripheral nervous system which can involve any area of the body",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Neurosurgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SajalBiswas.png",
    department: "Spine Surgery",
    name: "Dr.Sajal Biswas, MS. MCh.",
    designation: "Senior Consultant Spine Surgeon",
    description:
      "Neurosurgeons diagnose, assess and perform surgery on disorders affecting the central nervous system (brain and spinal cord) and the peripheral nervous system which can involve any area of the body",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Spine Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SoutrikMukherjee.png",
    department: "Spine Surgery",
    name: "Dr. Soutrik Mujherjee, MS",
    designation: "Consultant Spine Surgeon",
    description:
      "Dr. Soutrik Mukherjee, a highly qualified and experienced orthopaedic surgeon specializing in joint replacement surgery. With a dedication to improving the quality of life for his patients...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Spine Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/VivekSarkar.png",
    department: "Laparoscopic & General Surgery",
    name: "Dr. Vivek Sarkar, MS",
    designation: "Senior Consultant Laparoscopic and General surgeon",
    description:
      "Dr. Vivek Sarkar is a distinguished Senior Consultant in the field of Laparoscopic and General Surgery, holding a Master of Surgery (MS) degree. With a wealth of knowledge and experience...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Laparoscopic & General Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/JameezulIrfan.png",
    department: "Laparoscopic & General Surgery",
    name: "Dr. J Jameezul Irfan, MS",
    designation: "Consultant Laparoscopic and General surgeon",
    description:
      "Dr. J. Jameezul Irfan (MS) is a distinguished Consultant in Laparoscopic and General Surgery, renowned for his expertise in minimally invasive surgical techniques and comprehensive general ...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Laparoscopic & General Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/ArabindaSaha.png",
    department: "Cardiology",
    name: "Dr. Arabinda Saha, MD, DM",
    designation: "Consultant Interventional Cardiologist",
    description:
      "Interventional cardiology is a branch of cardiology that deals specifically with the catheter based treatment of structural heart diseases. Andreas Gruentzig is considered the father of interventional cardiology after the development of angioplasty",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Cardiology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/BarunKumar.png",
    department: "Gastrointestinal Surgery",
    name: "Dr. Barun Kumar Singh, Ms, DrNB",
    designation: "Consultant Gastrointestinal Surgeon",
    description:
      "Gastrointestinal surgery addresses issues within the digestive tract, including the stomach, intestines, and esophagus. It treats conditions like cancer, ulcers, and obstructions, often improving digestive health and overall quality of life.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Gastrointestinal Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/AlokeSinha.png",
    department: "Paediatric & Neonatal Surgery",
    name: "Dr.Aloke Sinha Babu, MS, MCh",
    designation: "Consultant Paediatric & Neonatal Surgeon",
    description:
      "Pediatric and neonatal surgery focuses on surgical care for infants, children, and newborns. It addresses congenital anomalies, traumas, and other conditions, aiming to improve health and development in young patients.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Paediatric & Neonatal Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/JameezulIrfan.png",
    department: "Paediatric & Neonatal Surgery",
    name: "Dr. J Jameezul Irfan, MS",
    designation: "Consultant Paediatric & Neonatal Surgeon",
    description:
      "Dr. J. Jameezul Irfan is a highly skilled Consultant in Pediatric and Neonatal Surgery, specializing in the surgical care of infants, children, and newborns. With a focus on addressing congenital anomalies, traumas...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Paediatric & Neonatal Surgery",
    href: "/doctors/doctor-details",

  },
  {
    imgUrl: "/images/doctors/VivekSarkar.png",
    department: "Paediatric & Neonatal Surgery",
    name: "Dr. Vivek Sarkar, MS",
    designation: "Consultant Paediatric & Neonatal Surgeon",
    description:
      "Dr. Vivek Sarkar is a distinguished Senior Consultant in the field of Laparoscopic and General Surgery, holding a Master of Surgery (MS) degree. With a wealth of knowledge and experience...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Paediatric & Neonatal Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/IndranilSen.png",
    department: "Cardiology",
    name: "Dr. Indranil Sen, MD, DNB",
    designation: "Consultant Interventional Cardiologist",
    description:
      "Interventional cardiology is a branch of cardiology that deals specifically with the catheter based treatment of structural heart diseases. Andreas Gruentzig is considered the father of interventional cardiology...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Cardiology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/ManojKumar.png",
    department: "Plastic Cosmetic & Reconstructive Surgery",
    name: "Dr. Manoj Kumar Singh, MS, MCh",
    designation: "Consultant Plastic Cosmetic & Reconstructive Surgeon",
    description:
      "Dr. Manoj Kumar Singh possesses extensive expertise and experience in the intricate art of restoring form and function to the human body....",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Plastic Cosmetic & Reconstructive Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/KundanKumar.png",
    department: "Urology",
    name: "Dr. Kundaan Kumar, MS, MCh",
    designation: "Consultant Urologist",
    description:
      "Dr. Kundaan Kumar, an esteemed urologist with an impressive background in the field of medicine. Dr. Kumar holds a remarkable set of qualifications...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Urology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/MKDas.png",
    department: "Internal Medicine",
    name: "Dr.M K Das, MD",
    designation: "Consultant General Physician",
    description:
      "Dr. MK Das is a distinguished Senior Consultant General Physician with extensive experience and a strong commitment to providing comprehensive healthcare to his patients.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Internal Medicine",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/NRHalder.png",
    department: "Neurology",
    name: "Dr. N R Halder, MD, DM",
    designation: "Consultant Neurologist",
    description:
      "Dr. N.R. Haldar is a distinguished Senior Consultant Neurologist renowned for his expertise and dedication to the field of neurology. With an extensive educational background and specialized...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Neurology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/PenzimBhutiya.png",
    department: "Laparoscopic & General Surgery",
    name: "Dr. Penzim D Bhutiya, MS",
    designation: "Consultant Laparoscopic & General Surgeon",
    description:
      "Dr. Penzim D. Bhutia (MS) is a distinguished Consultant Orthopaedic and Joint Replacement Surgeon with extensive expertise in the field of orthopaedics. With a commitment to excellence ...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Laparoscopic & General Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/PBera.png",
    department: "Pathology & Microbiology",
    name: "Dr. P Bera, MD",
    designation: "Consultant Pathologist & Microbiologist",
    description:
      "Dr. P. Bera is a highly qualified medical professional with an MD degree in Pathology and Microbiology. As a consultant in this field, she possesses a deep understanding of the intricate aspects...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Pathology & Microbiology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/PrabhatRanjan.png",
    department: "Gastroenterology & Hepatology",
    name: "Dr. Prabhat Ranjan, MD, DM",
    designation: "Consultant Gastroenterologist & Hepatologist",
    description:
      "Dr. Prabhat Ranjan (MD, DM) is a highly esteemed Consultant in Gastroenterology and Hepatology, renowned for his expertise in diagnosing and treating...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Gastroenterology & Hepatology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/RajivAgarwa.png",
    department: "Paediatrics & Neonatology",
    name: "Dr. Rajiv Agarwal, MD",
    designation: "Consultant Paediatrics & Neonatologist ",
    description:
      "Dr. Rajiv Agarwal, MD, is a distinguished medical professional specializing in Pediatrics and Neonatology. With a strong educational background, Dr. Agarwal has become a trusted consultantin his field....",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Paediatrics & Neonatology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/PunamSarkar.png",
    department: "Obstetrics & Gynaecology",
    name: "Dr. Punam Sarkar, MS",
    designation: "Consultant  Obstetrics & Gynaecologist",
    description:
      "Dr. Punam Sarkar is a highly skilled Consultant in Obstetrics and Gynecology, offering comprehensive care for women across all stages of life. With her extensive expertise in managing..",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Obstetrics & Gynaecology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/RanjanPal.png",
    department: "Obstetrics & Gynaecology",
    name: "Dr. Ranjan Pal, MD",
    designation: "Consultant  Obstetrics & Gynaecologist",
    description:
      "Dr. Ranjan Pal is a distinguished Senior Consultant Gynecologist with an impressive track record of providing compassionate and comprehensive healthcare to women of all ages. With a qualification of MD and..",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Obstetrics & Gynaecology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SandeepGhosh.png",
    department: "Otorhinolaryngology (ENT)",
    name: "Dr. Sandeep Ghosh, MS",
    designation: "Consultant  Otorhinolaryngologist (ENT)",
    description:
      "Dr. Sandeep Ghosh, holding an MS degree, is a highly skilled consultant in Otorhinolaryngology (ENT). With a profound understanding of the intricate structures of the ear, nose, and throat, Dr. Ghosh is committed to providing top-notch medical care. ",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Otorhinolaryngology (ENT)",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SantanuHazra.png",
    department: "Pathology & Microbiology",
    name: "Dr. Santanu Hazra, MD",
    designation: "Pathologist & Microbiologist",
    description:
      "Dr. Santanu Hazra is an accomplished medical professional with an MD degree. He specializes in the fields of Pathology and Microbiology, bringing a wealth of knowledge and expertise to his practice. Dr. Hazra plays a crucial role in diagnosing and understanding various diseases ... ",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Pathology & Microbiology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SoumyaGhosh.png",
    department: "Internal Medicine",
    name: "Dr. Soumya Ghosh, MD",
    designation: "Consultant General Physician",
    description:
      "Pulmonology is a medical specialty focused on the diagnosis and treatment of diseases and conditions related to the respiratory system, which includes the lungs and the respiratory tract. Pulmonologists are physicians who specialize in pulmonology...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Internal Medicine",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/VikrantDeshmukh.png",
    department: "Nephrology",
    name: "Dr. Vikrant Deshmukh, DNB",
    designation: "Consultant Nephrologist",
    description:
      "Dr. Vikrant Deshmukh, MD, is a distinguished Consultant Nephrologist with a wealth of medical expertise. His extensive education and training have made him a trusted authority in the ...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Nephrology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SChaterjee.png",
    department: "Anaesthesiology & Intensive Care",
    name: "Dr. S Chatterjee, MD",
    designation: "Consultant in Anaesthesiology & Intensive Care",
    description:
      "Dr. S. Chatterjee is a highly skilled and dedicated Consultant Anaesthesiologist with extensive qualifications and expertise in the field of anesthesiology. Holding a ...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Anaesthesiology & Intensive Care",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/ShantanuDe.png",
    department: "Neuropsychiatry",
    name: "Dr.Shantanu De, MD",
    designation: "Consultant  Neuropsychiatrist",
    description:
      "Dr. Chen is a skilled psychiatrist with expertise in the treatment of mood disorders and psychotic disorders. She is board-certified in psychiatry and has a special interest in the management.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Neuropsychiatry",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SKKhutia.png",
    department: "Pain Medicine",
    name: "Dr.S K Khutia, MD, FIPM",
    designation: "Consultant in Pain Medicine",
    description:
      "Dr. S.K. Khutia, MD, FIPM, is a medical professional with expertise in the field of Pain Medicine. Pain Medicine is a medical specialty that focuses on the diagnosis, treatment, and management of chronic... ",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Pain Medicine",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SoumyaGayen.png",
    department: "Plastic Cosmetic & Reconstructive Surgery",
    name: "Dr. Soumya Gayen, MS, MCh",
    designation: "Consultant Plastic Cosmetic & Reconstructive Surgeon",
    description:
      "Dr. Soumya Gayen (MS, MCh) is a distinguished Consultant Plastic, Cosmetic, and Reconstructive Surgeon...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Plastic Cosmetic & Reconstructive Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/PenzimBhutiya.png",
    department: "Plastic Cosmetic & Reconstructive Surgery",
    name: "Dr. Penzim D Bhutiya, MS",
    designation: "Consultant Plastic Cosmetic & Reconstructive Surgeon",
    description:
      "Dr. Penzim D. Bhutia is a renowned Consultant Plastic, Cosmetic, and Reconstructive Surgeon, specializing in a wide range of procedures designed to enhance both aesthetic appearance ...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Plastic Cosmetic & Reconstructive Surgery",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/SoumyaGhosh.png",
    department: "Pulmonology",
    name: "Dr. Soumya Ghosh, MD",
    designation: "Consultant Pulmonologist",
    description:
      "Pulmonology is a medical specialty focused on the diagnosis and treatment of diseases and conditions related to the respiratory system, which includes the lungs and the respiratory tract. Pulmonologists are physicians...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Pulmonology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl     : "/images/doctors/SurajitPaul.png",
    department : "Urology",
    name       : "Dr. Surajit Paul, MS, MCh",
    designation: "Consultant Urologist",
    description: 
      "Dr. Suraji Paul (MS, MCh) is a highly respected Consultant Urologist with extensive expertise in diagnosing and treating a wide range of urological conditions. With advanced qualifications and a deep commitment to patient care...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Urology",
    href    : "/doctors/doctor-details",
  },  {
    imgUrl: "/images/doctors/BiswajeetDutta.png",
    department: "Urology",
    name: "Dr. Biswajit Dutta, MS, MCh",
    designation: "Consultant Urologist",
    description:
      "Dr. Biswajeet Dutta is a distinguished Consultant in Urology, specializing in the diagnosis and treatment of conditions affecting the urinary tract and male reproductive system. With a wealth of...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Urology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/ParthaPratim.png",
    department: "Otorhinolaryngology (ENT)",
    name: "Dr. partha Pratim Saha, MS",
    designation: "Consultant Otorhinolaryngologist",
    description:
      "Dr. Partha Pratim Saha (MS) is a highly respected Consultant OtorhinolaryngologistWith a profound understanding of the intricate structures of the ear, nose, and throat, Dr. Ghosh is committed to providing top-notch medical care...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Otorhinolaryngology (ENT)",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/RajarshiKumar.png",
    department: "Paediatrics & Neonatal Surgery",
    name: "Dr. Rajarshi Kumar, MS,MCh",
    designation: "Consultant Paediatrics & Neonatal Surgeon",
    description:
      "Dr. Rajarshi Kumar is a distinguished Consultant in Pediatric and Neonatal Surgery, specializing in the surgical management of infants, children, and newborns. With extensive training and...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Paediatric & Neonatal Surgery",
    href: "/doctors/doctor-details",
  },

  {
    imgUrl: "/images/doctors/MukeshChhetri.png",
    department: "Oral & Maxillofacial Surgery & Dentistry",
    name: "Dr.Mukesh Chhetri, BDS",
    designation: "Consultant Oral & Maxillofacial Surgeon & Dentist",
    description:
      "Dr. Mukesh Chhteri is a leading Consultant in Oral and Maxillofacial Surgery and Dentistry, offering specialized care for conditions affecting the mouth, jaw, and face. With extensive training...",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "Oral & Maxillofacial Surgery & Dentistry",
    href: "/doctors/doctor-details",
  },
];

export default function Doctors() {
  pageTitle("Doctors");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.jpg"

        title="Introduce You to <br />Our Experts"
        subTitle="The list of certified doctors with years of <br />professional experiences"
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/doctors/banner_img.JPG"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}

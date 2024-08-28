import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
import DepartmentSectionStyle3 from "../Section/DepartmentSection/DepartmentSectionStyle3";
import BannerSectionStyle6 from "../Section/BannerSection/BannerSectionStyle6";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
const departmentData = [
  {
    iconUrl: "images/departments/emergency.svg",
    title: "Accident and Emergency Care",
    subTitle:
      "Provides immediate treatment for acute illnesses and injuries requiring urgent medical attention.",
    href: "/departments/accident-emergency-care",
  },
  {
    iconUrl: "images/departments/laparoscopic.svg",
    title: "Laparoscopic & General Surgery",
    subTitle:
      "Offers minimally invasive procedures for a variety of surgical conditions, as well as general surgical care.",
    href: "/departments/Laparoscopic&GeneralSurgery",
  },
  {
    iconUrl: "images/departments/neuro_surgery.svg",
    title: "Neurosurgery",
    subTitle:
      "Focuses on the surgical treatment of disorders affecting the brain, spine, and nervous system.",
    href: "/departments/neurosurgery",
  },
  {
    iconUrl: "images/departments/rheumatology.svg",
    title: "Orthopaedic & Joint Replacement Surgery",
    subTitle:
      "Specializes in surgical interventions for musculoskeletal issues, including joint replacements and fracture repair.",
    href: "/departments/orthopaedic-joint-replacement-surgery",
  },
  {
    iconUrl: "images/departments/orthopaedics.svg",
    title: "Spine Surgery",
    subTitle:
      "Provides surgical treatments for a range of spinal conditions, including degenerative diseases and traumatic injuries.",
    href: "/departments/spine-surgery",
  },
  {
    iconUrl: "images/departments/cardiology.svg",
    title: "Cardiothoracic & Vascular Surgery",
    subTitle:
      "Handles complex surgeries involving the heart, lungs, and vascular system, including coronary bypass and valve repairs.",
    href: "/departments/cardiothoracic-vascular-surgery",
  },
  {
    iconUrl: "images/departments/pediatrics.svg",
    title: "Paediatrics & Neonatal Surgery",
    subTitle:
      "Provides surgical care tailored for infants, children, and newborns, addressing congenital and acquired conditions.",
    href: "/departments/paediatrics-neonatal-surgery",
  },
  {
    iconUrl: "images/departments/plastic.svg",
    title: "Plastic & Reconstructive Surgery",
    subTitle:
      "Focuses on reconstructive procedures to restore function and appearance following trauma, disease, or congenital abnormalities.",
    href: "/departments/plastic-reconstructive-surgery",
  },
  {
    iconUrl: "images/departments/urology.svg",
    title: "Urology",
    subTitle:
      "Specializes in the treatment of urinary tract disorders and male reproductive system conditions, including surgeries and non-surgical treatments.",
    href: "/departments/urology",
  },
  {
    iconUrl: "images/departments/gynecology.svg",
    title: "Obstetrics & Gynaecology",
    subTitle:
      "Provides care related to pregnancy, childbirth, and female reproductive health, including routine exams and high-risk deliveries.",
    href: "/departments/obstetrics-gynecology",
  },
  {
    iconUrl: "images/departments/ent.svg",
    title: "Otorhinolaryngology (ENT)",
    subTitle:
      "Cares for conditions affecting the ear, nose, and throat, including surgical and non-surgical treatments for a variety of disorders.",
    href: "/departments/otorhinolaryngology",
  },
  {
    iconUrl: "images/departments/tooth.svg",
    title: "Oral & Maxillofacial Surgery & Dentistry",
    subTitle:
      "Specializes in surgical treatment of the mouth, jaw, and face, including corrective and reconstructive procedures.",
    href: "/departments/oral-maxillofacial-surgery",
  },

  {
    iconUrl: "images/departments/radiology.svg",
    title: "Radiology",
    subTitle:
      "Utilizes imaging technologies, such as X-rays and MRIs, to diagnose and monitor various medical conditions.",
    href: "/departments/radiology",
  },
  {
    iconUrl: "images/departments/intensive_care_unit.svg",
    title: "Internal Medicine",
    subTitle:
      "Provides comprehensive care for adult patients, managing a broad range of conditions from chronic illnesses to acute issues.",
    href: "/departments/internal-medicine",
  },
  {
    iconUrl: "images/departments/neurology.svg",
    title: "Neurology",
    subTitle:
      "Focuses on diagnosing and treating disorders of the nervous system, including the brain, spinal cord, and nerves.",
    href: "/departments/neurology",
  },
  {
    iconUrl: "images/departments/endocrinology.svg",
    title: "Endocrinology",
    subTitle:
      "Specializes in hormone-related conditions, such as diabetes and thyroid disorders, managing both endocrine disorders and metabolic issues.",
    href: "/departments/endocrinology",
  },
  {
    iconUrl: "images/departments/cardiology.svg",
    title: "Cardiology",
    subTitle:
      "Deals with the diagnosis and treatment of heart conditions, including heart disease, arrhythmias, and hypertension.",
    href: "/departments/cardiology",
  },
  {
    iconUrl: "images/departments/gastroenterology.svg",
    title: "Gastroenterology",
    subTitle:
      "Focuses on diseases and conditions of the digestive system, including the stomach, intestines, liver, and pancreas.",
    href: "/departments/gastroenterology",
  },
  {
    iconUrl: "images/departments/pulmonology.svg",
    title: "Pulmonology",
    subTitle:
      "Specializes in the diagnosis and treatment of respiratory system disorders, such as asthma, COPD, and lung infections.",
    href: "/departments/pulmonology",
  },
  {
    iconUrl: "images/departments/nephrology.svg",
    title: "Nephrology",
    subTitle:
      "Manages conditions related to the kidneys, including chronic kidney disease, dialysis, and kidney transplantation.",
    href: "/departments/nephrology",
  },
  {
    iconUrl: "images/departments/pediatrics.svg",
    title: "Paediatrics & Neonatology",
    subTitle:
      "Provides specialized care for children and newborns, addressing both common and complex health issues from birth through adolescence.",
    href: "/departments/paediatrics-neonatology",
  },
  {
    iconUrl: "images/departments/psychology.svg",
    title: "Neuropsychiatry",
    subTitle:
      "Focuses on psychiatric disorders with neurological components, integrating mental health and neurological care.",
    href: "/departments/neuropsychiatry",
  },
  {
    iconUrl: "images/departments/opthalmology.svg",
    title: "Ophthalmology",
    subTitle:
      "Specializes in the diagnosis and treatment of eye conditions, including vision problems and eye diseases.",
    href: "/departments/ophthalmology",
  },
  {
    iconUrl: "images/departments/critical_care.svg",
    title: "Anaesthesiology & Intensive Care",
    subTitle:
      "Provides anesthesia services for surgeries and manages critically ill patients in intensive care units.",
    href: "/departments/anaesthesiology-intensive-care",
  },
  {
    iconUrl: "images/departments/medicine.svg",
    title: "Pain Medicine",
    subTitle:
      "Focuses on the evaluation and management of acute and chronic pain through various medical and interventional approaches.",
    href: "/departments/pain-medicine",
  },
  {
    iconUrl: "images/departments/pathology.svg",
    title: "Pathology & Microbiology",
    subTitle:
      "Diagnoses diseases through laboratory testing of tissue, blood, and other samples, including microbiological analyses.",
    href: "/departments/pathology-microbiology",
  },
];

export default function Departments() {
  pageTitle("Departments");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl="/images/departments/banner_img.JPG"
        title="Get to Know <br>Paramount Hospital Departments"
        subTitle="At ProHealth, we offer a wide range of medical and healthcare services that are designed to meet your individual needs and help you achieve optimal health."
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle3 data={departmentData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="/images/departments/banner_img3.JPG"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />experienced medical professionals today!"
        />
      </Section>
    </>
  );
}

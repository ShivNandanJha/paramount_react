import { Icon } from "@iconify/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
    address: "",
    specialization: "",
    doctor: "",
    reasonForVisit: "",
  });


  const specializations = {
    "accident-emergency-care": [],
    "laparoscopic-general-surgery": [
      { value: "Dr VivekSarkar", label: "Dr. Vivek Sarkar, MS" },
      { value: "Dr JameeezulIrfan", label: "Dr. J. Jameezul Irfan, MS" },

    ],
   " neurosurgery": [
      { value: "Dr SajalBiswas", label: "Dr. Sajal Biswas, MS, MCh" }
    ],
    "orthopaedic-joint-replacement-surgery": [
      { value: "Dr AmalBasak", label: "Dr. Amal Basak, D.Ortho, MS" },
      { value: "Dr SoutrikMukherjee", label: "Dr. Soutrik Mukherjee, MS" },

    ],
    "spine-surgery": [
      { value: "Dr SajalBiswas", label: "Dr. Sajal Biswas, MS, MCh" },
      { value: "Dr AmalBasak", label: "Dr. Amal Basak, D.Ortho, MS" },
      { value: "Dr SoutrikMukherjee", label: "Dr. Soutrik Mukherjee, MS" },
    ],
    cardiology: [
      { value: "Dr ArabindaSaha", label: "Dr. Arabinda Saha, MD, DM, DNB" },
      { value: "Dr IndranilSen", label: "Dr. Indranil Sen, MD, DM" },

    ],
    pulmonology: [
      { value: "Dr SoumyaGhosh", label: "Dr. Soumya Ghosh, MD" }
    ],
    urology: [
      { value: "Dr KundaanKumar", label: "Dr. Kundaan Kumar, MS, MCh" },

    ],
    nephrology: [
      { value: "Dr VikrantDeshmukh", label: "Dr. Vikrant Deshmukh, DNB" }
    ],

    "gastrointestinal-surgery": [
      { value: "Dr BarunKumarSingh", label: "Dr. Barun Kumar Singh, MS, DrNB" }
    ],
    "paediatrics-neonatal-surgery": [
      { value: "Dr VivekSarkar", label: "Dr. Vivek Sarkar, MS" },
      { value: "Dr JameezulIrfan", label: "Dr. J. Jameezul Irfan, MS" },
    ],
    "plastic-cosmetic-reconstructive-surgery": [
      { value: "Dr SJayaLeima", label: "Dr. S. Jaya Leima, MS, MCh" },

    ],
    "oral-maxillofacial-surgery-dentistry": [
      { value: "Dr MukeshChhetri", label: "Dr. Mukesh Chhetri, BDS" }
    ],
    "obstetrics-gynaecology": [
      { value: "Dr TanyaSingla", label: "Dr. Tanya Singla, MS" },
      { value: "Dr RanjanPal", label: "Dr. Ranjan Pal, MD" },
      { value: "Dr PunamSarkar", label: "Dr. Punam Sarkar, MS" },
      { value: "Dr NeelamSingla", label: "Dr. Neelam Singla, MD" },
    ],

    ent: [
      { value: "Dr ParthaPratimSaha", label: "Dr. Partha Pratim Saha, MS" },
      { value: "Dr SandeepGhosh", label: "Dr. Sandeep Ghosh, MS" },
    ],
    radiology: [
      { value: "Dr ChandanKumar", label: "Dr. Chandan Kumar, MD" }
    ],

    neurology: [
      { value: "Dr NRHaldar", label: "Dr. N.R. Haldar, MD, DM" }
    ],
    "internal-medicine-endocrinology": [
      { value: "Dr MKDas", label: "Dr. M.K Das, MD" },
      { value: "Dr SoumyaGhosh", label: "Dr. Soumya Ghosh, MD" },
    ],
    "gastroenterology-hepatology": [
      { value: "Dr PrabhatRanjan", label: "Dr. Prabhat Ranjan, MD, DM" }
    ],
    "paediatrics-neonatology": [
      { value: "Dr RajivAgarwal", label: "Dr. Rajiv Agarwal, MD" }
    ],

    pathology: [
      { value: "Dr PBera", label: "Dr. P. Bera, MD" },
      { value: "Dr NiladriHaldar", label: "Dr. Niladri Haldar, MD" }
    ]
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSpecializationChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      specialization: value,
      doctor: "", // Reset doctor selection when specialization changes
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example URL for sending data to Telegram bot (replace with your own bot endpoint)
      const telegramBotURL =
        "https://api.telegram.org/bot7397190437:AAEXm9oS461pM5PNI6mm4HVLRB8_XvHcGzw/sendMessage";
      const message = `
        New Appointment Request:
            Name               : ${formData.name}
            Email              : ${formData.email}
            Phone              : ${formData.phone}
            Appointment Date: ${formData.appointmentDate}
            Address       : ${formData.address}
            Specialization: ${formData.specialization}
            Doctor        : ${formData.doctor}
            Reason for Visit     : ${formData.reasonForVisit}

      `;

      // Sending data to Telegram bot
      await axios.post(telegramBotURL, {
        chat_id: "-1002197183807", // Replace with your chat ID
        text: message,
      });
      toast.success("Your appointment request has been booked successfully!");

      // Optionally, reset form fields after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        appointmentDate: "",
        address: "",
        specialization: "",
        doctor: "",
        reasonForVisit: "",
      });
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      toast.error(
        "Failed to send appointment request. Please try again later."
      );
    }
  };

  return (
    <div className="mt-12 mx-auto px-4 p-8 bg-[#eee] lg:w-[40%] sm:w-[100%] sm:px-8 sm:rounded-xl">
      <form onSubmit={handleSubmit} className="row">
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Name</label>
          <input
            type="text"
            name="name"
            placeholder="David John"
            value={formData.name}
            onChange={handleChange}
            className="cs_form_field"
            required
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="(+91) 12345-67890"
            value={formData.phone}
            onChange={handleChange}
            className="cs_form_field"
            required
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="cs_form_field"
            required
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Preferred Date
          </label>
          <div className="cs_with_icon_input">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                handleChange({
                  target: {
                    name: "appointmentDate",
                    value: date ? date.toISOString().split("T")[0] : "",
                  },
                });
              }}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              isClearable
              placeholderText="dd/mm/yyyy"
              className="cs_form_field"
              required
            />
            <i>
              <Icon icon="fa6-solid:calendar-days" />
            </i>
          </div>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
      
        <div className="col-lg-6">
          <label htmlFor="options" className="cs_input_label cs_heading_color">
            Specialization
          </label>
          <select
            name="specialization"
            id="options"
            value={formData.specialization}
            onChange={handleSpecializationChange}
            className="cs_form_field"
            required
          >
            <option value="">Choose specialization</option>
            {Object.keys(specializations).map((key) => (
              <option key={key} value={key}>
                {key.replace(/-/g, " ").toUpperCase()}
              </option>
            ))}
          </select>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        {formData.specialization && specializations[formData.specialization].length > 0 && (
          <div className="col-lg-6">
            <label htmlFor="doctor" className="cs_input_label cs_heading_color">
              Doctor
            </label>
            <select
              name="doctor"
              id="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="cs_form_field"
              required
            >
              <option value="">Choose doctor</option>
              {specializations[formData.specialization].map((doc) => (
                <option key={doc.value} value={doc.value}>
                  {doc.label}
                </option>
              ))}
            </select>
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
        )}
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">
            Reason for Visit
          </label>
          <div className="cs_radio_group">
            <div className="cs_radio_wrap">
              <input
                className="cs_radio_input"
                type="radio"
                name="reasonForVisit"
                id="routineCheckup"
                value="routineCheckup"
                checked={formData.reasonForVisit === "routineCheckup"}
                onChange={handleChange}
              />
              <label className="cs_radio_label" htmlFor="routineCheckup">
                Routine Checkup
              </label>
            </div>
            <div className="cs_radio_wrap">
              <input
                className="cs_radio_input"
                type="radio"
                name="reasonForVisit"
                id="newPatientVisit"
                value="newPatientVisit"
                checked={formData.reasonForVisit === "newPatientVisit"}
                onChange={handleChange}
              />
              <label className="cs_radio_label" htmlFor="newPatientVisit">
                New Patient Visit
              </label>
            </div>
            <div className="cs_radio_wrap">
              <input
                className="cs_radio_input"
                type="radio"
                name="reasonForVisit"
                id="specificConcern"
                value="specificConcern"
                checked={formData.reasonForVisit === "specificConcern"}
                onChange={handleChange}
              />
              <label className="cs_radio_label" htmlFor="specificConcern">
                Specific Concern
              </label>
            </div>
          </div>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Address</label>
          <textarea
            rows="5"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="cs_form_field"
          ></textarea>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <button type="submit" className="cs_btn cs_style_1">
            <span>Submit</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Appointment;

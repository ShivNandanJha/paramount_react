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
            placeholder="(123) 456 - 789"
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
          <label className="cs_input_label cs_heading_color">
            Preferred Time
          </label>
          <div className="cs_with_icon_input">
            <input
              type="time"
              name="time"
              placeholder="10:00AM"
              value={formData.time}
              onChange={handleChange}
              className="cs_form_field cs_timepicker"
              required
            />
            <i>
              <Icon icon="fa6-regular:clock" />
            </i>
          </div>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Specialization
          </label>
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleSpecializationChange}
            className="cs_form_field"
            required
          >
            <option value="">Choose specialization</option>
            <option value="accident-emergency-care">
              Accident and Emergency Care
            </option>
            <option value="laparoscopic-general-surgery">
              Laparoscopic & General Surgery
            </option>
            <option value="neurosurgery">Neurosurgery</option>
            <option value="orthopaedic-joint-replacement-surgery">
              Orthopaedic & Joint Replacement Surgery
            </option>
            <option value="spine-surgery">Spine Surgery</option>
            <option value="cardiothoracic-vascular-surgery">
              Cardiothoracic & Vascular Surgery
            </option>
            <option value="paediatrics-neonatal-surgery">
              Paediatrics & Neonatal Surgery
            </option>
            <option value="plastic-reconstructive-surgery">
              Plastic & Reconstructive Surgery
            </option>
            <option value="urology">Urology</option>
            <option value="obstetrics-gynaecology">
              Obstetrics & Gynaecology
            </option>
            <option value="otorhinolaryngology-ent">
              Otorhinolaryngology (ENT)
            </option>
            <option value="oral-maxillofacial-surgery-dentistry">
              Oral & Maxillofacial Surgery & Dentistry
            </option>
            <option value="radiology">Radiology</option>
            <option value="internal-medicine">Internal Medicine</option>
            <option value="neurology">Neurology</option>
            <option value="endocrinology">Endocrinology</option>
            <option value="cardiology">Cardiology</option>
            <option value="gastroenterology">Gastroenterology</option>
            <option value="pulmonology">Pulmonology</option>
            <option value="nephrology">Nephrology</option>
            <option value="paediatrics-neonatology">
              Paediatrics & Neonatology
            </option>
            <option value="neuropsychiatry">Neuropsychiatry</option>
            <option value="ophthalmology">Ophthalmology</option>
            <option value="anaesthesiology-intensive-care">
              Anaesthesiology & Intensive Care
            </option>
            <option value="pain-medicine">Pain Medicine</option>
            <option value="pathology-microbiology">
              Pathology & Microbiology
            </option>

            {/* Add more options as needed */}
          </select>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        {formData.specialization && (
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="cs_form_field"
              required
            >
              <option value="">Choose doctor</option>

              {formData.specialization === "laparoscopic-general-surgery" && (
                <>
                  <option value="drVivekSarkar">Dr. Vivek Sarkar, MS</option>
                  <option value="drKalyanMandal">Dr. Kalyan Mandal, MS</option>
                  <option value="drJameeezulIrfan">
                    Dr. J. Jameeezul Irfan, MS
                  </option>
                  <option value="drPenzinBhutia">
                    Dr. Penzin D. Bhutia, MS
                  </option>
                </>
              )}

              {formData.specialization === "neurosurgery" && (
                <>
                  <option value="drSajalBiswas">
                    Dr. Sajal Biswas, MS, MCh
                  </option>
                </>
              )}

              {formData.specialization ===
                "orthopaedic-joint-replacement-surgery" && (
                <>
                  <option value="drAmalBasak">
                    Dr. Amal Basak, D.Ortho, MS
                  </option>
                  <option value="drSoutrikMukherjee">
                    Dr. Soutrik Mukherjee, MS
                  </option>
                </>
              )}

              {formData.specialization === "spine-surgery" && (
                <>
                  <option value="drSajalBiswas">
                    Dr. Sajal Biswas, MS, MCh
                  </option>
                  <option value="drAmalBasak">
                    Dr. Amal Basak, D.Ortho, MS
                  </option>
                  <option value="drSoutrikMukherjee">
                    Dr. Soutrik Mukherjee, MS
                  </option>
                </>
              )}

              {formData.specialization === "gastrointestinal-surgery" && (
                <>
                  <option value="drBarunKumarSingh">
                    Dr. Barun Kumar Singh, MS, DNB
                  </option>
                </>
              )}

              {formData.specialization ===
                "cardiothoracic-vascular-surgery" && (
                <>
                  <option value="drAnjanKarDas">
                    Dr. Anjan Kar Das, MS, MCh
                  </option>
                </>
              )}

              {formData.specialization === "paediatrics-neonatal-surgery" && (
                <>
                  <option value="drVivekSarkar">Dr. Vivek Sarkar, MS</option>
                  <option value="drRajarshiKumar">
                    Dr. Rajarshi Kumar, MS, MCh
                  </option>
                  <option value="drAlokeSinhaBabu">
                    Dr. Aloke Sinha Babu, MS, MCh
                  </option>
                  <option value="drJameeezulIrfan">
                    Dr. J. Jameeezul Irfan, MS
                  </option>
                </>
              )}

              {formData.specialization ===
                "plastic-cosmetic-reconstructive-surgery" && (
                <>
                  <option value="drManojKumarSingh">
                    Dr. Manoj Kumar Singh, MS, MCh
                  </option>
                  <option value="drSoumyaGayen">
                    Dr. Soumya Gayen, MS, MCh
                  </option>
                  <option value="drPenzinBhutia">
                    Dr. Penzin D. Bhutia, MS
                  </option>
                </>
              )}

              {formData.specialization === "urology" && (
                <>
                  <option value="drKundaanKumar">
                    Dr. Kundaan Kumar, MS, MCh
                  </option>
                  <option value="drSurajitPaul">
                    Dr. Surajit Paul, MS, MCh
                  </option>
                  <option value="drBiswajitDutta">
                    Dr. Biswajit Dutta, MS
                  </option>
                </>
              )}

              {formData.specialization === "obstetrics-gynaecology" && (
                <>
                  <option value="drPunamSarkar">Dr. Punam Sarkar, MS</option>
                  <option value="drRanjanPal">Dr. Ranjan Pal, MD</option>
                  <option value="drNeelamSingla">Dr. Neelam Singla, MD</option>
                </>
              )}

              {formData.specialization === "otorhinolaryngology-ent" && (
                <>
                  <option value="drParthaPratimSaha">
                    Dr. Partha Pratim Saha, MS
                  </option>
                  <option value="drSandeepGhosh">Dr. Sandeep Ghosh, MS</option>
                </>
              )}

              {formData.specialization ===
                "oral-maxillofacial-surgery-dentistry" && (
                <>
                  <option value="drMukeshChatterjee">
                    Dr. Mukesh Chatterjee, BDS
                  </option>
                </>
              )}

              {formData.specialization === "internal-medicine" && (
                <>
                  <option value="drMKDas">Dr. M.K. Das, MD</option>
                  <option value="drRSaha">Dr. R. Saha, MD</option>
                  <option value="drSoumyaGhosh">Dr. Soumya Ghosh, MD</option>
                </>
              )}

              {formData.specialization === "neurology" && (
                <>
                  <option value="drNRHaldar">Dr. N.R. Haldar, MD, DM</option>
                </>
              )}

              {formData.specialization === "endocrinology" && (
                <>
                  <option value="drMKDas">Dr. M.K. Das, MD</option>
                </>
              )}

              {formData.specialization === "cardiology" && (
                <>
                  <option value="drArabindaSaha">
                    Dr. Arabinda Saha, MD, DM, DNB
                  </option>
                  <option value="drIndranilSen">
                    Dr. Indranil Sen, MD, DM
                  </option>
                  <option value="drDeepakTomar">
                    Dr. Deepak Tomar, MD, DM
                  </option>
                </>
              )}

              {formData.specialization === "gastroenterology-hepatology" && (
                <>
                  <option value="drPrabhatRanjan">
                    Dr. Prabhat Ranjan, MD
                  </option>
                </>
              )}

              {formData.specialization === "pulmonology" && (
                <>
                  <option value="drSoumyaGhosh">Dr. Soumya Ghosh, MD</option>
                </>
              )}

              {formData.specialization === "nephrology" && (
                <>
                  <option value="drVikrantDeshmukh">
                    Dr. Vikrant Deshmukh, MD, DM
                  </option>
                </>
              )}

              {formData.specialization === "paediatrics-neonatology" && (
                <>
                  <option value="drRajivAgarwal">Dr. Rajiv Agarwal, MD</option>
                </>
              )}

              {formData.specialization === "neuropsychiatry" && (
                <>
                  <option value="drSantanuDe">Dr. Santanu De, MD</option>
                </>
              )}

              {formData.specialization === "ophthalmology" && (
                <>
                  <option value="drAshishKumarBichpuria">
                    Dr. Ashish Kumar Bichpuria, MS
                  </option>
                  <option value="drNilanjanaHaldar">
                    Dr. Nilanjana Haldar, MS
                  </option>
                </>
              )}

              {formData.specialization === "radiology" && (
                <>
                  <option value="drChandanKumar">Dr. Chandan Kumar, MD</option>
                </>
              )}

              {formData.specialization === "anaesthesiology-intensive-care" && (
                <>
                  <option value="drSKKhutia">Dr. S.K. Khutia, MD, FIPM</option>
                  <option value="drChatterjee">Dr. Chatterjee, MD</option>
                </>
              )}

              {formData.specialization === "pain-medicine" && (
                <>
                  <option value="drSKKhutia">Dr. S.K. Khutia, MD, FIPM</option>
                </>
              )}

              {formData.specialization === "pathology-microbiology" && (
                <>
                  <option value="drPBera">Dr. P. Bera, MD</option>
                  <option value="drSantanuHazra">Dr. Santanu Hazra, MD</option>
                </>
              )}
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

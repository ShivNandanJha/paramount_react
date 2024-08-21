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
        "https://api.telegram.org/bot6886100657:AAGqnx43OWjOIecx3ltgnidi4pgko2V58uk/sendMessage";
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
        chat_id: "6432775968", // Replace with your chat ID
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
          >
            <option value="">Choose specialization</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
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
            >
              <option value="">Choose doctor</option>
              {formData.specialization === "cardiology" && (
                <>
                  <option value="drSmith">Dr. Smith</option>
                  <option value="drJones">Dr. Jones</option>
                </>
              )}
              {formData.specialization === "neurology" && (
                <>
                  <option value="drTaylor">Dr. Taylor</option>
                  <option value="drBrown">Dr. Brown</option>
                </>
              )}
              {/* Add more options based on specialization */}
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

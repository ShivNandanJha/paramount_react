import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

import HomeStyle2 from "./components/Pages/HomeStyle2";
import About from "./components/Pages/About";
import Doctors from "./components/Pages/Doctors";
import Blog from "./components/Pages/Blog";
import Appointments from "./components/Pages/Appointments";
import Departments from "./components/Pages/Departments";
import DepartmentDetails from "./components/Pages/DepartmentDetails";
import BlogDetails from "./components/Pages/BlogDetails";
import DoctorDetails from "./components/Pages/DoctorDetails";
import Gallery from "./components/Pages/Gallery";
import Timetable from "./components/Pages/Timetable";
import Contact from "./components/Pages/Contact";
import { useEffect } from "react";
import ErrorPage from "./components/Pages/ErrorPage";
import Neurology from "./components/Pages/neurology";
import Laparoscopic from "./components/Pages/Laparoscopic";
import Neurosurgery from "./components/Pages/Neurosurgery";
import Orthopaedic from "./components/Pages/Orthopaedic";
import Spine from "./components/Pages/Spine";
import Cardiology from "./components/Pages/Cardiology";
import Paeditrics_Surgery from "./components/Pages/PaediatricsNeonatalSurgery";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeStyle2 />} />
          <Route path="about" element={<About />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:doctorId" element={<DoctorDetails />} />
          {/* <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogId" element={<BlogDetails />} /> */}
          <Route path="appointments" element={<Appointments />} />
          <Route path="departments" element={<Departments />} />
          <Route
            path="departments/:departmentId"
            element={<DepartmentDetails />}
          />
          <Route path = "departments/neurology" element                             = {<Neurology />} />
          <Route path = "departments/neurosurgery" element                          = {<Neurosurgery />} />
          <Route path = "departments/Laparoscopic&GeneralSurgery" element           = {<Laparoscopic />} />
          <Route path = "departments/orthopaedic-joint-replacement-surgery" element = {<Orthopaedic />} />
          <Route path = "departments/spine-surgery" element                         = {<Spine />} />
          <Route path = "departments/cardiology" element                            = {<Cardiology />} />
          <Route path = "departments/paediatrics-neonatal-surgery" element          = {<Paeditrics_Surgery/>} />
          <Route path = "gallery" element                                           = {<Gallery />} />
          <Route path = "timetable" element                                         = {<Timetable />} />
          <Route path = "contact" element                                           = {<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>{" "}
    </>
  );
}

export default App;

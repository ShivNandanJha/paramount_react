import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Layout from "./components/Layout";
import MetaTagsComponent from "./components/MetaTagsComponent";
import ErrorPage from "./components/Pages/ErrorPage";
import Gastroenterology from "./components/Pages/Gastroenterology";
import Endocrinology from "./components/Pages/Endocrinology";
import Pulmonology from "./components/Pages/Pulmonology";
import Nephrology from "./components/Pages/Nephrology";

// Lazy load components
const Home = lazy(() => import("./components/Pages/Home"));
const About = lazy(() => import("./components/Pages/About"));
const Doctors = lazy(() => import("./components/Pages/Doctors"));
const Appointments = lazy(() => import("./components/Pages/Appointments"));
const Departments = lazy(() => import("./components/Pages/Departments"));
// const DepartmentDetails = lazy(() => import("./components/Pages/DepartmentDetails"));
const Gallery = lazy(() => import("./components/Pages/Gallery"));
const Timetable = lazy(() => import("./components/Pages/Timetable"));
const Contact = lazy(() => import("./components/Pages/Contact"));
const Neurology = lazy(() => import("./components/Pages/neurology"));
const Laparoscopic = lazy(() => import("./components/Pages/Laparoscopic"));
const Neurosurgery = lazy(() => import("./components/Pages/Neurosurgery"));
const Orthopaedic = lazy(() => import("./components/Pages/Orthopaedic"));
const Spine = lazy(() => import("./components/Pages/Spine"));
const Cardiology = lazy(() => import("./components/Pages/Cardiology"));
const Paeditrics_Surgery = lazy(() => import("./components/Pages/PaediatricsNeonatalSurgery"));
const Urology = lazy(() => import("./components/Pages/Urology"));
const Gynaecology = lazy(() => import("./components/Pages/Gynaecology"));
const Ent = lazy(() => import("./components/Pages/Ent"));
const Dentist = lazy(() => import("./components/Pages/Dentist"));
const Radiology = lazy(() => import("./components/Pages/Radiology"));
const Accident_and_Emergency = lazy(() => import("./components/Pages/accident_emergency"));
const InternalMedicine = lazy(() => import("./components/Pages/InternalMedicine"));

// Skeleton loader component
function SkeletonLoader() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <p>Loading...</p>
    </div>
  );
}

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <MetaTagsComponent />
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="appointment" element={<Appointments />} />
            <Route path="departments" element={<Departments />} />
            {/* <Route path="departments/:departmentId" element={<DepartmentDetails />} /> */}
            <Route path = "departments/neurology" element                             = {<Neurology />} />
            <Route path = "departments/neurosurgery" element                          = {<Neurosurgery />} />
            <Route path = "departments/Laparoscopic&GeneralSurgery" element           = {<Laparoscopic />} />
            <Route path = "departments/orthopaedic-joint-replacement-surgery" element = {<Orthopaedic />} />
            <Route path = "departments/spine-surgery" element                         = {<Spine />} />
            <Route path = "departments/cardiology" element                            = {<Cardiology />} />
            <Route path = "departments/paediatrics-neonatal-surgery" element          = {<Paeditrics_Surgery />} />
            <Route path = "/departments/urology" element                              = {<Urology />} />
            <Route path = "/departments/obstetrics-gynecology" element                = {<Gynaecology />} />
            <Route path = "/departments/otorhinolaryngology" element                  = {<Ent />} />
            <Route path = "/departments/oral-maxillofacial-surgery" element           = {<Dentist />} />
            <Route path = "/departments/radiology" element                            = {<Radiology />} />
            <Route path = "/departments/accident-emergency-care" element              = {<Accident_and_Emergency />} />
            <Route path = "/departments/internal-medicine" element                    = {<InternalMedicine />} />
            <Route path = "/departments/gastroenterology" element                     = {<Gastroenterology />} />
            <Route path = "/departments/pulmonology" element                          = {<Pulmonology />} />
            <Route path = "/departments/endocrinology" element                        = {<Endocrinology />} />
            <Route path = "/departments/nephrology" element                           = {<Nephrology/>} />
            <Route path = "gallery" element                                           = {<Gallery />} />
            <Route path = "timetable" element                                         = {<Timetable />} />
            <Route path = "contact" element                                           = {<Contact />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

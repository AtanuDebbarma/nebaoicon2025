import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./appComponents/NavBar/NavBar";
import Home from "./pages/HomeScreen/Home";
import Registration from "./pages/RegistrationScreen/Registration";
import Contact from "./pages/ContactScreen/Contact";
import TopBanner from "./appComponents/TopBanner/TopBanner";
import Programme from "./pages/ProgrammeScreen/Programme";
import Committee from "./pages/CommitteeScreen/Commitee";
import FooterMain from "./appComponents/Footer/FooterMain";
import RegistrationFrom from "./pages/RegistrationForm/RegistrationFrom";

const Root: React.FC = () => {
  return (
    // <Router basename="/nebaoicon2025">
    <Router>
      <TopBanner />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration_form" element={<RegistrationFrom />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterMain />
    </Router>
  );
};

export default Root;

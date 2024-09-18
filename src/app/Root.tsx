import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/HomeScreen/Home";
import Highlights from "./pages/HighlightsScreen/Highlights";
import Papers from "./pages/PapersScreen/Papers";
import Registration from "./pages/RegistrationScreen/Registration";
import Gallery from "./pages/GalleryScreen/Gallery";
import Contact from "./pages/ContactScreen/Contact";
import TopBanner from "./components/TopBanner/TopBanner";

const Root: React.FC = () => {
  return (
    <Router basename="/nebaoicon2025">
      <TopBanner/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Root;

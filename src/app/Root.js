import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomeScreen/Home";
import NavBar from "./components/NavBar/NavBar";

const Root = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/highlights" element={<Highlights />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default Root;

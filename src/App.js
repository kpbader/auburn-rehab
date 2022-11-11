import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/home";
import Navigation from "./components/Navigation/navigation";
import Treatment from "./components/Treatment/treatment";
import Mission from "./components/Mission/mission";
import About from "./components/About/about";
import Insurance from "./components/Insurance/insurance";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <>
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/treatment" element={<Treatment />}></Route>
          <Route path="/mission" element={<Mission />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/insurance" element={<Insurance />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

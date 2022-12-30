import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/home";
import Navigation from "./components/Navigation/navigation";
import PHP from './components/PHP/php';
import IOP from './components/IOP/iop';
import OP from './components/OP/op';
import Jobs from './components/Jobs/jobs';
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
          <Route path="/auburn-rehab" element={<Home />}></Route>
          <Route path="/php" element={<PHP />}></Route>
          <Route path="/iop" element={<IOP />}></Route>
          <Route path="/op" element={<OP />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
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

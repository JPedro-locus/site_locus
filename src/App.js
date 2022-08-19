import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.js";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Header/Header.jsx";
import About from "./Pages/About/About.js";
import Services from "./Pages/Services/Services.js";
import Cases from "./Pages/Cases.js";
import Careers from "./Pages/Careers.js";
import Process from "./Pages/Process/Process.js";
import Events from "./Pages/Events.js";
import Contact from "./Pages/Contact";
<<<<<<< HEAD
import SpecificEvent from "./Pages/SpecificEvent";
=======
import WebSummitEvent from "./Pages/SpecificEvent/webSummit";
import EmergeEvent from "./Pages/SpecificEvent/Emerge"
import CollisionEvent from "./Pages/SpecificEvent/Collision"
import Cartesi from "./Pages/SpecificCase/Cartesi";
import Jobpass from "./Pages/SpecificCase/Jobpass";
import MeuDimDim from "./Pages/SpecificCase/MeuDimDim";
import Repense from "./Pages/SpecificCase/Repense";
>>>>>>> main
import DesignInception from "./Pages/Services/DesignPage";
import QA from "./Pages/Services/QAPage";
import Cloud from "./Pages/Services/CloudPage";
import CTO from "./Pages/Services/CTOPage";
import CustomSoftware from "./Pages/Services/SoftwarePage";
<<<<<<< HEAD
=======
import SquadOutsourcing from "./Pages/Services/SquadPage";
>>>>>>> main
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/services/:id" element={<Services />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/design/designinception" element={<DesignInception />} />
          <Route exact path="/consultancy/qa" element={<QA/>} />
          <Route exact path="/consultancy/cloud" element={<Cloud/>} />
          <Route exact path="/consultancy/CTO" element={<CTO/>} />
          <Route exact path="/dev/customSoftware" element={<CustomSoftware/>} />
<<<<<<< HEAD
          {/* <Route path="/cases" element={<Cases />} /> */}
=======
          {/* <Route exact path="/dev/squadoutsource" element={<SquadOutsourcing/>} /> */}
          <Route path="/cases" element={<Cases />} />
>>>>>>> main
          <Route path="/careers" element={<Careers />} />
          <Route exact path="/events" element={<Events />} />
          <Route path="/events/websummit" element={<WebSummitEvent />} />
          <Route path="/events/emerge" element={<EmergeEvent />} />
          <Route path="/events/collision" element={<CollisionEvent />} />
          <Route path="/events" element={<Events />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
=======
          <Route path="/cases/cartesi" element={<Cartesi />} />
          <Route path="/cases/jobpass" element={<Jobpass />} />
          <Route path="/cases/meudimdim" element={<MeuDimDim />} />
          <Route path="/cases/repense" element={<Repense />}/>
>>>>>>> main
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

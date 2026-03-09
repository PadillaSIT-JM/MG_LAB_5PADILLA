import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./pages/NavBar";
import Services from "./pages/Services";
import Register from "./pages/Register";
import GradesCheck from "./pages/GradesCheck";
import CampusEvents from "./pages/CampusEvents";

function App() {

  return (
   
    <div className="cent">
      <BrowserRouter>
        <NavBar/>
    <Routes>
     
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/grades" element={<GradesCheck />} />
      <Route path="/events" element={<CampusEvents />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
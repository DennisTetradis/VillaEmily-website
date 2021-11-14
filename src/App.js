import "./App.css";
import NavBar from "./NavBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Facilities from "./components/pages/Facilities/Facilities";
import Gallery from "./components/pages/Gallery/Gallery";
import Availability from "./components/pages/Availability/Availability";
import Location from "./components/pages/Location/Location";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <switch>
        <Route path='/' component={Home} />
        <Route path='/' component={About} />
        <Route path='/' component={Facilities} />
        {/* <Route path='/' component={Location} /> */}
        <Route path='/' component={Availability} />
        <Route path='/' component={Gallery} />
      </switch>
    </Router>
  );
}

export default App;

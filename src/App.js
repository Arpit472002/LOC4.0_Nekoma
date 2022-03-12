import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './auth/Login';
import Signup from './auth/Signup';
import Blog from './interface/Organiser/Blog';
import Home from "./interface/User/UHome";
import NavbarLogin from './components/Header/NavbarLogin';
import NavbarOrganiser from './components/Header/NavbarOrganiser';
import NotFound from './components/NotFound';
import Booking from "./interface/Organiser/Booking";
import Events from "./interface/User/Events";
import NavbarUser from "./components/Header/NavbarUser";
import CrowdfundingUser from './interface/User/CrowdfundingUser';
import CrowdfundingOrganiser from './interface/Organiser/CrowdfundingOrganiser';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<><NavbarLogin/><Signup/></>} />
        <Route exact path="/login" element={<><NavbarLogin/><Login /></>} />
         <Route path="/homeuser" element={<><NavbarUser/><Home/></>}></Route>
        <Route exact path="/booking" element={<><NavbarOrganiser/><Booking/></>}/>
        <Route exact path="/blogs" element={<><NavbarOrganiser/><Blog/></>}/>
        <Route exact path="/crowdfundingorganiser" element={<><NavbarOrganiser/><CrowdfundingOrganiser/></>}/>
        <Route exact path="/events" element={<><NavbarUser/><Events/></>}/>
        <Route exact path="/crowdfundinguser" element={<><NavbarUser/><CrowdfundingUser/></>}/>
        <Route path="*" element={<><NotFound/></>}></Route> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;

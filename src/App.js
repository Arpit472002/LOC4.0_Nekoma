import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Blog from './interface/Organiser/Blog';
import UserBlog from './interface/User/UserBlog';
import Home from "./interface/User/UHome";
import NavbarLogin from './components/Header/NavbarLogin';
import NavbarOrganiser from './components/Header/NavbarOrganiser';
import NotFound from './components/NotFound';
import Booking from "./interface/Organiser/Booking";
import Volunteer from "./interface/Organiser/Volunteer";
import UserVolunteer from "./interface/User/UserVolunteer";
import Events from "./interface/User/Events";
import NavbarUser from "./components/Header/NavbarUser";
import CrowdfundingUser from './interface/User/CrowdfundingUser';
import CrowdfundingOrganiser from './interface/Organiser/CrowdfundingOrganiser';
import Supplier from './scm/Supplier';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<><NavbarLogin/><SignupPage/></>} />
        <Route exact path="/login" element={<><NavbarLogin/><LoginPage /></>} />
         <Route path="/homeuser" element={<><NavbarUser/><Home/></>}></Route>
        <Route exact path="/booking" element={<><NavbarOrganiser/><Booking/></>}/>
        <Route exact path="/blogs" element={<><NavbarOrganiser/><Blog/></>}/>
        <Route exact path="/volunteer" element={<><NavbarOrganiser/><Volunteer/></>}/>
        <Route exact path="/uservolunteer" element={<><NavbarUser/><UserVolunteer/></>}/>
        <Route exact path="/userblog" element={<><NavbarUser/><UserBlog/></>}/>
        <Route exact path="/crowdfundingorganiser" element={<><NavbarOrganiser/><CrowdfundingOrganiser/></>}/>
        <Route exact path="/events" element={<><NavbarUser/><Events/></>}/>
        <Route exact path="/crowdfundinguser" element={<><NavbarUser/><CrowdfundingUser/></>}/>
        {/* <Route exact path="/supplier" element={<><NavbarOrganiser/><Supplier/></>}/> */}
        <Route path="*" element={<><NotFound/></>}></Route> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;

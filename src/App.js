import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './auth/Login';
import Signup from './auth/Signup';
import Home from "./components/Home";
import NavbarLogin from './components/Header/NavbarLogin';
import Navbar from './components/Header/Navbar';
import NotFound from './components/NotFound';
import Booking from "./interface/Organiser/Booking";
import Crowdfunding from "./interface/User/Crowdfunding"
import NavbarUser from "./components/Header/NavbarUser";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<><NavbarLogin/><Signup/></>} />
        <Route exact path="/login" element={<><NavbarLogin/><Login /></>} />
        <Route path="/home" element={<><Navbar/><Home/></>}></Route>
        <Route path="*" element={<><NotFound/></>}></Route> 
        <Route exact path="/booking" element={<><Booking/></>}/>
        <Route exact path="/crowdfunding" element={<><NavbarUser/><Crowdfunding/></>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

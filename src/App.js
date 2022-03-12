import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './auth/Login';
import Signup from './auth/Signup';
import Blog from './interface/Organiser/Blog';
import Home from "./components/UHome";
import NavbarLogin from './components/Header/NavbarLogin';
import Navbar from './components/Header/Navbar';
import NotFound from './components/NotFound';
import Booking from "./interface/Organiser/Booking";
import Events from "./interface/User/Events";
import NavbarUser from "./components/Header/NavbarUser";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<><NavbarLogin/><Signup/></>} />
        <Route exact path="/login" element={<><NavbarLogin/><Login /></>} />
         <Route path="/home/user" element={<><Home/></>}></Route>
        <Route path="*" element={<><NotFound/></>}></Route> 
        <Route exact path="/booking" element={<><Navbar/><Booking/></>}/>
        <Route exact path="/events" element={<><NavbarUser/><Events/></>}/>
        <Route exact path="/blog" element={<><Navbar/><Blog/></>}/>
        <Route path="*" element={<><NotFound/></>}></Route> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;

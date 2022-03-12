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

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<><NavbarLogin/><Signup/></>} />
        <Route exact path="/login" element={<><NavbarLogin/><Login /></>} />
         <Route path="/home" element={<><Home/></>}></Route>
{/*<Route path="/meditation" element={<><Navbar /><Meditation/></>}></Route>*/}
        <Route path="*" element={<><NotFound/></>}></Route> 
        <Route exact path="/booking" element={<><Booking/></>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

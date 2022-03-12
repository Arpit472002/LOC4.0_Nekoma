import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './auth/Login';
import Signup from './auth/Signup';
import Blog from './interface/Organiser/Blog';
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
        <Route path="*" element={<><NotFound/></>}></Route> 
        <Route exact path="/booking" element={<><Navbar/><Booking/></>}/>
        <Route exact path="/blog" element={<><Navbar/><Blog/></>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

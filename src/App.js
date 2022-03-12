import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './auth/Login';
import Signup from './auth/Signup';
import NavbarLogin from './components/Header/NavbarLogin';
import Navbar from './components/Header/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<><NavbarLogin/><Signup/></>} />
        <Route exact path="/login" element={<><NavbarLogin/><Login /></>} />
        {/* <Route path="/home" element={<><HomePage/></>}></Route>
        <Route path="/yoga" element={<><Navbar /><Yoga/></>}></Route>
        <Route path="/meditation" element={<><Navbar /><Meditation/></>}></Route>*/}
        <Route path="*" element={<><NotFound/></>}></Route> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;

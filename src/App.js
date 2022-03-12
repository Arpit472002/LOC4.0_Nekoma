import Booking from "./interface/Organiser/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route exact path="/booking" element={<><Booking/></>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link , Switch} from 'react-router-dom'; // Import Routes instead of Route
import Homescreen from './Screens/Homescreen';
import Bookingscreen from './Screens/Bookingscreen';
import Registerscreen from './Screens/Registerscreen';
import Loginscreen from './Screens/Loginscreen';
import Adminscreen from './Screens/Adminscreen';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />


       {/* BrowserRouter */}
      <Router>
        <Routes>
          <Route path="/home" element={<Homescreen />} /> {/* Wrap Route in Routes and use element prop */}
          <Route path='/book/:roomid' element={<Bookingscreen/>} />
          <Route path='/register' element={<Registerscreen/>} />
          <Route path='/login' element={<Loginscreen/>} />
          <Route path='/admin' element={<Adminscreen/>} />
        </Routes>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;

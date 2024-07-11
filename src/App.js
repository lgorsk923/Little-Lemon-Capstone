import './App.css';
import { Nav } from './components/Nav';
import { Home } from './Pages/Home/Home';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Menu } from './Pages/Menu';
import { Booking } from './Pages/Booking';
import { Order } from './Pages/Order';
import { LoginSignup } from './Pages/Login-Signup';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<Booking />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Login-Signup" element={<LoginSignup />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;

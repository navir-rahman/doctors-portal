import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Appointment from './Page/Appointment/Appointment';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import NotFound from './Page/NotFound/NotFound';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<About />}></Route>
        <Route path='about' element={<Home />}> </Route>
        <Route path='appointment' element={<Appointment />}> </Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;

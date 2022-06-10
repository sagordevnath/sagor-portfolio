import { Route, Routes } from 'react-router-dom';
import { useEffect} from 'react';
import About from './About';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import Services from './Services';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CareViewDetails from './CareViewDetails';
import ManufacturerViewDetails from './ManufacturerViewDetails';
import ToysViewDetails from './ToysViewDetails';
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=> {
    AOS.init({
      duration: 1500
    });
  },[])
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/manufacturerViewDetails' element={<ManufacturerViewDetails />} />
        <Route path='/toysViewDetails' element={<ToysViewDetails />} />
        <Route path='/careViewDetails' element={<CareViewDetails />} />
      </Routes>
      {/* <Home></Home>
      <About></About>
      <Services></Services>
      <Project></Project> */}
      {/* <Blog></Blog> */}
      {/* <Contact></Contact> */}
      <Footer></Footer>      
      <ToastContainer />
    </div>
  );
}

export default App;

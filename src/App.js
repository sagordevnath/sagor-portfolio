import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Project from './Projects';
import Services from './Services';

function App() {
  return (
    <div className='App'>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes> */}
      <Home></Home>
      <About></About>
      <Services></Services>
      <Project></Project>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

import About from './About';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import Project from './Projects';
import Services from './Services';

function App() {
  return (
    <div className='App'>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Project></Project>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default App;

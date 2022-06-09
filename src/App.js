import About from './About';
import './App.css';
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
    </div>
  );
}

export default App;

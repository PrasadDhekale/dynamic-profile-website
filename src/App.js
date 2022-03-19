import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Competencies from "./components/competencies/Competencies"
import Accomplishments from "./components/accomplishments/Accomplishments"
function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Accomplishments/>
     <Competencies/>
     <Contact/> 
     
    </div>
  );
}

export default App;

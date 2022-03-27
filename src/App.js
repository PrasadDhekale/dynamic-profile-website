import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Competencies from "./components/competencies/Competencies"
import Accomplishments from "./components/accomplishments/Accomplishments"
import Services from "./components/services/Services"
import content from "./Content/Content"

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Competencies/>
     {content["services"] != undefined  && content["services"]["isEnabled"] ? <Services services={content.services}/> : ""}
     {content["accomplishments"] != undefined  && content["accomplishments"]["isEnabled"] ? <Accomplishments /> : "" }
     <Contact/> 
     
    </div>
  );
}

export default App;

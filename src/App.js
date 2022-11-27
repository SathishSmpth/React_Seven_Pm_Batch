import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from "./Components/Contact";
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';
import LoginFrom from './Components/LoginFrom';
import RegisterFrom from './Components/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/login" element ={<LoginFrom/>}/>
        <Route path="/register" element ={<RegisterFrom/>}/>
        <Route path="*" element ={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;

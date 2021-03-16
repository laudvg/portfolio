import './App.css';
// import {BrowserRouter as Link} from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/Home';
import laura from './img/laura.png'


function App() {
  return (
      <div className="App">
      <Navbar/>

      <Footer/> 
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Projects from './Components/Projects';
import Navbar from './Project-parts/Navbar';
import Footer from './Project-parts/Footer';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>

      </Routes>
      <Footer/>
    </Router>
   
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  ); 
}

export default App;

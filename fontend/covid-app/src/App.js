import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Covid from './pages/covid';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' component={About} />
        <Route path='/covid19' component={Covid} />
      </Routes>
      <Footer />
    </Router>
  );
}
  
export default App;
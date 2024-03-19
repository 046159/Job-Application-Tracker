import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./components/Form";
import Applications from './components/Applications';
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Does not work with GitHub pages


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/form" element={<Form />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App

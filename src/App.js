
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './pages/about/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import NotFound from './components/Error/NotFound';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <BrowserRouter>
        {
          show && <Navbar />

        }
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound setShow={setShow} show={show} />} />
        </Routes>
        {
          show && <Footer setShow={setShow} show={show} />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;

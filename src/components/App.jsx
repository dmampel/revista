import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Archive from './Archive.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bazaar from './Bazaar.jsx';

export default function App() {

  return (
    
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/bazaar" element={<Bazaar />} />
          
          
        </Routes>
        
      </div>
    </Router>
     
  )
}


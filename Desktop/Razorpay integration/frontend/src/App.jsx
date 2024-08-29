import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';       // Import About component
import Contact from './Contact.jsx';   // Import Contact component
import NotFound from './NotFound.jsx'; // Import NotFound component

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" exact element={<NotFound />} /> {/* Catch-all route for 404 page */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

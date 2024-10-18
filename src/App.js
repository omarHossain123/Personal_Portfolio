import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import Map from './components/Map'; // The main map component
import Projects from './components/ProjectsPage/Projects'; // The new Projects page
import './App.css'; // Correct import for CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define route for the map (homepage) */}
          <Route path="/" element={<Map />} />
          
          {/* Define route for the Projects page */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

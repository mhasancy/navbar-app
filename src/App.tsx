import { Routes, Route } from 'react-router-dom';

import './global.css';
import { About, Blog, Contact, Download, Games, Home } from './pages';

const App = () => {
  return (
    <main>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
        <Route path="/games" element={<Games />} />

        {/* private routes */}
      </Routes>
    </main>
  );
};

export default App;

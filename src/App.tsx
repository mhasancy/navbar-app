import { Routes, Route } from 'react-router-dom';

import './global.css';

import { CustomRoute } from './types/types';
import { About, Blog, Contact, Download, Games, Home } from './pages';
import Navbar from './components/navbar/Navbar';

// Route configuration
const routeConfig: CustomRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <Contact /> },
  { path: '/download', element: <Download /> },
  { path: '/games', element: <Games /> },
  // More routes if needed
];

// Function to generate Routes dynamically
const generateRoutes = () => {
  return routeConfig.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));
};

const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        {/* Render routes dynamically */}
        {generateRoutes()}
      </Routes>
    </main>
  );
};

export default App;

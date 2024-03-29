import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { CustomRoute } from './types';
import { About, Blog, Contact, Download, Games, Home } from './pages';
import Navbar from './components/navbar/Navbar';
import NotFound from './pages/errorHandling/NotFound';

import './global.css';

// Route configuration
const routeConfig: CustomRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <Contact /> },
  { path: '/download', element: <Download /> },
  { path: '/games', element: <Games /> },
  { path: '*', element: <NotFound /> },
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
      {/* <ErrorBoundary> */}
      {/* Wrapping Routes with ErrorBoundary */}
      <Routes>
        {/* Rendering routes dynamically */}
        {generateRoutes()}
      </Routes>
      {/* </ErrorBoundary> */}
    </main>
  );
};

export default App;

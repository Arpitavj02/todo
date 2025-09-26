import React from 'react';
import { Routes, Route } from 'react-router-dom'; // <-- no BrowserRouter here
import Home from './components/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;

import React from 'react';
import { Header } from "./components";
import Projects from './pages/Projects';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Works from './pages/Works';
import { ScrollToTop } from './components/common';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

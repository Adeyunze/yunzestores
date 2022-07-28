/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'

// Pages
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import ProductPage from './components/pages/ProductPage';
import Error from './components/pages/Error';
import ScrollToTop from './components/ScrollToTop';

// Navbar
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route  index element={<Home />}/>
            <Route  path='shop/:id' element={<ProductPage />}/>
            <Route  path='shop' element={<Shop />}/>
            <Route  path='men' element={<Men />}/>
            <Route  path='women' element={<Women />}/>
            <Route  path='*' element={<Error />}/>
          </Route>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;

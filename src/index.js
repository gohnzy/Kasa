import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import datas from './datas/datas.json';

import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';

import Error from './components/Error.jsx';

import Gallery from './components/Home/Gallery.jsx';
import Values from './components/About/KasaValues.jsx';

import Place from './components/Places/place.jsx';


import './style/Bases/Main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function ThisPlace() {
  const { id } = useParams();
  const placeData = datas.find(data => data.id === id);
  return placeData ? <Place datas={placeData} /> : <Error />;
}

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='' element={<main><Banner /><Gallery /></main>} />
        <Route path='about' element={<main><Banner /><Values /></main>} />
        <Route path='/places/:id' element={<ThisPlace />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

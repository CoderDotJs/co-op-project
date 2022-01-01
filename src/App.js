import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

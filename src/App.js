import React, { } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import SingleMovie from './Components/SingleMovie';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

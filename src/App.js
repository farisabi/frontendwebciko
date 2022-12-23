import React from 'react';
import Login from "./components/login.js";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/home";
import Daftar from "./components/Daftar";
import Admin from "./components/Admin";
import AddTabel from "./components/admindashboard/AddTabel";
import EditTabel from "./components/admindashboard/EditTabel";
import Tabeladmin from './components/admindashboard/Tabelkegiatan.js';
import TabelKegiatan from './components/Menu/TabelKegiatan.js';
import Nilai from './components/Menu/Nilai.js';
import About from './components/Menu/About.js';


function App() {
  return (
    <div className="App">

      <Routes>
        {/* Main Menu */}
        <Route path='/' element={<Home />} />
        <Route path='/tabelkegiatan' element={<TabelKegiatan />} />
        <Route path='/nilai' element={<Nilai />} />
        <Route path='/about' element={<About />} />
      </Routes>


      {/* admin */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/daftar' element={<Daftar />} />
        <Route path='/dashboard' element={<Admin />} />
        <Route path='/dashboard/tabelkegiatan' element={<div><Tabeladmin /></div>} />
        <Route path='/dashboard/add' element={<AddTabel />} />
        <Route path='/dashboard/edit/:id' element={<EditTabel />} />
      </Routes>
    </div>
  );
}

export default App;

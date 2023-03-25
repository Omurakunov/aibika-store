import {MainPage} from "../pages/MainPage/MainPage.jsx";
import {Sidebar} from "../components/Sidebar/Sidebar.jsx";
import {Routes, Route} from "react-router-dom"
import {CartPage} from '../pages/CartPage/CartPage.jsx'
import React, { useState} from "react";
import {Navbar} from "../components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <Navbar/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/cart' element={<CartPage />}/>
                <Route path='/cart' element={<CartPage />}/>
                <Route path='/cart' element={<CartPage />}/>
                <Route path='/cart' element={<CartPage />}/>
                <Route path='/cart' element={<CartPage />}/>
            </Routes>
    </div>
  )
}

export default App

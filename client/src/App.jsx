import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Index'
import CartPage from './pages/CartPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Coming soon</h1>} />
            <Route path='Cart' element={<CartPage />} />
        </Routes>
    )
}

export default App

import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookReader from './pages/BookWithPageScroll/BookReader'
import BookMain from './pages/BookReadSelectionMain/BookMain'
import HCMFlipBook from './components/RealisticPageflipping/HCMFlipBook';
import HomePage from './pages/HomePage/HomePage'
import ScrollToTop from './components/ScrollToTop';
import Robot from './components/ReadBot/Robot';

function App() {

  return (
    <div className='app'>
      <ScrollToTop />
      {/* <Robot /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar selectVal={"f"}/>
              <HomePage />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/doc-sach"
          element={
            <>
              <Navbar selectVal={"s"}/>
              {/* <BookMain />
              <BookReader /> */}
              <HCMFlipBook />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App

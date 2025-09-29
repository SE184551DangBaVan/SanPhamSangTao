import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookReader from './pages/BookWithPageScroll/BookReader'
import BookMain from './pages/BookReadSelectionMain/BookMain'
import HCMFlipBook from './components/RealisticPageflipping/HCMFlipBook';
import HCMFlipBook1 from './components/RealisticPageflipping/HCMFlipBook1';
import HCMFlipBook2 from './components/RealisticPageflipping/HCMFlipBook2';
import HCMFlipBook3 from './components/RealisticPageflipping/HCMFlipBook3';
import { TestBook1, TestBook2 } from './tmp_rovodev_test';
import BookSelection from './components/BookSelection/BookSelection';
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
        <Route
          path="/doc-sach"
          element={
            <>
              <Navbar selectVal={"s"}/>
              <HCMFlipBook1 />
            </>
          }
        />
        <Route
          path="/doc-sach-2"
          element={
            <>
              <Navbar selectVal={"s"}/>
              <HCMFlipBook2 />
            </>
          }
        />
        <Route
          path="/doc-sach-3"
          element={
            <>
              <Navbar selectVal={"s"}/>
              <HCMFlipBook3 />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App

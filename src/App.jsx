import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookReader from './pages/BookWithPageScroll/BookReader'
import BookMain from './pages/BookReadSelectionMain/BookMain'
import HomePage from './pages/HomePage/HomePage'
import ScrollToTop from './components/ScrollToTop';
import MinhPage from "./pages/MinhPage/MinhPage.jsx";

function App() {

  return (
    <div className='app'>
      <ScrollToTop />
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
              <BookMain />
              <BookReader />
            </>
          }
        />
      </Routes>

        <Routes>
            <Route
                path="/minh"
                element={
                    <>
                        <MinhPage/>
                    </>
                }
            />
        </Routes>
    </div>
  )
}

export default App

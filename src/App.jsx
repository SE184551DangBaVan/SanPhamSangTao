import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookReader from './pages/BookWithPageScroll/BookReader'
import BookMain from './pages/BookReadSelectionMain/BookMain'
import HomePage from './pages/HomePage/HomePage'
import ScrollToTop from './components/ScrollToTop';
import MinhPage from "./pages/MinhPage/MinhPage.jsx";
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation.jsx';
import { allBooks } from './data/books.jsx';

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
        <Route
          path="/doc-sach"
          element={
            <>
              <LoadingAnimation />
              <BookMain />
              <BookReader />
            </>
          }
        />
        <Route
          path="/minh"
          element={
            <>
              <MinhPage/>
            </>
          }
        />
        {/* Individual book routes */}
        {allBooks.map((book, index) => (
          <Route
            key={index}
            path={`/book/${index + 1}`}
            element={
              <>
                <LoadingAnimation />
                <BookMain />
                <BookReader />
              </>
            }
          />
        ))}
      </Routes>
    </div>
  )
}

export default App

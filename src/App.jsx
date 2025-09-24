import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookReader from './pages/BookWithPageScroll/BookReader'
import BookMain from './pages/BookReadSelectionMain/BookMain'
import HomePage from './pages/HomePage/HomePage'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <HomePage />

      {/*<BookMain />
      <BookReader /> */}
    </div>
  )
}

export default App

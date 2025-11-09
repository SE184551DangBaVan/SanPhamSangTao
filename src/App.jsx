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
import GameSelectionPage from './pages/GameSelectionPage/GameSelectionPage.jsx';
import { allBooks } from './data/books.jsx';
import Cinema from './pages/AbsoluteCinema/Cinema.jsx';

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
                path="/game-selection"
                element={
                  <>
                    {/* <Navbar  selectVal={"fi"}/> */}
                    <GameSelectionPage />
                  </>
                }
            />
            <Route
                path="/minh"
                element={
                  <>
                    <MinhPage />
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
                <BookMain bookTitle={book.title} bookDesc={book.subtitle} tldr={"Tư tưởng Hồ Chí Minh đứng giữa ngã ba đường của chủ nghĩa thực dụng, chủ nghĩa nhân văn và tầm nhìn cách mạng. Từ sự tôn trọng sâu sắc đối với văn hóa và đạo đức đến sự tinh thông ngôn ngữ chính trị và khả năng lãnh đạo tập thể, những cuốn sách này cho thấy cách Người kết hợp truyền thống phương Đông với tư tưởng phương Tây để tạo nên một triết lý sống động. Tư tưởng của Người không phải là giáo điều trừu tượng, mà là kim chỉ nam thực tiễn cho giải phóng, đổi mới và nhân phẩm - một di sản trường tồn vẫn tiếp tục định hình con đường của Việt Nam ngày nay."}/>
                <BookReader />
              </>
            }
          />
        ))}
        {allBooks.map((book, index) => (
          <Route
            key={index}
            path={`/xem-phim/${index + 1}`}
            element={
              <>
                <LoadingAnimation />
                <Cinema filmTitle={book.movieTitle} movie={book.movie} transcript={book.transcript}/>
              </>
            }
          />
        ))}
      </Routes>
    </div>
  )
}

export default App

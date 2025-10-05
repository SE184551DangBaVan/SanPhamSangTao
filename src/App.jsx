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
              <LoadingAnimation />
              <BookMain bookTitle={"Bảo Tồn Văn Hóa HCM"} bookDesc={"Tất cả di sản văn hóa kết nối chúng ta"} tldr={"Tư tưởng Hồ Chí Minh đứng giữa ngã ba đường của chủ nghĩa thực dụng, chủ nghĩa nhân văn và tầm nhìn cách mạng. Từ sự tôn trọng sâu sắc đối với văn hóa và đạo đức đến sự tinh thông ngôn ngữ chính trị và khả năng lãnh đạo tập thể, những cuốn sách này cho thấy cách Người kết hợp truyền thống phương Đông với tư tưởng phương Tây để tạo nên một triết lý sống động. Tư tưởng của Người không phải là giáo điều trừu tượng, mà là kim chỉ nam thực tiễn cho giải phóng, đổi mới và nhân phẩm - một di sản trường tồn vẫn tiếp tục định hình con đường của Việt Nam ngày nay."}/>
              <BookReader />
            </>
          }
        />
      </Routes>

        <Routes>
            <Route
                path="/game-selection"
                element={
                  <>
                    <Navbar  selectVal={"fi"}/>
                    <GameSelectionPage />
                  </>
                }
            />
        </Routes>
        <Routes>
            <Route
                path="/memory-card-quiz"
                element={
                  <>
                    <MinhPage />
                  </>
                }
            />
        </Routes>
    </div>
  )
}

export default App

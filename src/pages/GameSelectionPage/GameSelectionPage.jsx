import React from 'react'
import './GameSelectionPage.css'

import {useNavigate} from "react-router-dom";

export default function GameSelectionPage() {
  const navigate = useNavigate();
  return (
    <form class="gameSelectionContainer" action="">
        <div class="input-container">
          <div class="input-content">
            <div class="input-dist">
              <div class="input-type">
                <h2>Chọn Một Trò Chơi</h2>
                <button class="submit" onClick={(e) => {
                    e.preventDefault();
                    navigate("/memory-card-quiz")}}>Quiz Thẻ Nhớ</button>
                <button class="submit" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://nhatdang1102.github.io/QuizHCM202/";
                }}>Chạy Né 2D</button>
              </div>
            </div>
          </div>
        </div>
    </form>
  )
}

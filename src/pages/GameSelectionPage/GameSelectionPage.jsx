import React from 'react'
import './GameSelectionPage.css'

import {useNavigate} from "react-router-dom";

export default function GameSelectionPage() {
  const navigate = useNavigate();
  return (
    <form className="gameSelectionContainer" action="">
        <div className="input-container">
          <div className="input-content">
            <div className="input-dist">
              <div className="input-type">
                <h2>Chọn Một Trò Chơi</h2>
                <button className="submit" onClick={(e) => {
                    e.preventDefault();
                    navigate("/memory-card-game")}}>Thẻ Nhớ</button>
                <button className="submit back" onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                }}>Back</button>
              </div>
            </div>
          </div>
        </div>
    </form>
  )
}

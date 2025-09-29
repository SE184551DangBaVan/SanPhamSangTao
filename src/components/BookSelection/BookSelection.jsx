import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookSelection.css';

const BookSelection = () => {
  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      title: "Cơ cấu xã hội - giai cấp ở Việt Nam thời kỳ quá độ lên chủ nghĩa xã hội",
      subtitle: "Phân Tích Cơ Cấu Giai Cấp Xã Hội Việt Nam Hiện Nay",
      author: "Bao Dong Khoi",
      cover: "/src/assets/cong-nhan-khu-cong-nghiep-420221204194047.jpg",
      route: "/doc-sach"
    },
    {
      id: 2,
      title: "Liên minh giai cấp, tầng lớp ở VN thời kỳ quá độ lên chủ nghĩa XH",
      subtitle: "with AI",
      author: "Bao Thanh Nien",
      cover: "/src/assets/double-exposure-portrait-oil-refinery-worker-with-hardhat_66608507.jpg",
      route: "/doc-sach-2"
    },
    {
      id: 3,
      title: "Tác động của Toàn cầu hóa và Công nghệ đến cơ cấu xã hội Việt Nam",
      subtitle: "Phân Tích Tác Động Công Nghệ Và Toàn Cầu Hóa",
      author: "Bao Thanh Nien",
      cover: "/src/assets/vecteezy_man-hand-holds-an-electronic-globe-while-looking-at-the_22862409.jpg",
      route: "/doc-sach-3"
    }
  ];

  return (
    <div className="book-selection-container">
      <div className="book-selection-header">
        <h1>Lựa Chọn Sách</h1>
        <p>Chọn sách để bắt đầu đọc</p>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-card"
            onClick={() => navigate(book.route)}
          >
            <div className="book-cover">
              <img src={book.cover} alt={book.title} />
              <div className="book-overlay">
                <h3>{book.title}</h3>
                <p className="book-subtitle">{book.subtitle}</p>
                <p className="book-author">Tác giả: {book.author}</p>
                <button className="read-button">Đọc sách</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSelection;
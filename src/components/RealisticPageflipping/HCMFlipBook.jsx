import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import styles from './HCMFlipBook.module.css';

const HCMFlipBook = () => {
  const flipBook = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [flipState, setFlipState] = useState('read'); // 'read', 'user_fold', 'fold_corner'

  // Sample content for the book
  const bookContent = [
    {
      title: "Trang Bìa",
      content: "Nội dung HCM Chương IV - Phần 4.1.1",
      image: "/assets/images/article1/nha-nuoc-cua-nhan-dan.jpg"
    },
    {
      title: "Nhà nước của Nhân dân",
      content: "Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân. Đây là nguyên tắc cơ bản của nhà nước ta, được Chủ tịch Hồ Chí Minh khẳng định rõ ràng trong bản Tuyên ngôn độc lập năm 1945.",
      image: "/assets/images/article1/nha-nuoc-cua-nhan-dan.jpg"
    },
    {
      title: "Nhà nước do Nhân dân",
      content: "Nhà nước do Nhân dân xây dựng nên, được Nhân dân tin tưởng và giao phó trách nhiệm. Mỗi cán bộ, đảng viên phải luôn ghi nhớ rằng quyền lực thuộc về Nhân dân.",
      image: "/assets/images/article1/nha-nuoc-do-nhan-dan.jpg"
    },
    {
      title: "Nhà nước vì Nhân dân",
      content: "Mục tiêu cao nhất của Nhà nước là phục vụ lợi ích của Nhân dân. Mọi chính sách, quyết định đều phải xuất phát từ lợi ích và nguyện vọng chính đáng của Nhân dân.",
      image: "/assets/images/article1/nha-nuoc-vi-nhan-dan.png"
    },
    {
      title: "Bản chất giai cấp",
      content: "Nhà nước ta mang bản chất giai cấp công nhân, nhưng đồng thời là nhà nước của toàn dân, đại diện cho lợi ích của mọi tầng lớp Nhân dân lao động.",
      image: "/assets/images/article1/ban-chat-giai-cap.jpg"
    },
    {
      title: "Kết thúc",
      content: "Cảm ơn bạn đã đọc cuốn sách về tư tưởng Hồ Chí Minh. Những nguyên tắc về nhà nước của Nhân dân, do Nhân dân, vì Nhân dân mãi mãi là kim chỉ nam cho sự phát triển của đất nước.",
      image: "/assets/images/article1/nha-nuoc-cua-nhan-dan.jpg"
    }
  ];

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  // We don't need onChangeState anymore since the binding shadow is now part of the pages
  // and will automatically follow their z-index behavior

  return (
    <div className={styles.flipbookContainer}>
      <div className={styles.flipbookControls}>
        <button
          onClick={() => flipBook.current?.pageFlip()?.flipPrev()}
          disabled={currentPage === 0}
          className={styles.controlButton}
        >
          Trang trước
        </button>
        <span className={styles.pageIndicator}>Trang {currentPage + 1} / {bookContent.length}</span>
        <button
          onClick={() => flipBook.current?.pageFlip()?.flipNext()}
          disabled={currentPage === bookContent.length - 1}
          className={styles.controlButton}
        >
          Trang sau
        </button>
      </div>
      
      <HTMLFlipBook
        width={550}
        height={700}
        size="fixed"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1200}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        onFlip={onFlip}
        ref={flipBook}
        className={styles.hcmFlipbook}
      >
        {bookContent.map((page, index) => (
          <Page
            key={index}
            title={page.title}
            content={page.content}
            image={page.image}
            pageNumber={index + 1}
            showBindingShadow={index > 0}
            isLeftPage={index % 2 === 1}
          />
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default HCMFlipBook;
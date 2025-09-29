import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import styles from './HCMFlipBook.module.css';

const HCMFlipBook2 = () => {
  const flipBook = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [flipState, setFlipState] = useState('read'); // 'read', 'user_fold', 'fold_corner'

  // Content for Book 2: Liên minh giai cấp, tầng lớp ở Việt Nam thời kỳ quá độ lên chủ nghĩa xã hội
  const bookContent = [
    {
      title: "Liên minh giai cấp, tầng lớp ở Việt Nam",
      content: "Liên minh giai cấp, tầng lớp ở Việt Nam thời kỳ quá độ lên chủ nghĩa xã hội",
      image: "src/assets/double-exposure-portrait-oil-refinery-worker-with-hardhat_66608507.jpg"
    },
    {
      title: "Liên minh giai cấp công nhân, nông dân, trí thức",
      content: "Dưới sự lãnh đạo của Đảng Cộng sản Việt Nam và tư tưởng Hồ Chí Minh, liên minh giai cấp công nhân, nông dân, trí thức hình thành sớm, được khẳng định qua các kỳ Đại hội. Đại hội XII nhấn mạnh đại đoàn kết toàn dân tộc là đường lối chiến lược, là động lực và nguồn lực to lớn để xây dựng, bảo vệ Tổ quốc, giữ vững định hướng xã hội chủ nghĩa, tạo sức mạnh tổng hợp vượt qua thách thức.",
      image: "/src/assets/BTATN21214BacHo6.jpg"
    },
    {
      title: "Nội dung kinh tế liên minh",
      content: "Nội dung kinh tế của liên minh là cơ sở vật chất quyết định, tập trung phát triển kinh tế nhanh, bền vững, giữ vững ổn định kinh tế vĩ mô. Nhiệm vụ trọng tâm là công nghiệp hóa, hiện đại hóa nông nghiệp, xây dựng nông thôn mới, phát triển kinh tế tri thức, nâng cao năng suất, chất lượng, sức cạnh tranh, xây dựng nền kinh tế độc lập, tự chủ, tham gia chuỗi giá trị toàn cầu.",
      image: "/src/assets/sach/nong-nghiep-cong-nghe-cao-3.jpg"
    },
    {
      title: "Hợp tác giai cấp",
      content: "Liên minh kinh tế thúc đẩy hợp tác giữa công nhân, nông dân, trí thức, doanh nhân, ứng dụng công nghệ cao vào sản xuất nông nghiệp, công nghiệp, dịch vụ. Chuyển giao khoa học kỹ thuật hiện đại, liên kết các ngành, vùng, thành phần kinh tế trong và ngoài nước, nâng cao đời sống nhân dân, gắn kết chặt chẽ các lực lượng xã hội, tạo nền tảng kinh tế - xã hội cho sự phát triển quốc gia.",
      image: "/src/assets/sach/hoptac.jpg"
    },
    {
      title: "Nội dung chính trị",
      content: "Nội dung chính trị của liên minh giữ vững lập trường tư tưởng giai cấp công nhân, vai trò lãnh đạo của Đảng Cộng sản. Củng cố dân chủ xã hội chủ nghĩa, quyền làm chủ của nhân dân, tăng cường đoàn kết dân tộc, chống âm mưu \"diễn biến hòa bình\" của thế lực thù địch, bảo vệ chế độ, giữ vững độc lập dân tộc và định hướng xã hội chủ nghĩa, xây dựng hệ thống chính trị vững mạnh.",
      image: "/src/assets/sach/chinhtri.jpg"
    },
    {
      title: "Văn hóa - xã hội",
      content: "Nội dung văn hóa - xã hội xây dựng văn hóa Việt Nam tiên tiến, đậm đà sắc dân tộc, tiếp thu tinh hoa nhân loại, hướng đến chân - thiện - mỹ. Văn hóa là nền tảng tinh thần, sức mạnh nội sinh, đảm bảo phát triển bền vững, bảo vệ Tổ quốc. Liên minh thúc đẩy phát triển con người toàn diện, thực hiện công bằng xã hội, gắn tăng trưởng kinh tế với phát triển văn hóa.",
      image: "/src/assets/sach/vhxh.jpg"
    },
    {
      title: "Nâng cao chất lượng nguồn nhân lực",
      content: "Liên minh cần nâng cao chất lượng nguồn nhân lực, xóa đói giảm nghèo, thực hiện an sinh xã hội, chăm sóc sức khỏe, nâng cao dân trí. Đảm bảo quyền dân chủ, quyền con người cho công nhân, nông dân, trí thức, nhân dân lao động, tạo điều kiện cho liên minh phát triển bền vững, góp phần xây dựng đất nước giàu mạnh, dân chủ, công bằng, văn minh.",
      image: "/src/assets/sach/khai-niem-chat-luong-nguon-nhan-luc.jpeg"
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

export default HCMFlipBook2;
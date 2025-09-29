import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import styles from './HCMFlipBook.module.css';
import coverOne from '../../assets/cong-nhan-khu-cong-nghiep-420221204194047.jpg';

const HCMFlipBook1 = () => {
  const flipBook = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [flipState, setFlipState] = useState('read'); // 'read', 'user_fold', 'fold_corner'

  // Content for Book 1: Cơ cấu xã hội - giai cấp ở Việt Nam thời kỳ quá độ lên chủ nghĩa xã hội
  const bookContent = [
    {
      title: "Cơ cấu xã hội - giai cấp ở Việt Nam",
      content: "Cơ cấu xã hội - giai cấp ở Việt Nam thời kỳ quá độ lên chủ nghĩa xã hội",
      image: "/src/assets/cong-nhan-khu-cong-nghiep-420221204194047.jpg"
    },
    {
      title: "Thời kỳ quá độ",
      content: "Sau thắng lợi cách mạng dân tộc dân chủ, Việt Nam thống nhất và bước vào thời kỳ quá độ lên chủ nghĩa xã hội. Cơ cấu xã hội - giai cấp biến đổi theo quy luật kinh tế, đảm bảo tính phổ biến và đặc thù Việt Nam. Từ Đại hội VI (1986), Đảng lãnh đạo chuyển sang cơ chế thị trường định hướng xã hội chủ nghĩa, xây dựng nền kinh tế đa thành phần, dẫn đến sự thay đổi sâu rộng trong cơ cấu xã hội - giai cấp.",
      image: "/src/assets/HoChiMinhLockedIn.jpg"
    },
    {
      title: "Cơ cấu xã hội đa dạng",
      content: "Cơ cấu xã hội trở nên đa dạng, thay thế mô hình đơn giản trước đổi mới gồm công nhân, nông dân, trí thức. Các giai cấp, tầng lớp biến đổi nội bộ, chuyển hóa lẫn nhau, xuất hiện tầng lớp mới như doanh nhân. Sự đa dạng này thúc đẩy kinh tế phát triển năng động, trở thành động lực quan trọng cho đổi mới đất nước, xây dựng chủ nghĩa xã hội, đồng thời tạo cơ hội và thách thức trong quản lý xã hội.",
      image: "/src/assets/sach/cocauxh.jpg"
    },
    {
      title: "Giai cấp công nhân",
      content: "Giai cấp công nhân giữ vai trò lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam, đại diện phương thức sản xuất tiên tiến. Họ tiên phong trong công nghiệp hóa, hiện đại hóa và mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh. Công nhân hiện đại và công nhân trí thức ngày càng phát triển, đáp ứng yêu cầu kinh tế tri thức và Cách mạng công nghiệp lần thứ tư, nâng cao kỹ năng và tác phong công nghiệp.",
      image: "/src/assets/sach/giaicapcongnhan.jpg"
    },
    {
      title: "Giai cấp nông dân",
      content: "Giai cấp nông dân đóng vai trò chiến lược trong công nghiệp hóa, hiện đại hóa nông nghiệp, xây dựng nông thôn mới, bảo vệ an ninh, quốc phòng, văn hóa dân tộc và môi trường. Một bộ phận nông dân chuyển sang công nghiệp, dịch vụ, trở thành công nhân. Xuất hiện chủ trang trại lớn và nông dân làm thuê, phân hóa giàu nghèo rõ nét, đòi hỏi chính sách hỗ trợ để đảm bảo công bằng xã hội.",
      image: "/src/assets/sach/giaicapnongdan.jpg"
    },
    {
      title: "Trí thức và doanh nhân",
      content: "Đội ngũ trí thức là lực lượng sáng tạo quan trọng, thúc đẩy công nghiệp hóa, hội nhập quốc tế, xây dựng kinh tế tri thức và văn hóa dân tộc tiến tiến. Doanh nhân phát triển nhanh về số lượng, quy mô, đóng góp vào kinh tế, tạo việc làm, xóa đói giảm nghèo. Đảng chủ trương xây dựng đội ngũ doanh nhân vững mạnh, có đạo đức, trình độ quản trị cao, nâng cao sức cạnh tranh kinh tế.",
      image: "/src/assets/sach/trithucdoanhnhan.jpg"
    },
    {
      title: "Kết luận",
      content: "Cơ cấu xã hội - giai cấp biến đổi liên tục, xuất hiện nhóm xã hội mới, đòi hỏi giải pháp đồng bộ để các giai cấp khẳng định vai trò. Cần chính sách sát thực, tác động tích cực để phát huy hiệu quả vai trò của công nhân, nông dân, trí thức, doanh nhân trong phát triển đất nước theo định hướng xã hội chủ nghĩa, đảm bảo sự ổn định và phát triển bền vững của xã hội Việt Nam.",
      image: "/src/assets/sach/chinhsach.jpg"
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

export default HCMFlipBook1;
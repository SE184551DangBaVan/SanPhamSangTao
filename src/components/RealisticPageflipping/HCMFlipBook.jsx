import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import styles from './HCMFlipBook.module.css';
import hoChiMinhBlack from '../../assets/ho-chi-minh-2026935_1280_black.png';
import hoChiMinhLockedIn from '../../assets/HoChiMinhLockedIn.jpg';
import confrenceImage from '../../assets/ConfrenceImage.jpg';
import bacHo1 from '../../assets/BTATN21214BacHo1.jpg';
import bacHo4 from '../../assets/BTATN21214BacHo4.jpg';
import bacHo5 from '../../assets/BTATN21214BacHo5.jpg';
import bacHo6 from '../../assets/BTATN21214BacHo6.jpg';
import hoChiMinhPortrait from '../../assets/ho-chi-minh-portrait-lance-bourne.jpg';
import hoChiMinhMonument from '../../assets/12295353-Ho-Chí-Minh-monument-in-Ho-Chi-Minh-City-Vietnam.png';
import ayuntamiento from '../../assets/Ayuntamiento_Ciudad_Ho_Chi_Minh_Vietnam_2013-08-14_DD_01.jpg';
import hb3 from '../../assets/hb-3-5360jpg-6767.jpg';
import readingWebsite from '../../assets/Reading-Website-Design.png';

const HCMFlipBook = () => {
  const flipBook = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [flipState, setFlipState] = useState('read'); // 'read', 'user_fold', 'fold_corner'

  // Content extracted from MLN131.docx - Social structure and class alliance in Vietnam
  const bookContent = [
    {
      title: "Cơ cấu xã hội - giai cấp ở Việt Nam",
      content: "Cơ cấu xã hội - giai cấp ở Việt Nam thời kỳ quá độ lên chủ nghĩa xã hội",
      image: hoChiMinhBlack
    },
    {
      title: "Thời kỳ quá độ",
      content: "Sau thắng lợi cách mạng dân tộc dân chủ, Việt Nam thống nhất và bước vào thời kỳ quá độ lên chủ nghĩa xã hội. Cơ cấu xã hội - giai cấp biến đổi theo quy luật kinh tế, đảm bảo tính phổ biến và đặc thù Việt Nam. Từ Đại hội VI (1986), Đảng lãnh đạo chuyển sang cơ chế thị trường định hướng xã hội chủ nghĩa, xây dựng nền kinh tế đa thành phần, dẫn đến sự thay đổi sâu rộng trong cơ cấu xã hội - giai cấp.",
      image: hoChiMinhLockedIn
    },
    {
      title: "Cơ cấu xã hội đa dạng",
      content: "Cơ cấu xã hội trở nên đa dạng, thay thế mô hình đơn giản trước đổi mới gồm công nhân, nông dân, trí thức. Các giai cấp, tầng lớp biến đổi nội bộ, chuyển hóa lẫn nhau, xuất hiện tầng lớp mới như doanh nhân. Sự đa dạng này thúc đẩy kinh tế phát triển năng động, trở thành động lực quan trọng cho đổi mới đất nước, xây dựng chủ nghĩa xã hội, đồng thời tạo cơ hội và thách thức trong quản lý xã hội.",
      image: confrenceImage
    },
    {
      title: "Giai cấp công nhân",
      content: "Giai cấp công nhân giữ vai trò lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam, đại diện phương thức sản xuất tiên tiến. Họ tiên phong trong công nghiệp hóa, hiện đại hóa và mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh. Công nhân hiện đại và công nhân trí thức ngày càng phát triển, đáp ứng yêu cầu kinh tế tri thức và Cách mạng công nghiệp lần thứ tư, nâng cao kỹ năng và tác phong công nghiệp.",
      image: bacHo1
    },
    {
      title: "Giai cấp nông dân",
      content: "Giai cấp nông dân đóng vai trò chiến lược trong công nghiệp hóa, hiện đại hóa nông nghiệp, xây dựng nông thôn mới, bảo vệ an ninh, quốc phòng, văn hóa dân tộc và môi trường. Một bộ phận nông dân chuyển sang công nghiệp, dịch vụ, trở thành công nhân. Xuất hiện chủ trang trại lớn và nông dân làm thuê, phân hóa giàu nghèo rõ nét, đòi hỏi chính sách hỗ trợ để đảm bảo công bằng xã hội.",
      image: bacHo4
    },
    {
      title: "Trí thức và doanh nhân",
      content: "Đội ngũ trí thức là lực lượng sáng tạo quan trọng, thúc đẩy công nghiệp hóa, hội nhập quốc tế, xây dựng kinh tế tri thức và văn hóa dân tộc tiến tiến. Doanh nhân phát triển nhanh về số lượng, quy mô, đóng góp vào kinh tế, tạo việc làm, xóa đói giảm nghèo. Đảng chủ trương xây dựng đội ngũ doanh nhân vững mạnh, có đạo đức, trình độ quản trị cao, nâng cao sức cạnh tranh kinh tế.",
      image: bacHo5
    },
    {
      title: "Liên minh giai cấp",
      content: "Dưới sự lãnh đạo của Đảng Cộng sản Việt Nam và tư tưởng Hồ Chí Minh, liên minh giai cấp công nhân, nông dân, trí thức hình thành sớm, được khẳng định qua các kỳ Đại hội. Đại hội XII nhấn mạnh đại đoàn kết toàn dân tộc là đường lối chiến lược, là động lực và nguồn lực to lớn để xây dựng, bảo vệ Tổ quốc, giữ vững định hướng xã hội chủ nghĩa, tạo sức mạnh tổng hợp vượt qua thách thức.",
      image: bacHo6
    },
    {
      title: "Nội dung kinh tế liên minh",
      content: "Nội dung kinh tế của liên minh là cơ sở vật chất quyết định, tập trung phát triển kinh tế nhanh, bền vững, giữ vững ổn định kinh tế vĩ mô. Nhiệm vụ trọng tâm là công nghiệp hóa, hiện đại hóa nông nghiệp, xây dựng nông thôn mới, phát triển kinh tế tri thức, nâng cao năng suất, chất lượng, sức cạnh tranh, xây dựng nền kinh tế độc lập, tự chủ, tham gia chuỗi giá trị toàn cầu.",
      image: hoChiMinhPortrait
    },
    {
      title: "Hợp tác giai cấp",
      content: "Liên minh kinh tế thúc đẩy hợp tác giữa công nhân, nông dân, trí thức, doanh nhân, ứng dụng công nghệ cao vào sản xuất nông nghiệp, công nghiệp, dịch vụ. Chuyển giao khoa học kỹ thuật hiện đại, liên kết các ngành, vùng, thành phần kinh tế trong và ngoài nước, nâng cao đời sống nhân dân, gắn kết chặt chẽ các lực lượng xã hội, tạo nền tảng kinh tế - xã hội cho sự phát triển quốc gia.",
      image: hoChiMinhMonument
    },
    {
      title: "Nội dung chính trị",
      content: "Nội dung chính trị của liên minh giữ vững lập trường tư tưởng giai cấp công nhân, vai trò lãnh đạo của Đảng Cộng sản. Củng cố dân chủ xã hội chủ nghĩa, quyền làm chủ của nhân dân, tăng cường đoàn kết dân tộc, chống âm mưu 'diễn biến hòa bình' của thế lực thù địch, bảo vệ chế độ, giữ vững độc lập dân tộc và định hướng xã hội chủ nghĩa, xây dựng hệ thống chính trị vững mạnh.",
      image: ayuntamiento
    },
    {
      title: "Văn hóa - xã hội",
      content: "Nội dung văn hóa - xã hội xây dựng văn hóa Việt Nam tiến tiến, đậm đà sắc dân tộc, tiếp thu tinh hoa nhân loại, hướng đến chân - thiện - mỹ. Văn hóa là nền tảng tinh thần, sức mạnh nội sinh, đảm bảo phát triển bền vững, bảo vệ Tổ quốc. Liên minh thúc đẩy phát triển con người toàn diện, thực hiện công bằng xã hội, gắn tăng trưởng kinh tế với phát triển văn hóa.",
      image: hb3
    },
    {
      title: "Kết luận",
      content: "Cơ cấu xã hội - giai cấp biến đổi liên tục, xuất hiện nhóm xã hội mới, đòi hỏi giải pháp đồng bộ để các giai cấp khẳng định vai trò. Cần chính sách sát thực, tác động tích cực để phát huy hiệu quả vai trò của công nhân, nông dân, trí thức, doanh nhân trong phát triển đất nước theo định hướng xã hội chủ nghĩa, đảm bảo sự ổn định và phát triển bền vững của xã hội Việt Nam.",
      image: readingWebsite
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
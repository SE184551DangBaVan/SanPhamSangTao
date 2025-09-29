import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import styles from './HCMFlipBook.module.css';
import electronicGlobe from '../../assets/vecteezy_man-hand-holds-an-electronic-globe-while-looking-at-the_22862409.jpg';
import futuristicFactory from '../../assets/vecteezy_futuristic-factory-with-robotic-arms-and-automated_24615921.jpg';
import roboticArms from '../../assets/vecteezy_3d-rendering-robotic-arms-working-in-a-factory-automotive_34460796.jpg';
import khainiemchatluongnguonnhanluc from '../../assets/sach/khai-niem-chat-luong-nguon-nhan-luc.jpeg';
import vhxh from '../../assets/sach/vhxh.jpg';
import chinhsach from '../../assets/sach/chinhsach.jpg';
import trithucdoanhnhan from '../../assets/sach/trithucdoanhnhan.jpg';

const HCMFlipBook3 = () => {
  const flipBook = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [flipState, setFlipState] = useState('read'); // 'read', 'user_fold', 'fold_corner'

  // Content for Book 3: Tác động của Toàn cầu hóa và Công nghệ đến cơ cấu xã hội Việt Nam
  const bookContent = [
    {
      title: "Tác động của Toàn cầu hóa và Công nghệ",
      content: "Tác động của Toàn cầu hóa và Công nghệ đến cơ cấu xã hội Việt Nam",
      image: electronicGlobe
    },
    {
      title: "Toàn cầu hóa và hội nhập kinh tế",
      content: "Toàn cầu hóa thúc đẩy Việt Nam hội nhập kinh tế quốc tế sâu rộng, tham gia các hiệp định thương mại tự do như CPTPP, EVFTA, RCEP. Quá trình này tạo ra sự chuyển dịch cơ cấu lao động từ nông nghiệp sang công nghiệp và dịch vụ, hình thành các ngành kinh tế mới, nâng cao trình độ công nghệ và kỹ năng lao động, đồng thời tạo ra sự phân hóa thu nhập và cơ hội việc làm trong xã hội.",
      image: futuristicFactory
    },
    {
      title: "Công nghệ 4.0 và chuyển đổi số",
      content: "Cách mạng công nghiệp 4.0 và chuyển đổi số đang làm thay đổi căn bản cơ cấu xã hội Việt Nam. Trí tuệ nhân tạo, dữ liệu lớn, internet vạn vật tạo ra nhu cầu lao động có kỹ năng cao, thúc đẩy phát triển kinh tế số, hình thành các ngành nghề mới như phân tích dữ liệu, phát triển phần mềm, thương mại điện tử. Đồng thời, tạo ra thách thức cho lao động truyền thống, đòi hỏi đào tạo lại và thích ứng với công nghệ mới.",
      image: roboticArms
    },
    {
      title: "Thị trường lao động và việc làm",
      content: "Toàn cầu hóa và công nghệ làm biến đổi thị trường lao động Việt Nam. Xuất hiện các hình thức việc làm mới như làm việc từ xa, kinh tế gig, lao động số. Lao động trẻ em, phụ nữ, người cao tuổi có thêm cơ hội việc làm linh hoạt. Tuy nhiên, cũng tạo ra sự bất bình đẳng khi lao động có kỹ năng số được trả lương cao hơn, trong khi lao động thủ công truyền thống gặp khó khăn trong tìm kiếm việc làm.",
      image: doubleExposurePortrait
    },
    {
      title: "Giáo dục và phát triển nguồn nhân lực",
      content: "Để thích ứng với toàn cầu hóa và công nghệ, Việt Nam cần đổi mới giáo dục, phát triển nguồn nhân lực chất lượng cao. Tập trung vào giáo dục STEM, kỹ năng số, ngoại ngữ, tư duy phê phán và sáng tạo. Chương trình giáo dục cần liên kết chặt chẽ với nhu cầu thị trường lao động, khuyến khích học tập suốt đời, tạo cơ hội tiếp cận giáo dục bình đẳng cho mọi tầng lớp xã hội.",
      image: khainiemchatluongnguonnhanluc
    },
    {
      title: "Văn hóa và bản sắc dân tộc",
      content: "Toàn cầu hóa mang lại cơ hội tiếp cận văn hóa đa dạng, làm phong phú đời sống tinh thần người Việt. Tuy nhiên, cũng tạo ra thách thức trong bảo tồn bản sắc văn hóa dân tộc, lối sống truyền thống. Công nghệ số làm thay đổi cách giao tiếp, giải trí, học tập, tạo ra 'thế hệ Z' với văn hóa số đặc trưng, đòi hỏi cân bằng giữa tiếp thu cái mới và giữ gìn bản sắc văn hóa truyền thống.",
      image: vhxh
    },
    {
      title: "Bất bình đẳng xã hội và bao trùm",
      content: "Toàn cầu hóa và công nghệ có thể làm gia tăng bất bình đẳng xã hội nếu không có chính sách phù hợp. Khoảng cách số giữa thành thị và nông thôn, giữa các vùng kinh tế, giữa các nhóm xã hội cần được thu hẹp. Chính phủ cần có chính sách bao trùm, hỗ trợ các nhóm yếu thế tiếp cận công nghệ, tham gia vào nền kinh tế số, đảm bảo không ai bị bỏ lại phía sau trong quá trình phát triển.",
      image: chinhsach
    },
    {
      title: "Kết luận và định hướng tương lai",
      content: "Toàn cầu hóa và công nghệ là xu thế tất yếu, mang lại cả cơ hội và thách thức cho cơ cấu xã hội Việt Nam. Để tận dụng cơ hội và giảm thiểu thách thức, cần có chiến lược phát triển nguồn nhân lực, đổi mới giáo dục, hoàn thiện thể chế, thúc đẩy đổi mới sáng tạo, xây dựng xã hội số bao trùm. Đây là nền tảng quan trọng để Việt Nam phát triển nhanh, bền vững trong bối cảnh toàn cầu hóa và cách mạng công nghiệp 4.0.",
      image: trithucdoanhnhan
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

export default HCMFlipBook3;
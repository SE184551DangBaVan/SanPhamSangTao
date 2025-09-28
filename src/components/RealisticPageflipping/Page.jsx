import React, { forwardRef } from 'react';
import styles from './Page.module.css';

const Page = forwardRef(({ title, content, image, pageNumber, showBindingShadow = false, isLeftPage = true }, ref) => {
  return (
    <div className={`${styles.page} ${showBindingShadow ? styles.pageWithBinding : ''}`} ref={ref}>
      {showBindingShadow && (
        <div className={`${styles.bindingShadow} ${isLeftPage ? styles.leftPageShadow : styles.rightPageShadow}`}></div>
      )}
      
      <div className={styles.pageContent}>
        <div className={styles.pageHeader}>
          <h2>{title}</h2>
          {pageNumber && <span className={styles.pageNumber}>{pageNumber}</span>}
        </div>
        
        <div className={styles.pageBody}>
          {image && (
            <div className={styles.pageImage}>
              <img src={image} alt={title} />
            </div>
          )}
          
          <div className={styles.pageText}>
            <p>{content}</p>
          </div>
        </div>
        
        <div className={styles.pageFooter}>
          <p>Cơ cấu xã hội - giai cấp và Liên minh giai cấp ở Việt Nam</p>
        </div>
      </div>
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
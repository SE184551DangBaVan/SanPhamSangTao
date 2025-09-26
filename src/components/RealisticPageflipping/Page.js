import React, { forwardRef } from 'react';
import styles from './Page.module.css';


const Page = forwardRef(({ title, content, image, pageNumber }, ref) => {
  return (
    <div className={styles.page} ref={ref}>
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
          <p>Nội dung HCM Chương IV - Phần 4.1.1</p>
        </div>
      </div>
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
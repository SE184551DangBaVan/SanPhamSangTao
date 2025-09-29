import React from 'react';

const TestBook1 = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
      <h1>Test Book 1 - This should show when you click Book 1</h1>
      <p>If you see this, the routing to /doc-sach/sach-1 is working!</p>
    </div>
  );
};

const TestBook2 = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightgreen' }}>
      <h1>Test Book 2 - This should show when you click Book 2</h1>
      <p>If you see this, the routing to /doc-sach/sach-2 is working!</p>
    </div>
  );
};

export { TestBook1, TestBook2 };
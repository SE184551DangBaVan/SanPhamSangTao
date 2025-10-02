import './UserBookGuide.css'

import React from 'react'

export default function UserBookGuide({bookScrollProgress}) {
  return (
    <div className='user-guide'>
        <div className="user-guide-scroll">
            <div className="user-guide-text">Bạn có thể <span>cuộn chuột</span> để lật trang</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mouse ${bookScrollProgress +1000 >= document.documentElement.scrollHeight && 'end'}`}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
                <path d="M12 7l0 4" />

                <path d="M8 26l4 4l4 -4">
                    <animateTransform attributeType="XML" attributeName="transform" type="translate" values="0 0; 0 4; 0 0" dur="1s" repeatCount="indefinite" />
                </path>
            </svg>
        </div>
        <div className="user-guide-navigation-bar">

        </div>
    </div>
  )
}

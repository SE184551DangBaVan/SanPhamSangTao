import './DynamicBackground.css'

export default function DynamicBackground({ pageScroll }) {
  return (
    <div className='background-container'>
      {/* <div className="lensflare">
        <div className="source-spread"></div>
        <div className="source" ></div>
        <div className="source-beam"></div>
        <div className="c1"></div>
        <div className="c2"></div>
      </div> */}
      <div className="parallax_container">
        <div className="parallax-background" style={{transform: `translateY(${pageScroll*0.4}px) translateZ(-1px) scale(1.2)`}}>
          
        </div>
        <div className="parallax-foreground" style={{transform: `translateY(${pageScroll*0.8}px) translateZ(-1px) scale(1.2)`}}></div>
      </div>

      
    </div>
  )
}

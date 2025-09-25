import './DynamicBackground.scss'

export default function DynamicBackground({ pageScroll }) {
  return (
    <div className='background-container'>
      <div className="light">
        <div className="flare one">
          <div className="flare two">
            <div className="flare five"></div>
            <div className="flare six"></div>
            <div className="flare three">
              <div className="flare four">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="parallax_container" >
        <div className="parallax-background" style={{transform: `translateY(${pageScroll*0.4}px) translateZ(-1px) scale(1.2)`}}></div>
        <div className="parallax-foreground" style={{transform: `translateY(${pageScroll*0.8}px) translateZ(-1px) scale(1.2)`}}></div>
      </div>
    </div>
  )
}

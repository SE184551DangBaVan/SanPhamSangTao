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
      <div class="parallax_container">
        <div class="parallax_layer_1 basic_setting" style={{ transform: `translateY(${pageScroll*0.2}px) translateZ(-1px) rotateZ(3deg)` }}></div>
        <div class="parallax_layer_2 basic_setting" style={{ transform: `translateY(${pageScroll*1.8}px) translateZ(-10px) rotateZ(-2deg)` }}></div>
        <div class="parallax_layer_3 basic_setting" style={{ transform: `translateY(${pageScroll*2}px) translateZ(-30px) rotateZ(7deg)` }}></div>
        <div class="parallax_layer_4 basic_setting"  style={{ transform: `translateY(${pageScroll*0.9}px) translateZ(-5px) rotateZ(15deg)` }}></div>
        <button class="parallax_layer_5 basic_setting" style={{ transform: `translateY(${pageScroll/4}px) rotateZ(-15deg)` }}></button>
      </div>
    </div>
  )
}

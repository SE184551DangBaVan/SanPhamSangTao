import './TimelineCarousel.css'

export default function TimelineCarousel() {
  return (
    <div className="timeline-container" style={{overflow: 'hidden'}}>
      <div className="timeline-row">
        <div className="timeline-dimension" /*col-md-12 col-sm-12 col-xs-12">*/>
          <section className="main-timeline-section" style={{left: '0%'}}>
            <div className="timeline-start"></div>
            <div className="conference-center-line"></div>
            <div className="conference-timeline-content">
              <div className="timeline-article timeline-article-top">
                <div className="content-date">
                  <span>10-09-1990</span>
                </div>
                <div className="meta-date"></div>
                <div className="content-box">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                </div>
              </div>
              <div className="timeline-article timeline-article-bottom">
                <div className="content-date">
                  <span>10-09-1990</span>
                </div>
                <div className="meta-date"></div>
                <div className="content-box">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                </div>
              </div>
              <div className="timeline-article timeline-article-top">
                <div className="content-date">
                  <span>10-09-1990</span>
                </div>
                <div className="meta-date"></div>
                <div className="content-box">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                </div>
              </div>
              <div className="timeline-article timeline-article-bottom">
                <div className="content-date">
                  <span>10-09-1990</span>
                </div>
                <div className="meta-date"></div>
                <div className="content-box">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                </div>
              </div>
            </div>
            <div className="timeline-end"></div>
          </section>
        </div>
      </div>
    </div>
  )
}
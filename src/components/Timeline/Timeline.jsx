import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import timeline from "../../assets/svg/timeline.svg";
import "./Timeline.css";
import Aos from "aos";

const Timeline = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);

  const customTheme = {
    lineColor: "#ffff",
    fontFamily: "Work Sans",
    //     background: "rgba( 255, 255, 255, 0.1 )",
    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    // backdropFilter:" blur( 11px )",
    // -webkit-backdrop-filter: "blur( 11px )",
    // borderRadius: "10px",
    // border: "1px solid rgba( 255, 255, 255, 0.18 )"
  };

  const gradient = "rgba( 255, 255, 255, 0.1 )";

  return (
    <div className="timeline" id="timeline">
      <div className="timeline__container__out" data-aos="zoom-in">
        {/* <p className='panelist__heading' data-aos="fade-up">Timeline</p> */}
        {/* <img
          className='speaker__heading'
          src={timeline}
          alt=" "
          data-aos="zoom-in"
        ></img> */}
        Timeline
      </div>
      <div className="timeline__section" data-aos="zoom-in">
        <VerticalTimeline
          theme={customTheme}
          lineColor="#21b8cb"
          layout="2-columns"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="2011 - present"
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              // background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba(212, 76, 59, 0.25)",
              backdropFilter: " blur( 11px )",
              // -webkit-backdrop-filter: "blur( 11px )",
              borderRadius: "10px",
              // 
            }}
            contentArrowStyle={{
              // borderRight: "12px solid  #7f7f7fe3",
              display: "none",
            }}
          >
            <h3 className="vertical-timeline-element-title">Heading</h3>
            <div className="timeline_content"></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - present"
            style={{
              color: "#ffff",
            }}
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              // background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba(212, 76, 59, 0.25)",
              backdropFilter: " blur( 11px )",
              // -webkit-backdrop-filter: "blur( 11px )",
              borderRadius: "10px",
              
            }}
            contentArrowStyle={{ borderRight: "10px solid #7f7f7fe3" ,display:"none"}}
          >
            <h3 className="vertical-timeline-element-title">Heading</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="2011 - present"
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              // background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba(212, 76, 59, 0.25)",
              backdropFilter: " blur( 11px )",
              // -webkit-backdrop-filter: "blur( 11px )",
              borderRadius: "10px",
              
            }}
            contentArrowStyle={{
              borderRight: "12px solid  #7f7f7fe3",
              display:"none"
            }}
          >
            <h3 className="vertical-timeline-element-title">Heading</h3>
            <div className="timeline_content"></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - present"
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              // background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba(212, 76, 59, 0.25)",
              backdropFilter: " blur( 11px )",
              // -webkit-backdrop-filter: "blur( 11px )",
              borderRadius: "10px",
              
            }}
            contentArrowStyle={{
              // borderRight: "12px solid  #7f7f7fe3",
              display: "none",
            }}
          >
            <h3 className="vertical-timeline-element-title">Heading</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              // background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba(212, 76, 59, 0.25)",
              backdropFilter: " blur( 11px )",
              // -webkit-backdrop-filter: "blur( 11px )",
              borderRadius: "10px",
              
            }}
            contentArrowStyle={{
              // borderRight: "12px solid  #7f7f7fe3",
              display: "none",
            }}
            date="Final Day"
          >
            <h3 className="vertical-timeline-element-title">Heading</h3>

            <div className="timeline_content"></div>
            <p className="timeline__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Timeline;

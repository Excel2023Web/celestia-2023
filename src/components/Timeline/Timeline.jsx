import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import Aos from "aos";

const Timeline = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);

  const customTheme = {
    lineColor: "#ffff",
    fontFamily: "Work Sans",
  };

  const gradient = "rgba( 255, 255, 255, 0.1 )";

  return (
    <div className="timeline" id="timeline">
      <div className="timeline__container__out" data-aos="zoom-in">
        Schedule
      </div>
      <div className="timeline__section" data-aos="zoom-in">
        <VerticalTimeline
          theme={customTheme}
          lineColor="#21b8cb"
          layout="2-columns"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="9 : 30 am"
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba( 255, 255, 255, 0.1 )",
              borderColor: "transparent",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
              //
            }}
            contentArrowStyle={{
              display: "none",
            }}
          >
            <h3 className="vertical-timeline-element-title">Inauguration</h3>
            <div className="timeline_content"></div>
           
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="10:00 am - 10:30 am"
            style={{
              color: "#ffff",
            }}
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              borderRight: "10px solid #7f7f7fe3",
              display: "none",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              1st topic discussion
            </h3>
            <p>Importance of Space Exploration in Nations Growth</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="10:30 am - 10:45 am"
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  #7f7f7fe3",
              display: "none",
            }}
          >
            <h3 className="vertical-timeline-element-title">Q&A session</h3>
            <div className="timeline_content"></div>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="10:45 am - 11:15 am"
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              display: "none",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              2nd topic discussion
            </h3>
            <p>Latest Innovations in Space Technologies</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              display: "none",
            }}
            date="11:15 am - 11:30 am"
          >
            <h3 className="vertical-timeline-element-title">Q&A session</h3>

            <div className="timeline_content"></div>
            {/* <p className="timeline__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              display: "none",
            }}
            date="11:30 am - 11:45 am"
          >
            <h3 className="vertical-timeline-element-title">Break</h3>

            <div className="timeline_content"></div>
            {/* <p className="timeline__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              display: "none",
            }}
            date="11:45 am - 1:00 pm"
          >
            <h3 className="vertical-timeline-element-title">Q&A session</h3>

            <div className="timeline_content"></div>
            <p className="timeline__para">
              Direct questions for each speakers regarding their area of
              expertise.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              display: "none",
            }}
            date="1:00 pm - 2:00 pm"
          >
            <h3 className="vertical-timeline-element-title">Lunch break</h3>

            <div className="timeline_content"></div>
            <p className="timeline__para">
              Direct questions for each speakers regarding their area of
              expertise.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              display: "none",
            }}
            date="2:00 pm - 4:30 pm"
          >
            <h3 className="vertical-timeline-element-title">
              Workshop on Model Rocketry
            </h3>

            <div className="timeline_content"></div>
            {/* <p className="timeline__para">
            Direct questions for each speakers regarding their area of expertise.
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              color: "#ffff",
              background: gradient,
              border: "3px solid rgba(146, 146, 146, 0.00)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: " blur( 11px )",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              display: "none",
            }}
            date="4:30 pm - 6:00 pm"
          >
            <h3 className="vertical-timeline-element-title">VR, EXPO</h3>

            <div className="timeline_content"></div>
            <p className="timeline__para">
              Tea and snacks will be during this time
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;

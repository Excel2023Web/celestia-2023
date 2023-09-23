import React, { useEffect} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import timeline from "../../assets/svg/timeline.svg";
import "./Timeline.css"
import Aos from "aos";

const Timeline = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);

  const customTheme = {
    lineColor: "#ffff",
    fontFamily: 'Brygada 1918',
  };

  const gradient = "linear-gradient(54deg, rgba(127, 127, 127, 0.89) 9.06%, rgba(217, 217, 217, 0.00) 92.22%)";
 
  return (
    <div className="timeline" id="timeline">
      <div className='timeline__container__out'>
        {/* <p className='panelist__heading' data-aos="fade-up">Timeline</p> */}
        <img className='timeline__heading' src={timeline} alt=" " data-aos="fade-up"></img>
        </div>
        <div className="timeline__section" data-aos="fade-up">
            <VerticalTimeline theme={customTheme} lineColor="#21b8cb" layout='2-columns'>
                <VerticalTimelineElement
                className="vertical-timeline-element--work "
                date="2011 - present"
                contentStyle={{
                    color: "#ffff",
                    background: gradient,
                    border: "3px solid rgba(146, 146, 146, 0.00)",
                }}
                contentArrowStyle={{ 
                    borderRight: "12px solid  #000000" 
                }}
                >
                    <h3 className="vertical-timeline-element-title">Heading</h3> 
                    <div className="timeline_content"></div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2011 - present"
                    style={{
                        color:"#ffff",
                    }}
                    contentStyle={{  
                        color: "#ffff",
                        background: gradient,
                        border: "3px solid rgba(146, 146, 146, 0.00)",
                    }}
                    contentArrowStyle={{ borderRight: "10px solid #7f7f7fe3" }}
                    >
                    <h3 className="vertical-timeline-element-title">Heading</h3> 
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    date="2011 - present"
                    contentStyle={{ 
                        color: "#ffff", 
                        background: gradient,
                        border: "3px solid rgba(146, 146, 146, 0.00)",
                    }}
                    contentArrowStyle={{ 
                        borderRight: "12px solid  #000000" 
                    }}
                    >
                    <h3 className="vertical-timeline-element-title">Heading</h3> 
                    <div className="timeline_content"></div>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2011 - present"
                    contentStyle={{ 
                        color: "#ffff", 
                        background: gradient,
                        border: "3px solid rgba(146, 146, 146, 0.00)",
                    }}
                    contentArrowStyle={{ borderRight: "10px solid #7f7f7fe3" }}
                    >
                    <h3 className="vertical-timeline-element-title">Heading</h3> 
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ 
                        color: "#ffff", 
                        background: gradient,
                        border: "3px solid rgba(146, 146, 146, 0.00)",
                    }}
                    contentArrowStyle={{ 
                        borderRight: "12px solid #000000" 
                    }}
                    date="Final Day"
                    >
                    <h3 className="vertical-timeline-element-title">Heading</h3>

                    <div className="timeline_content"></div>
                    <p className="timeline__para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
          {/* </div> */}
        </div>
    </div>
  )
}

export default Timeline
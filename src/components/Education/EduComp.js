import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

function EduComp() {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="001"
        dateText="August 2022 – July 2023"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
          M.SC SOFTWARE ENGINEERING 
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>
          Innopolis University
        </h4>
       
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText=" September 2011 – October 2015"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
          B.SC STATISTICS
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>
          University of Ilorin
        </h4>
      
      </TimelineItem>
     
    </Timeline>
  );
}

export default EduComp;

import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

function EduComp() {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="001"
        dateText="11/2010 – Present"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
          React Developer, Udacity
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>
          Online Course Platform
        </h4>
        <p>
          Udacity for Enterprise is designed to quickly upskill your team with
          the knowledge and skills needed to succeed in the new digital
          revolution. Learn how Udacity can help develop the skills of your
          employees to meet today’s standards.
        </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="04/2009 – 11/2010"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
          JavaScript Algorithm and Data Structure, FreeCodeCamp
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>
          Online Course Platform
        </h4>
        <p>
          FreeCodeCamp is a community of millions of people around the world who
          are learning to code together. Learn to code with free online courses,
          programming projects, and interview preparation for developer jobs.
        </p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText="08/2008 – 11/2008"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
          JavaScript Algorithm and Data Structure, FreeCodeCamp
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>
          Online Course Platform
        </h4>
        <p>
          FreeCodeCamp is a community of millions of people around the world who
          are learning to code together. Learn to code with free online courses,
          programming projects, and interview preparation for developer jobs.
        </p>
      </TimelineItem>
    </Timeline>
  );
}

export default EduComp;

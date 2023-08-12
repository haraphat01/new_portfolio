import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

function ExpComp() {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="001"
        dateText="February 2020 – June 2022"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
          Frontend Developer, DeepIntel Ltd
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>Remote</h4>
        <ul>
        <li>I played a key role in building and maintaining a sophisticated wealth management platform using React. By leveraging my expertise in HTML, CSS, and JavaScript, I collaborated with cross-functional teams to design and implement a responsive and user-friendly interface.</li>
        <li>I worked closely with UX designers to create intuitive and visually appealing interfaces that provided users with a seamless experience.</li>
        <li>Collaborated with backend developers to ensure seamless integration of frontend and backend components on the users dashboard.</li>
        </ul>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="November 2016 – December 2018"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
        Technical Support Enginner, Coin Consults
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>Kwara, Nigeria</h4>
        <ul>
          <li>Resolved hardware and software technical issues, achieving a 98% customer satisfaction rating.</li>
          <li>Provided technical support to customers via phone, email, and live chat, ensuring prompt and effective resolution of their technical issues.</li>
          <li>Escalated critical issues to the appropriate teams and follow up to ensure timely resolution.</li>
          <li>Collaborated with the development team to identify and communicate recurring issues and suggest improvements to enhance product usability and customer satisfaction.</li>
          <li>Created and maintained technical documentation, reducing customer inquiries by 20%.</li>
          <li>Acted as a liaison between customers and development teams, providing feedback and insights to improve product quality and user experience.</li>
          
        </ul>
      </TimelineItem>
      
    </Timeline>
  );
}

export default ExpComp;

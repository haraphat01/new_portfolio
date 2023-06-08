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
        Product Manager, Coin Consults
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>Kwara, Nigeria</h4>
        <ul>
          <li>I increased the number of users to over 1000 in the first six months of launching the product</li>
          <li>Managed a team of two developers and ensured no milestone was missed, and the product was launched at the exact estimated date.</li>
          <li>I wrote the persona and user stories for the product, went to the field to collect the primary data needed during the requirement-gathering stage and developed the product’s requirement documents.</li>
          
        </ul>
      </TimelineItem>
      
    </Timeline>
  );
}

export default ExpComp;

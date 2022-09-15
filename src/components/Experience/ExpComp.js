import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

function ExpComp() {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="001"
        dateText="Sep 2021 – Present"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
          Frontend Developer, DeepIntel ltd
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>Lagos,Nigeria</h4>
        <p>
          Core frontend developer building worthsight application frontend, a
          wealth management platform that helps individuals to manage their
          assets and liability with ease. The platform shows basic analytics
          with graphs.
        </p>
        <p>Stack: Javascript, React</p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="Nov 2020 – present"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
          Frontend Developer, Omnienergy
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>Kwara,Nigeria</h4>
        <p>
          Building Omnienergy ecomerce application, for buying and selling solar
          energy system and accesories.
        </p>
        <p>Stack: Wordpress</p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText="Sep 2019 – Aug 2020"
        dateInnerStyle={{ background: "rgba(122, 209, 221, 1)" }}
        bodyContainerStyle={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "rgba(122, 209, 221, 1)" }}>
          Web Developer, Crescent Cafe
        </h3>
        <h4 style={{ color: "rgba(122, 209, 221, 1)" }}>Ilorin, Nigeria</h4>
        <p>Built a various websites based on the client requirements.</p>
        <p>Stack: Javascript, Html, and CSS</p>
      </TimelineItem>
    </Timeline>
  );
}

export default ExpComp;

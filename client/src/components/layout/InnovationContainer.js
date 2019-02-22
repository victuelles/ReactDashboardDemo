import React from "react";
import Iframe from "react-iframe";
const InnovationContainers = props => (
  <div className="header">
    <div className="illustration-wrapper">
      <img
        src="./img/rocket_new.jpg"
        alt=""
        width="50%"
        className="rocket-img"
      />
    </div>
    <div className="bg-header">
      <div className="spacer" />
      <div className="_12-col-flex centered">
        <div className="heading-wrapper">
          <h1 className="h1">Innovation Container</h1>
          <h2 className="h2-paragraph">
            Innovation is the key to a scalable, sustainable future for your
            business, Interplay helps you get your innovation projects executed
            faster
          </h2>
        </div>
      </div>
      <div className="_12-col-flex _50p centered" />
    </div>
    <div className="spacer" />
    <div className="divider" />
    <div className="spacer" />
    <div className="_12-col-flex _50p">
      <p className="paragraph">
        Most innovation projects don’t see the light of day. They die early
        before being turned into a solution. The ones that make it through have
        to pass several challenges including dependencies on emerging software
        from startups, requiring connectivity to enterprise data sources and
        systems. Additionally, they need to pass security, scalability and other
        checkmarks from the IT organization. This is where Interplay steps in..
        see the video for more details
      </p>
    </div>
    <div className="spacer" />
    <div align="center">
      <Iframe
        url="https://www.youtube.com/embed/0Vranfm_kmc"
        position="relative"
        width="100%"
        id="myId"
        className="myClassname"
        height="100%"
        styles={{
          height: "200px",
          width: "350px",
          padding: "5px",
          border: "1px white"
        }}
        allowFullScreen
      />
    </div>
    <div className="spacer" />
    <div className="divider" />
  </div>
);
export default InnovationContainers;

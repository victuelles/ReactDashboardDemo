import React from "react";
import Iframe from "react-iframe";

const TeamVideos = props => (
  <div className="logos">
    <div className="spacer" />
    <div className="_12-col-flex centered">
      <div className="heading-wrapper">
        <h2 className="h2-paragraph grey">
          Hear what our engineers have to say about InterPlay
        </h2>
      </div>
    </div>
    <div className="spacer" />
    <div className="_12-col-flex-logos">
      <Iframe
        url="https://www.youtube.com/embed/ST_4jDRWKIg"
        position="relative"
        width="336"
        height="189"
        styles={{
          height: "189px",
          width: "336px",
          padding: "5px",
          border: "1px white"
        }}
        allowFullScreen
      />

      <Iframe
        url="https://www.youtube.com/embed/JyhXVdrGsdY"
        position="relative"
        width="336"
        height="189"
        styles={{
          width: "336px",
          height: "189px",
          padding: "5px",
          border: "1px white"
        }}
        allowFullScreen
      />

      <Iframe
        url="https://www.youtube.com/embed/Uq_N3H5MYoI"
        position="relative"
        width="336"
        height="189"
        styles={{
          width: "336px",
          height: "189px",
          padding: "5px",
          border: "1px white"
        }}
        allowFullScreen
      />

      <Iframe
        url="https://www.youtube.com/embed/r_e4yeiDrN8"
        position="relative"
        width="336"
        height="189"
        styles={{
          width: "336px",
          height: "189px",
          padding: "5px",
          border: "1px white"
        }}
        allowFullScreen
      />

      <Iframe
        url="https://www.youtube.com/embed/MPGmMXavuJ0"
        position="relative"
        width="336"
        height="189"
        styles={{
          width: "336px",
          height: "189px",
          padding: "5px",
          border: "1px white"
        }}
        allowFullScreen
      />
      <Iframe
        url="https://www.youtube.com/embed/ZLfGAuKGZwI"
        position="relative"
        width="336"
        height="189"
        styles={{
          width: "336px",
          height: "189px",
          padding: "5px",
          border: "1px white"
        }}
        allowFullScreen
      />
    </div>
    <div className="half-spacer" />
    <div className="divider" />
  </div>
);

export default TeamVideos;

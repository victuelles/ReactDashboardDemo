import React from "react";

const Advantage = props => (
  <div className="platform">
    <div className="spacer" />
    <div className="_12-col-flex centered">
      <div className="heading-wrapper">
        <h3 className="h3">InterPlay Advantage</h3>
        <h2 className="h2-paragraph dark">
          The interplay platform offers capabilities to rapidly deploy your
          applications to scalable and secure cloud environments or run it
          on-premise
        </h2>
      </div>
    </div>
    <div className="spacer" />
    <div className="_12-col-flex _80p">
      <div className="platform-wrapper">
        <img
          src="./img/_platform-holder.svg"
          alt=""
          className="image-5"
          width="308"
        />

        <div className="platform-feature-container">
          <img src="./img/security.png" alt="" width="62" />
          <div className="text-container">
            <div className="item-title">Security</div>
            <p className="paragraph">
              Interplay has been tested with industry standard security tools.
              We pass most stringent security checkmarks enforced by IT teams.
            </p>
          </div>
        </div>

        <div className="platform-feature-container">
          <img src="./img/_discover.svg" alt="" />
          <div className="text-container">
            <div className="item-title">Scale</div>
            <p className="paragraph">
              Interplay has been stress tested to withstand thousands of
              simultaneous connections and data load requirements. Our
              multithreaded kernel takes care of scale and load handling.
            </p>
          </div>
        </div>

        <div className="platform-feature-container">
          <img src="./img/cloud.png" alt="" width="58" />
          <div className="text-container extra-margin">
            <div className="item-title">Inter Cloud</div>
            <p className="paragraph">
              Interplay enables the developer to run on many clouds such as AWS,
              Google Cloud and others. Our cloud dashboard makes it simple to
              manage and run your applications across many clouds.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="spacer" />
    <div className="spacer" />
  </div>
);

export default Advantage;

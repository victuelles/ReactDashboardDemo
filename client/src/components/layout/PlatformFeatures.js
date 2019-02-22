import React from "react";

const PlatformFeatures = props => (
  <div className="capabilities">
    <div className="spacer" />
    <div className="_12-col-flex centered">
      <div className="heading-wrapper">
        <h3 className="h3">Platform Features</h3>
      </div>
    </div>
    <div className="spacer" />
    <div className="_12-col-flex _60p horizontal">
      <div className="left-container">
        <img
          src="./img/ladyonleft.png"
          alt=""
          className="image-3"
          width="220"
        />
        <div className="small-title-mobile-only">Strategic Capabilities</div>
        <div className="capability-wrapper">
          <div className="item-title">Startup Connections</div>
          <p className="paragraph">
            'Pre-wrapped startup APIs to build quick digital applications
          </p>
        </div>
        <div className="capability-wrapper">
          <div className="item-title">Enterprise Connections</div>
          <p className="paragraph">
            Pre-wrapped connectors to Enterprise functions and APIs
          </p>
        </div>
        <div className="capability-wrapper">
          <div className="item-title">Fast Runtime</div>
          <p className="paragraph">
            Deploy the apps in our fast runtime middleware that is optimized for
            multi-threading. Our runtime executes applications faster than
            native Node.js or Node RED
          </p>
        </div>
        <div className="capability-wrapper">
          <div className="item-title">Messaging Applications</div>
          <p className="paragraph">
            Build chatbots for Facebook, Twitter, Slack etc. Deploy applications
            with fully functional messaging capabilities for chat bots, text
            messaging as well as Alexa
          </p>
        </div>
        <div className="capability-wrapper">
          <div className="item-title">Visual AI</div>
          <p className="paragraph">
            Write AI applications much faster using prebuilt components for
            image recognition, text analysis and many more
          </p>
        </div>
      </div>
      <div className="right-container">
        <img
          src="./img/guyonright.png"
          alt=""
          className="image-4"
          width="300"
          height="400"
        />

        <div className="small-title-mobile-only">Iterate Platform</div>

        <div className="capability-wrapper">
          <div className="item-title">Data Access</div>
          <p className="paragraph">
            Connect to popular databases such as MongoDB, Redshift, Oracle and
            others to retrieve data from internal and external sources
          </p>
        </div>

        <div className="capability-wrapper">
          <div className="item-title">Build any App</div>
          <p className="paragraph">
            Build Mobile Apps, API endpoints, Web Apps, IoT Apps and many others
          </p>
        </div>

        <div className="capability-wrapper">
          <div className="item-title">Multi-Programing Language Support</div>
          <p className="paragraph">Write functions in NodeJS and Python</p>
        </div>

        <div className="capability-wrapper">
          <div className="item-title">Low Code, Visual Workflow</div>
          <p className="paragraph">
            Visualize the business workflow of your application via the editor
          </p>
        </div>

        <div className="capability-wrapper">
          <div className="item-title">Prototype to Production</div>
          <p className="paragraph">
            Financial and Speed Benefits, Decrease prototyping costs by up to
            10X, Increase prototyping speed by up to 10X, Prototyping can be
            passed to IT for easier production deployment
          </p>
        </div>
      </div>
    </div>

    <div className="half-spacer" />
    <a href="#contact" className="button w-button">
      <strong>Let’s Get Started!</strong>
    </a>
    <div className="half-spacer" />
    <div className="spacer" />
  </div>
);
export default PlatformFeatures;

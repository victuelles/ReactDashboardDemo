import React, { Component, Fragment } from "react";

class DashboardInit extends Component {
  state = {};
  render() {
    const { packageSelected, packageValue } = this.props;
    console.log(packageSelected, packageValue);
    let displayPackage, imgSource, servers, instanceSize;
    switch (packageValue) {
      case "1":
        imgSource = "/img/size_micro.png";
        servers = [1, 1, 2];
        instanceSize = "MICRO";

        displayPackage = (
          <ul>
            <li> $30K/year license</li>
            <li> Interplay Essentials with 5 hrs customizations </li>
            <li> Micro servers computing power (dev/test/prod) </li>
            <li> No GPU</li>
          </ul>
        );
        console.log(displayPackage);
        break;
      case "2":
        imgSource = "/img/size_standard.png";
        servers = [10, 10, 20];
        instanceSize = "STANDARD";
        displayPackage = (
          <ul>
            <li> $120K/year license</li>
            <li> Interplay Essentials with 10 hrs customizations </li>
            <li> Large servers computing power (dev/test/prod) </li>
            <li> Starter GPU</li>
          </ul>
        );
        break;

      case "3":
        imgSource = "/img/size_big.png";
        servers = [100, 100, 200];
        instanceSize = "LARGE";

        displayPackage = (
          <ul>
            <li> $500K/year license</li>
            <li> Interplay Essentials with 50 hrs customizations </li>
            <li> Mega servers computing power (dev/test/prod) </li>
            <li> Full GPU Stack ( Tesla P100)</li>
            <li> On Premise Installation + Cloud</li>
          </ul>
        );

        break;

      default:
        imgSource = "/img/size_micro.png";
        servers = [1, 1, 2];
        instanceSize = "MICRO";
        displayPackage = (
          <ul>
            <li> $30K/year license</li>
            <li> Interplay Essentials with 5 hrs customizations </li>
            <li> Micro servers computing power (dev/test/prod) </li>
            <li> No GPU</li>
          </ul>
        );
    }

    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-4">
            <img
              className=" align-self-center"
              src={imgSource}
              alt="Generic placeholder  "
            />
          </div>

          <div className="col-sm-8">
            <h5 className="mt-0">
              <b>{packageSelected} Package</b>
            </h5>
            {displayPackage}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">{servers[0]} </h1>
                <p className=" h5 card-text text-center">Development Server</p>
                <p className=" h5 card-text text-center">
                  <i className="fas fa-server" />
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  {instanceSize} INSTANCE
                </li>
              </ul>
              <div className="card-body">
                <div className="text-center">
                  1 GB/ 1 CPU
                  <br /> 25GB SSD Disk
                  <br />1 TB transfer
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">{servers[1]} </h1>
                <p className=" h5 card-text text-center">Test Server</p>
                <p className=" h5 card-text text-center">
                  <i className="fas fa-server" />
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  {instanceSize} INSTANCE
                </li>
              </ul>
              <div className="card-body">
                <div className="text-center">
                  1 GB/ 1 CPU
                  <br /> 25GB SSD Disk
                  <br />1 TB transfer
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">{servers[2]} </h1>
                <p className=" h5 card-text text-center">Production Servers</p>
                <p className=" h5 card-text text-center">
                  <i className="fas fa-server" />
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  {instanceSize} INSTANCE
                </li>
              </ul>
              <div className="card-body">
                <div className="text-center">
                  1 GB/ 1 CPU
                  <br /> 25GB SSD Disk
                  <br />1 TB transfer
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <hr />
        <br />
        <h3>Essentials</h3>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src="/img/ip-faq.png"
                alt="Card cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    {" "}
                    AI Powered FAQ
                  </div>
                </h5>
                <p className="card-text">FAQ support via NLP </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Create
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src="/img/ip-support-magic.png"
                alt="Card cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Support Magic
                  </div>
                </h5>
                <p className="card-text">AI-powered customer support app </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Create
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src="/img/ip-voice-order.png"
                alt="Card cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Voice Purchase
                  </div>
                </h5>
                <p className="card-text">
                  {" "}
                  Purchasing through Alexa or Google Home devices{" "}
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Create
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src="/img/ip-recipe-ai.png"
                alt="Card cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Recipe App
                  </div>
                </h5>
                <p className="card-text">
                  {" "}
                  Personalized recommendations of recipes for the home user{" "}
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Create
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src="/img/ip-shipping-order.png"
                alt="Card cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Order App
                  </div>
                </h5>
                <p className="card-text">Tracking shipping orders </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Create
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src="/img/ip-attribute-magic.png"
                alt="Card cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    {" "}
                    Attribute Magic
                  </div>
                </h5>
                <p className="card-text">
                  Compare Product Attributes across popular retailers{" "}
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Create
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src="/img/ip-blockchain.png"
                alt="Card cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    {" "}
                    Block Chain Loyalty
                  </div>
                </h5>
                <p className="card-text">
                  Loyalty program through blockchain reward tokens{" "}
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Create
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src="/img/ip-custom.png"
                alt="Card cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Custom
                  </div>
                </h5>
                <p className="card-text">Build your own </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Create
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DashboardInit;

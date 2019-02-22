import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class CreateInstance extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user, isAuthenticated } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile) {
      console.log(user.name, profile.handle);
    }
    return (
      <div className="dashboard ">
        <h3 className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
          Create
        </h3>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src="./img/ip-faq.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    AI Powered FAQ
                  </div>
                </h5>
                <p className="card-text">FAQ support via NLP </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
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
                src="./img/ip-support-magic.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Support Magic
                  </div>
                </h5>
                <p className="card-text"> AI-powered customer support app</p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
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
                src="./img/ip-voice-order.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Voice Purchase
                  </div>
                </h5>
                <p className="card-text">
                  Purchasing through Alexa or Google Home devices
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
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
                src="./img/ip-recipe-ai.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Recipe App
                  </div>
                </h5>
                <p className="card-text">
                  Personalized recommendations of recipes for the home user
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
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
                src="./img/ip-shipping-order.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Order App
                  </div>
                </h5>
                <p className="card-text">Tracking shipping orders</p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
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
                src="./img/ip-attribute-magic.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Attribute Magic
                  </div>
                </h5>
                <p className="card-text">
                  Compare Product Attributes across popular retailers
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
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
                src="./img/ip-blockchain.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Block Chain Loyalty
                  </div>
                </h5>
                <p className="card-text">
                  Loyalty program through blockchain reward tokens
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
          <h1 className="h3 mb-0 text-gray-800">Custom</h1>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-danger shadow h-100  ">
              <img
                className="card-img-top"
                src="./img/ip-custom.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Custom{" "}
                  </div>
                </h5>
                <p className="card-text">Build your own</p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
                </a>{" "}
                <a href="#" className="btn btn-info">
                  {" "}
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
          <h1 className="h3 mb-0 text-gray-800">Choose Data Center</h1>
        </div>
        <div className="row">
          <div className="container-fluid mt-3">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active " data-toggle="tab" href="#home">
                  AWS EC3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " data-toggle="tab" href="#menu1">
                  Google Cloud Platform
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " data-toggle="tab" href="#menu2">
                  Packet Cloud
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="home" className="container-fluid  tab-pane active">
                <br />
                <h6>Asia Pacific </h6>
                <div className="row">
                  <div className="card align-items-center data-center">
                    <div className="card-body ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-kr "
                        alt="South Korean"
                      />
                      <p className="card-text text-center">Seoul</p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-sg "
                        alt="Singapore"
                      />
                      <p className="card-text text-center">Singapore</p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-au "
                        alt="Australia"
                      />
                      <p className="card-text text-center">Sydney</p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-jp "
                        alt="Japan"
                      />
                      <p className="card-text text-center">Tokyo</p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="page-heading" />
                <br />
                <h6>Europe </h6>
                <div className="row">
                  <div className="card align-items-center data-center">
                    <div className="card-body    text-center ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-de "
                        alt="South Korean"
                      />
                      <p className="card-text text-center">Frankfurt</p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-ie "
                        alt="Singapore"
                      />
                      <p className="card-text text-center">Ireland</p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-gb "
                        alt="Australia"
                      />
                      <p className="card-text text-center">London</p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-fr "
                        alt="Japan"
                      />
                      <p className="card-text text-center">Paris</p>
                    </div>
                  </div>
                </div>

                <br />
                <div className="page-heading" />
                <br />
                <h6>Americas </h6>
                <div className="row">
                  <div className="card align-items-center data-center">
                    <div className="card-body text-center ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-us "
                        alt="South Korean"
                      />
                      <p className="card-text text-center">N. Virginia</p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body text-center  ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-us "
                        alt="Singapore"
                      />
                      <p className="card-text text-center">Ohio</p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body text-center ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-us "
                        alt="Australia"
                      />
                      <p className="card-text text-center">N. California</p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body  text-center">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-us "
                        alt="Japan"
                      />
                      <p className="card-text text-center">Oregon</p>
                    </div>
                  </div>
                  <div className="card align-items-center data-center">
                    <div className="card-body ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-ca "
                        alt="Japan"
                      />
                      <p className="card-text text-center">Canada</p>
                    </div>
                  </div>
                  <div className="card align-items-center data-center">
                    <div className="card-body text-center ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-br "
                        alt="Japan"
                      />
                      <p className="card-text text-center">Sao Paulo</p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="page-heading" />
                <br />
              </div>

              <div id="menu1" className="container-fluid  tab-pane fade">
                <br />

                <div className="row">
                  <div className="card align-items-center data-center">
                    <div className="card-body text-center ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-fi "
                        alt="South Korean"
                      />
                      <p className="card-text text-center">
                        GCP - FINLAND <br />
                        (europe-north1)
                      </p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body  text-center">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-gb "
                        alt="Singapore"
                      />
                      <p className="card-text text-center">
                        {" "}
                        GCP -LONDON <br />
                        (europe-west2)
                      </p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body text-center ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-us "
                        alt="Australia"
                      />
                      <p className="card-text text-center">
                        GCP - Oregon <br />
                        (us-west1)
                      </p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body text-center  ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-sg "
                        alt="Japan"
                      />
                      <p className="card-text text-center">
                        GCP - SINGAPORE <br />
                        (asia-southeast1)
                      </p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body  text-center">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-au "
                        alt="Singapore"
                      />
                      <p className="card-text text-center">
                        GCP - SYDNEY <br />
                        (australia-southeast1)
                      </p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body text-center ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-us "
                        alt="Australia"
                      />
                      <p className="card-text text-center">
                        GCP - South Carolina <br />
                        (us-east1)
                      </p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body text-center  ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-sg "
                        alt="Japan"
                      />
                      <p className="card-text text-center">
                        GCP - SÃO PAULO <br /> (southamerica-east1)
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="page-heading" />
                <br />
              </div>

              <div id="menu2" className="container-fluid  tab-pane fade">
                <br />
                <div className="row">
                  <div className="card align-items-center data-center">
                    <div className="card-body text-center">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-de "
                        alt="South Korean"
                      />
                      <p className="card-text text-center">
                        Packet Cloud - Frankfurt
                      </p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body text-center">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-us "
                        alt="Singapore"
                      />
                      <p className="card-text text-center">
                        Packet Cloud - Los Angeles
                      </p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body text-center ">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-us "
                        alt="Australia"
                      />
                      <p className="card-text text-center">
                        Packet Cloud - Seattle
                      </p>
                    </div>
                  </div>

                  <div className="card align-items-center data-center">
                    <div className="card-body text-center">
                      <img
                        src="./img/blank.gif"
                        className="flag flag-ca "
                        alt="Japan"
                      />
                      <p className="card-text text-center">
                        Packet Cloud - Toronto
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="page-heading" />
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
          <h1 className="h3 mb-0 text-gray-800">Choose size</h1>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-warning shadow h-100  ">
              <img
                className="card-img-top"
                src="./img/size_nano.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Nano{" "}
                  </div>
                </h5>
                <p className="card-text">
                  Free Tier
                  <br />1 GB/ 1 CPU
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-warning shadow h-100  ">
              <img
                className="card-img-top"
                src="./img/size_micro.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Micro{" "}
                  </div>
                </h5>
                <p className="card-text">
                  Paid Tier
                  <br />2 GB/ 1 CPU
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-warning shadow h-100  ">
              <img
                className="card-img-top"
                src="./img/size_standard.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Standard{" "}
                  </div>
                </h5>
                <p className="card-text">
                  Paid Tier
                  <br />4 GB/ 2 CPUs
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
            <div className="card border-left-warning shadow h-100  ">
              <img
                className="card-img-top"
                src="./img/size_big.png"
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    Big{" "}
                  </div>
                </h5>
                <p className="card-text">
                  Paid Tier
                  <br />8 GB/ 4 CPUs
                </p>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Select
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
          <h1 className="h3 mb-0 text-gray-800">
            Please give your application a name.
          </h1>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              https://
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="hostname"
            aria-label="hostname"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              interplay.iterate.ai
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">Project Name</div>
          <div className="col-sm-9">
            <select className="custom-select">
              <option selected>Select project</option>
              <option value="1">Sales</option>
              <option value="2">Marketing</option>
              <option value="3">+ New Project name</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row ">
          <button type="button" className="btn btn-block btn-primary ">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

CreateInstance.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(CreateInstance);

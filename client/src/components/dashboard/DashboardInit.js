import React, { Component, Fragment } from "react";
import Essentials from "./Essentials";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEssentials } from "../../actions/essentialActions";

class DashboardInit extends Component {
  componentDidMount() {
    this.props.getEssentials();
  }
  render() {
    const { packageSelected, packageValue, essential } = this.props;
    console.log(packageSelected, packageValue);
    console.log("this.props", this.props);
    console.log("essential", essential);
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
        <div>
          <Essentials essentials={essential.essentials} />
        </div>
      </Fragment>
    );
  }
}

DashboardInit.propTypes = {
  essential: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  essential: state.essential
});

export default connect(
  mapStateToProps,
  { getEssentials }
)(DashboardInit);

import React, { Component } from "react";
import StepZilla from "react-stepzilla";

import Essentials from "./Essentials";
import DataCenters from "./DataCenters";
import ApplicationSizes from "./ApplicationSizes";
import ApplicationCreds from "./ApplicationCreds";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { getEssentials } from "../../actions/essentialActions";

let sectionStyleHeaderMasthead = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#fff",
  backgroundPosition: "0 0,100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  textAlign: "center"
};
class CreateApplication extends Component {
  componentDidMount() {
    this.props.getEssentials();
  }

  render() {
    // console.log("id=", this.props.match.params.id);
    //  console.log("essential=", this.state);
    //console.log("essential=", this.props.essential);
    const { essential } = this.props;
    let steps;
    let selectedApp = "";
    if (this.props.match.params.id === "new") {
      steps = [
        { name: "Essentials", component: <Essentials data={essential} /> },
        { name: "Data Centers", component: <DataCenters /> },
        { name: "Sizes", component: <ApplicationSizes /> },
        { name: "Credentials", component: <ApplicationCreds /> }
      ];
    } else {
      steps = [
        { name: "Data Centers", component: <DataCenters /> },
        { name: "Sizes", component: <ApplicationSizes /> },
        { name: "Credentials", component: <ApplicationCreds /> }
      ];

      essential.essentials.map(essential => {
        if (essential._id === this.props.match.params.id) {
          selectedApp = essential.name;
        }
      });
    }

    return (
      <div className="page" style={sectionStyleHeaderMasthead}>
        <div className="home-page">
          <header className=" text-center text-black">
            <div className="container" style={{ paddingTop: "20px" }}>
              <h2 className="masthead-heading mb-0">
                Create <strong>{selectedApp}</strong> application
              </h2>
              <div>
                <StepZilla steps={steps} />
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

CreateApplication.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  essential: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  essential: state.essential
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getEssentials }
)(CreateApplication);

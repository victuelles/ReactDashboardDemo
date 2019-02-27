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
    const { essential } = this.props;

    if (Object.keys(essential).length > 0) {
      // console.log(essential);
    }
    const steps = [
      { name: "Essentials", component: <Essentials data={essential} /> },
      { name: "Data Centers", component: <DataCenters /> },
      { name: "Sizes", component: <ApplicationSizes /> },
      { name: "Credentials", component: <ApplicationCreds /> }
    ];

    return (
      <div className="page" style={sectionStyleHeaderMasthead}>
        <div className="home-page">
          <header className=" text-center text-black">
            <div className="container" style={{ paddingTop: "20px" }}>
              <h2 className="masthead-heading mb-0">Create Application</h2>
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

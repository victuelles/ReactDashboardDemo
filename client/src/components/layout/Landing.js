import React, { Component } from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import InnovationContainer from "./InnovationContainer";
import PlatformFeatures from "./PlatformFeatures";
import Advantage from "./Advantage";
import TeamVideos from "./TeamVideos";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <InnovationContainer />
        <PlatformFeatures />
        <Advantage />
        <TeamVideos />
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Landing);

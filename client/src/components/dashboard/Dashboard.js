import React, { Component } from "react";
import DashboardLinks from "./DashboardLinks";
import DashboardInit from "./DashboardInit";
import Spinner from "../common/Spinner";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { getProjects } from "../../actions/projectActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
    this.props.getCurrentProfile();
  }

  render() {
    const { user, isAuthenticated } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { projects } = this.props.project;
    let hasInstance = false;
    const packages = ["Starter ", "Professional", "Enterprise"];

    //let package="";
    if (isAuthenticated && projects && projects.length > 0) {
      projects.map(
        proj => (hasInstance = proj.instance.length > 0 ? true : false)
      );
    }
    let packageSelected = packages[user.package - 1];
    console.log(packageSelected);
    //console.log("hasInstance", hasInstance);

    return (
      <div className="dashboard ">
        <h4 className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
          Dashboard
        </h4>
        {hasInstance ? (
          projects.map(proj => <DashboardLinks key={proj._id} project={proj} />)
        ) : profile === null || loading ? (
          <Spinner />
        ) : (
          <DashboardInit
            packageSelected={packageSelected}
            packageValue={user.package}
          />
        )}
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getProjects: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  project: state.project,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getProjects }
)(Dashboard);

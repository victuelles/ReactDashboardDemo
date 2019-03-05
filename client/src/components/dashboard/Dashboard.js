import React, { Component } from "react";
import DashboardLinks from "./DashboardLinks";
import DashboardInit from "./DashboardInit";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { getProjects } from "../../actions/projectActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user, isAuthenticated } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { projects } = this.props.project;

    let dashboardContent;
    if (profile) {
      //  console.log(user.name, profile.handle);
    }

    return (
      <div className="dashboard ">
        <h3 className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
          Dashboard
        </h3>
        {isAuthenticated &&
          projects &&
          (projects.length > 0 ? (
            projects.map(proj => (
              <DashboardLinks key={proj._id} project={proj} />
            ))
          ) : (
            <DashboardInit />
          ))}
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

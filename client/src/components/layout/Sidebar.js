import React, { Component } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProjectLinks from "./ProjectLinks";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { getProjects } from "../../actions/projectActions";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getProjects();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    // console.log(user.name);
    const { profile } = this.props.profile;
    const { projects } = this.props.project;

    if (profile) {
      // console.log(user.name, profile.handle);
    }
    const authLinks = (
      <Fragment>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/dashboard"
          />
          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <Link className="nav-link" to="/dashboard">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span> Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Groups </div>

          {isAuthenticated &&
            projects &&
            projects.map(proj => (
              <ProjectLinks key={proj._id} project={proj} />
            ))}

          <li className="nav-item">
            <a className="nav-link" href="/create-project">
              <i className="fas fa-plus" />
              <span className="new-project"> Create New Group</span>
            </a>
          </li>

          <hr className="sidebar-divider" />
          <li className="nav-item">
            <a className="nav-link " href="/create-application">
              <i className="fas fa-rocket" />
              <span className="new-project"> Create Application</span>
            </a>
          </li>
          <hr className="sidebar-divider" />

          <li className="nav-item">
            <Link className="nav-link" to="/tutorials">
              <i className="fas fa-fw fa-chart-area" />
              <span>Tutorials</span>
            </Link>
          </li>
        </ul>
      </Fragment>
    );
    const guestLinks = null;

    return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
  }
}
Sidebar.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  project: state.project,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getProjects }
)(Sidebar);

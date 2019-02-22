import React, { Component } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProjectLinks from "./ProjectLinks";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
class Sidebar extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(user.name);
    const { profile } = this.props.profile;

    if (profile) {
      console.log(user.name, profile.handle);
    }
    const authLinks = (
      <Fragment>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <Link className="nav-link" to="/dashboard">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Projects</div>

          {isAuthenticated &&
            profile &&
            profile.project.map(proj => (
              <ProjectLinks key={proj.name} project={proj} />
            ))}

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
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Sidebar);

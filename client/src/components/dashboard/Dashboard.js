import React, { Component } from "react";
import DashboardLinks from "./DashboardLinks";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
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
          Dashboard
        </h3>
        {/*
        {profile &&
          profile.project.map(proj => {
            //   console.log(proj.name);
            proj.instance.map(instance => {
              //  console.log(instance.name);
              // console.log(instance.data_center);
              instance.data_center.map(data_center => {
                //   console.log(data_center.name);
                //   console.log(data_center.size);
              });
            });
          })}
        */}
        {isAuthenticated &&
          profile &&
          profile.project &&
          profile.project.map(proj => (
            <DashboardLinks key={proj.name} project={proj} />
          ))}
      </div>
    );
  }
}

Dashboard.propTypes = {
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
)(Dashboard);

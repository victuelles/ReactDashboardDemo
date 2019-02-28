import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InstanceLink from "./InstanceLink";
import { getCurrentProfile } from "../../actions/profileActions";
import {
  getProjectInstance,
  clearProjectInstance
} from "../../actions/projectActions";

class Instance extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user, isAuthenticated } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { projects, instance } = this.props.project;
    let theInstance = null;
    if (projects) {
      for (let index in projects) {
        if (projects[index]._id === this.props.match.params.projId) {
          console.log("match", projects[index].projectname);
          for (let index2 in projects[index].instance) {
            if (
              projects[index].instance[index2]._id ===
              this.props.match.params.id
            ) {
              console.log("match", projects[index].instance[index2]);
              theInstance = projects[index].instance[index2];
            }
          }
        }
      }
    }
    return (
      <div>
        {/*   <h1>
          Project Id : {this.props.match.params.projId} <br />
          Instance Id :{this.props.match.params.id}
     </h1>*/}

        {isAuthenticated && theInstance && (
          <InstanceLink key={theInstance._id} instance={theInstance} />
        )}
      </div>
    );
  }
}

Instance.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  project: state.project
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Instance);

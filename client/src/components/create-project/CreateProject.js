import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import { addProject } from "../../actions/projectActions";

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectname: "",
      description: "",
      text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const projectData = {
      projectname: this.state.projectname,
      description: this.state.description,
      text: this.state.text
    };

    this.props.addProject(projectData, this.props.history);
    this.props.history.push("/dashboard");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="  text-center">Create New Group </h3>
              <p className="lead text-center">
                Let's get some information to make your Group stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Group Name"
                  name="projectname"
                  value={this.state.projectname}
                  onChange={this.onChange}
                  error={errors.projectname}
                  info="Enter a descriptive group name"
                />

                <TextFieldGroup
                  placeholder="Description of the group"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="What is this group about?"
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProject.propTypes = {
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addProject }
)(withRouter(CreateProject));

import React, { Fragment } from "react";
//import { Link } from "react-router-dom";

const DashboardLinks = ({ project }) => {
  // console.log(project);
  let subLink;

  if (project.instance) {
    subLink = project.instance.map(instance => (
      <div className=" mt-2 mb-2 col-sm-4  no-gutters" key={`${instance._id}`}>
        <div className="item card z-depth application-card">
          <div className="card-body">
            <a
              target="_blank"
              href={instance.url}
              className="replace-micro-link"
            >
              <h4 className="card-heading">{instance.instance_name}</h4>
            </a>
            <span>{instance.url}</span>

            <div className="block">
              <span className="section-title">Uptime</span>
              <p className="tobeReplacedTime">{instance.date}</p>
            </div>
          </div>
          <div className=" card-counters row">
            <div className="col   ">
              <span className="section-title">Instance Status: </span>
              <strong className="counts processidreplace">Active</strong>
            </div>
            <div className="col ">
              <span className="section-title">SSH Port: </span>
              <strong className="counts portreplace">
                {instance.ssh_port}
              </strong>
            </div>
          </div>

          <div className="card-footer text-right">
            <button
              type="button"
              className="btn btn-border btn-sm btn-link btn-circle ripple-effect btn-start  disabled "
            >
              <i className="fas fa-play" />
            </button>
            <button
              type="button"
              className="btn btn-border btn-sm btn-link btn-circle btn-stop ripple-effect "
            >
              <i className="fas fa-pause" />
            </button>
            <button
              type="button"
              className="btn btn-border btn-sm btn-link btn-circle ripple-effect"
            >
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <Fragment>
      <br />
      <h3>{project.projectname} </h3>
      <hr />
      <div className="row"> {subLink}</div>
    </Fragment>
  );
};
export default DashboardLinks;

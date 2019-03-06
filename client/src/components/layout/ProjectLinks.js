import React from "react";
import { Link } from "react-router-dom";

const ProjectLinks = ({ project }) => {
  let subLink;

  if (project.instance) {
    subLink = project.instance.map(instance => (
      <Link
        to={`/instance/${project._id}/${instance._id}`}
        key={`${instance._id}`}
        className="collapse-item"
      >
        {instance.instance_name}
      </Link>
    ));
  }

  return (
    <li className="nav-item">
      <Link
        className="nav-link collapsed"
        to="/"
        data-toggle="collapse"
        data-target={`#R${project._id}`}
        aria-expanded="true"
        aria-controls={`${project.projectname}`}
      >
        <i className="far fa-object-group" />
        <span> {project.projectname} </span>
      </Link>

      <div
        id={`R${project._id}`}
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          {subLink}

          <Link
            className="collapse-item"
            to={`/create-application/${project._id}`}
          >
            <i className="fas fa-plus" />
            <span className="new-project"> New Application</span>
          </Link>
        </div>
      </div>
    </li>
  );
};
export default ProjectLinks;

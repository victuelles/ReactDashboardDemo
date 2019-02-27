import React from "react";
import { Link } from "react-router-dom";

const ProjectLinks = ({ project }) => {
  //console.log(project);
  let subLink;
  let subLinks;
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
      <a
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target={`#R${project._id}`}
        aria-expanded="true"
        aria-controls={`${project.projectname}`}
      >
        <i className="fas fa-fw fa-cog" />
        <span>{project.projectname} </span>
      </a>
      <div
        id={`R${project._id}`}
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">{subLink}</div>
      </div>
    </li>
  );
};
export default ProjectLinks;

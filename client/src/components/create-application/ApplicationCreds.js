import React from "react";

const ApplicationCreds = props => (
  <div>
    <div className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
      <h3 className="h3 mb-0 text-gray-800">
        Please give your application a name.
      </h3>
    </div>

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon3">
          https://
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="hostname"
        aria-label="hostname"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2">
          interplay.iterate.ai
        </span>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">Project Name</div>
      <div className="col-sm-9">
        <select className="custom-select">
          <option defaultValue>Select project</option>
          <option value="1">Sales</option>
          <option value="2">Marketing</option>
          <option value="3">+ New Project name</option>
        </select>
      </div>
    </div>
    <br />
    <div className="row ">
      <button type="button" className="btn btn-block btn-primary ">
        Submit
      </button>
    </div>
  </div>
);
export default ApplicationCreds;

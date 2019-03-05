import React, { Component, Fragment } from "react";

class DashboardInit extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-4">
            <img
              className=" align-self-center"
              src="/img/size_standard.png"
              alt="Generic placeholder image"
            />
          </div>

          <div className="col-sm-8">
            <h5 className="mt-0">
              <b>Starter Package</b>
            </h5>
            <ul>
              <li> $30K/year license</li>
              <li> Interplay Essentials with 5 hrs customizations </li>
              <li> Micro servers computing power (dev/test/prod) </li>
              <li> No GPU</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">1 </h1>
                <p className=" h5 card-text text-center">Development Server</p>
                <p className=" h5 card-text text-center">
                  <i className="fas fa-server" />
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">MICRO INSTANCE</li>
              </ul>
              <div className="card-body">
                <div className="text-center">
                  1 GB/ 1 CPU
                  <br /> 25GB SSD Disk
                  <br />1 TB transfer
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">1 </h1>
                <p className=" h5 card-text text-center">Test Server</p>
                <p className=" h5 card-text text-center">
                  <i className="fas fa-server" />
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">MICRO INSTANCE</li>
              </ul>
              <div className="card-body">
                <div className="text-center">
                  1 GB/ 1 CPU
                  <br /> 25GB SSD Disk
                  <br />1 TB transfer
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">2 </h1>
                <p className=" h5 card-text text-center">Production Servers</p>
                <p className=" h5 card-text text-center">
                  <i className="fas fa-server" />
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">MICRO INSTANCE</li>
              </ul>
              <div className="card-body">
                <div className="text-center">
                  1 GB/ 1 CPU
                  <br /> 25GB SSD Disk
                  <br />1 TB transfer
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DashboardInit;

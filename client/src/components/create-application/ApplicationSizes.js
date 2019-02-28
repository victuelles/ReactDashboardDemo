import React from "react";

const ApplicationSizes = props => (
  <div>
    <h4 className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
      Application Size
    </h4>
    <div className="row">
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
        <div className="card border-left-warning shadow h-100  ">
          <img
            className="card-img-top"
            src="/img/size_nano.png"
            alt="Card  cap"
          />
          <div className="card-body ">
            <h5 className="card-title">
              <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                Nano{" "}
              </div>
            </h5>
            <p className="card-text">
              Free Tier
              <br />1 GB/ 1 CPU
            </p>
            <a href="#" className="btn btn-primary">
              {" "}
              Select
            </a>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
        <div className="card border-left-warning shadow h-100  ">
          <img
            className="card-img-top"
            src="/img/size_micro.png"
            alt="Card image cap"
          />
          <div className="card-body ">
            <h5 className="card-title">
              <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                Micro{" "}
              </div>
            </h5>
            <p className="card-text">
              Paid Tier
              <br />2 GB/ 1 CPU
            </p>
            <a href="#" className="btn btn-primary">
              {" "}
              Select
            </a>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
        <div className="card border-left-warning shadow h-100  ">
          <img
            className="card-img-top"
            src="/img/size_standard.png"
            alt="Card image cap"
          />
          <div className="card-body ">
            <h5 className="card-title">
              <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                Standard{" "}
              </div>
            </h5>
            <p className="card-text">
              Paid Tier
              <br />4 GB/ 2 CPUs
            </p>
            <a href="#" className="btn btn-primary">
              {" "}
              Select
            </a>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
        <div className="card border-left-warning shadow h-100  ">
          <img
            className="card-img-top"
            src="/img/size_big.png"
            alt="Card image cap"
          />
          <div className="card-body ">
            <h5 className="card-title">
              <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                Big{" "}
              </div>
            </h5>
            <p className="card-text">
              Paid Tier
              <br />8 GB/ 4 CPUs
            </p>
            <a href="#" className="btn btn-primary">
              {" "}
              Select
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
);
export default ApplicationSizes;

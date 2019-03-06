import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const EssentialCard = ({ item }) => {
  return (
    <Fragment>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters">
        <div className="card border-left-info shadow h-100  ">
          <img className="card-img-top" src={item.image_url} alt="Card cap" />
          <div className="card-body ">
            <h5 className="card-title">
              <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                {item.name}
              </div>
            </h5>
            <p className="card-text">{item.description} </p>
            <Link to="/dashboard" className="btn btn-primary">
              {" "}
              Select
            </Link>{" "}
            <Link to="/dashboard" className="btn btn-info">
              {" "}
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EssentialCard;

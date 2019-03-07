import React, { Component } from "react";
import { Link } from "react-router-dom";

class Essentials extends Component {
  render() {
    console.log(this.props.essentials);
    return (
      <div className="row">
        {this.props.essentials.map(essential => (
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 mb-4 no-gutters"
            key={essential._id}
          >
            {" "}
            <div className="card border-left-info shadow h-100  ">
              <img
                className="card-img-top"
                src={essential.image_url}
                alt="Card cap"
              />
              <div className="card-body ">
                <h5 className="card-title">
                  <div className="h5 font-weight-bold text-primary text-uppercase mb-1">
                    {" "}
                    {essential.name}
                  </div>
                </h5>
                <p className="card-text">{essential.description}</p>
                <Link
                  to={`/create-application/${essential._id}`}
                  className="btn btn-primary"
                >
                  {" "}
                  Create
                </Link>{" "}
                <Link to="/tutorials" className="btn btn-info">
                  {" "}
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Essentials;

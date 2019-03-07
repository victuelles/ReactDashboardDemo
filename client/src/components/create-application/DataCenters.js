import React, { Component, Fragment } from "react";

import DATA_CENTERS from "../../data/DataCenters";

class DataCenters extends Component {
  state = { dataCenter: DATA_CENTERS };
  cityClicked = e => {
    console.log(e.currentTarget.id);
  };
  render() {
    const { dataCenter } = this.state;
    console.log("dataCenter", dataCenter);
    let initTabActive = 0;
    let tabs = dataCenter.map((datacenter, index) => (
      <li className="nav-item" key={datacenter.id}>
        <a
          className={`nav-link  ${index === 0 ? "active" : ""}`}
          data-toggle="tab"
          href={`#${datacenter.pid}`}
        >
          {datacenter.provider}
        </a>
      </li>
    ));
    console.log(DATA_CENTERS);
    let tabsFolders = DATA_CENTERS.map((datacenter, index2) => (
      <div
        id={datacenter.pid}
        key={datacenter.id}
        className={`container-fluid  tab-pane fade  ${
          datacenter.id === 1 ? "active show" : ""
        }`}
      >
        <br />

        {datacenter.locations.map(loc => (
          <Fragment key={loc.name}>
            <div className="row">
              <h6>{loc.name} </h6>
            </div>
            <div className="row">
              {loc.country.map(city => (
                <button
                  className="card align-items-center data-center"
                  key={city.name}
                  city={city.name}
                  id={`${datacenter.pid}_${city.name}`}
                  onClick={this.cityClicked}
                >
                  <div className="card-body ">
                    <img
                      src="/img/blank.gif"
                      className={`flag ${city.image}`}
                      alt={city.name}
                    />
                    <p className="card-text text-center">{city.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    ));

    return (
      <div>
        <h4 className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
          Choose Data Center
        </h4>
        <div className="row">
          <div className="container-fluid mt-3">
            <ul className="nav nav-tabs">{tabs}</ul>

            <div className="tab-content">{tabsFolders}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default DataCenters;

import React from "react";

const DataCenters = props => (
  <div>
    <h4 className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
      Choose Data Center
    </h4>
    <div className="row">
      <div className="container-fluid mt-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active " data-toggle="tab" href="#home">
              AWS EC3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " data-toggle="tab" href="#menu1">
              Google Cloud Platform
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " data-toggle="tab" href="#menu2">
              Packet Cloud
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="home" className="container-fluid  tab-pane active">
            <br />
            <h6>Asia Pacific </h6>
            <div className="row">
              <div className="card align-items-center data-center">
                <div className="card-body ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-kr "
                    alt="South Korean"
                  />
                  <p className="card-text text-center">Seoul</p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-sg "
                    alt="Singapore"
                  />
                  <p className="card-text text-center">Singapore</p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-au "
                    alt="Australia"
                  />
                  <p className="card-text text-center">Sydney</p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-jp "
                    alt="Japan"
                  />
                  <p className="card-text text-center">Tokyo</p>
                </div>
              </div>
            </div>
            <br />
            <div className="page-heading" />
            <br />
            <h6>Europe </h6>
            <div className="row">
              <div className="card align-items-center data-center">
                <div className="card-body    text-center ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-de "
                    alt="South Korean"
                  />
                  <p className="card-text text-center">Frankfurt</p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-ie "
                    alt="Singapore"
                  />
                  <p className="card-text text-center">Ireland</p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-gb "
                    alt="Australia"
                  />
                  <p className="card-text text-center">London</p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-fr "
                    alt="Japan"
                  />
                  <p className="card-text text-center">Paris</p>
                </div>
              </div>
            </div>

            <br />
            <div className="page-heading" />
            <br />
            <h6>Americas </h6>
            <div className="row">
              <div className="card align-items-center data-center">
                <div className="card-body text-center ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-us "
                    alt="South Korean"
                  />
                  <p className="card-text text-center">N. Virginia</p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body text-center  ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-us "
                    alt="Singapore"
                  />
                  <p className="card-text text-center">Ohio</p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body text-center ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-us "
                    alt="Australia"
                  />
                  <p className="card-text text-center">N. California</p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body  text-center">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-us "
                    alt="Japan"
                  />
                  <p className="card-text text-center">Oregon</p>
                </div>
              </div>
              <div className="card align-items-center data-center">
                <div className="card-body ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-ca "
                    alt="Japan"
                  />
                  <p className="card-text text-center">Canada</p>
                </div>
              </div>
              <div className="card align-items-center data-center">
                <div className="card-body text-center ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-br "
                    alt="Japan"
                  />
                  <p className="card-text text-center">Sao Paulo</p>
                </div>
              </div>
            </div>
            <br />
            <div className="page-heading" />
            <br />
          </div>

          <div id="menu1" className="container-fluid  tab-pane fade">
            <br />

            <div className="row">
              <div className="card align-items-center data-center">
                <div className="card-body text-center ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-fi "
                    alt="South Korean"
                  />
                  <p className="card-text text-center">
                    GCP - FINLAND <br />
                    (europe-north1)
                  </p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body  text-center">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-gb "
                    alt="Singapore"
                  />
                  <p className="card-text text-center">
                    {" "}
                    GCP -LONDON <br />
                    (europe-west2)
                  </p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body text-center ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-us "
                    alt="Australia"
                  />
                  <p className="card-text text-center">
                    GCP - Oregon <br />
                    (us-west1)
                  </p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body text-center  ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-sg "
                    alt="Japan"
                  />
                  <p className="card-text text-center">
                    GCP - SINGAPORE <br />
                    (asia-southeast1)
                  </p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body  text-center">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-au "
                    alt="Singapore"
                  />
                  <p className="card-text text-center">
                    GCP - SYDNEY <br />
                    (australia-southeast1)
                  </p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body text-center ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-us "
                    alt="Australia"
                  />
                  <p className="card-text text-center">
                    GCP - South Carolina <br />
                    (us-east1)
                  </p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body text-center  ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-sg "
                    alt="Japan"
                  />
                  <p className="card-text text-center">
                    GCP - SÃO PAULO <br /> (southamerica-east1)
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div className="page-heading" />
            <br />
          </div>

          <div id="menu2" className="container-fluid  tab-pane fade">
            <br />
            <div className="row">
              <div className="card align-items-center data-center">
                <div className="card-body text-center">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-de "
                    alt="South Korean"
                  />
                  <p className="card-text text-center">
                    Packet Cloud - Frankfurt
                  </p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body text-center">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-us "
                    alt="Singapore"
                  />
                  <p className="card-text text-center">
                    Packet Cloud - Los Angeles
                  </p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body text-center ">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-us "
                    alt="Australia"
                  />
                  <p className="card-text text-center">
                    Packet Cloud - Seattle
                  </p>
                </div>
              </div>

              <div className="card align-items-center data-center">
                <div className="card-body text-center">
                  <img
                    src="/img/blank.gif"
                    className="flag flag-ca "
                    alt="Japan"
                  />
                  <p className="card-text text-center">
                    Packet Cloud - Toronto
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div className="page-heading" />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default DataCenters;

import React from "react";
import EssentialCard from "./EssentialCard";

const Essentials = props => (
  <div>
    <h4 className="d-sm-flex align-items-center justify-content-between mb-4 page-heading">
      Choose Application Type
    </h4>
    <div className="row">
      {props.data &&
        props.data.essentials.map(item => (
          <EssentialCard key={item.name} item={item} />
        ))}
    </div>
  </div>
);
export default Essentials;

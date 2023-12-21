import React from "react";

function Bag({ details }) {
  const { id, firstName, location } = details;

  return (
    <div className="content">
      <ul className="card">
        <li>bagId: {id}</li>
        <li>firstName: {firstName}</li>
        <li>location: {location}</li>
      </ul>
    </div>
  );
}

export default Bag;

import React from "react";
import doh from "../img/doh.png";

const NotFound = () => {
  return (
    <div className="container">
      <h2 className="title has-text-centered has-text-warning">
        Whoops! We couldn't find the page you were looking for...
      </h2>
      <img
        className="image"
        src={doh}
        alt="Homer Simpson"
        height="480"
        width="275"
        style={{ margin: "0 auto" }}
      />
    </div>
  );
};

export default NotFound;

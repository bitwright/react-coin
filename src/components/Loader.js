import React from "react";
import Spinner from "react-spinkit";

const Loader = () => {
  return (
    <div className="level">
      <div className="level-item">
        <Spinner name="pacman" color="#008dff" />
      </div>
    </div>
  );
};

export default Loader;

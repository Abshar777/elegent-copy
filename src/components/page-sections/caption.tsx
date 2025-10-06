import React from "react";

const Caption = () => {
  return (
    <div
      className="tt-scrolling-text scrt-color-reverse"
      data-scroll-speed="10"
      data-change-direction="true"
      data-opposite-direction="true"
    >
      <div className="tt-scrt-inner">
        <div className="tt-scrt-content">
           FREE COURSE
          <span className="tt-scrt-separator">
            <i className=" fa fa-graduation-cap"></i>
          </span>
          START TRADING NOW
          <span className="tt-scrt-separator">
            <i className=" fa fa-graduation-cap"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Caption;

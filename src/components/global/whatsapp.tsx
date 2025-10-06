"use client";
import React from "react";
import { IoChatbox } from "react-icons/io5";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/918971746253"
      className="align-items-center"
      style={{
        display: "flex",
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 99999999,
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <button id="btn-message" className="button-message">
        <div className="content-avatar">
          {/* <div className="status-user"></div> */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
           
          }} className="avatar flex item-center justify-center">
            <IoChatbox color="white"/>
          </div>
        </div>
        <div className="notice-content">
          <div className="username">Start Trading Now</div>
          <div className="lable-message">Enroll Now &nbsp;</div>
          <div className="user-id">@ElegantTradingAcademy</div>
        </div>
      </button>
    </a>
  );
};

export default WhatsappButton;

import React from "react";

const MailSend = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Check The Mail</h1>
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
        Email
      </a>
    </div>
  );
};

export default MailSend;

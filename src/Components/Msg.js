import React from "react";
import { Link } from "react-router-dom";

function Msg() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>
        Reset password link was send to your email. please check your mail !
      </h1>
      <Link to={"/"}>
        <button style={{ backgroundColor: "black", color: "white" }}>
          Home
        </button>
      </Link>
    </div>
  );
}

export default Msg;

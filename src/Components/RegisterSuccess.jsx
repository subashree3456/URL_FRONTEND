import React from "react";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
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
      <h1>RegisterSuccess</h1>
      <Link to={"/login"}>
        <button style={{ backgroundColor: "black", color: "white" }}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default RegisterSuccess;

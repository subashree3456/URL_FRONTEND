import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightyellow",
      }}
    >
      <h1>Hello there 😊😊😊.. this is <b>Reset Password</b> page</h1>
      <p>Rules To Follow:</p>
      <ol
        style={{
          textAlign: "center",
          listStyle: "none",
          fontFamily: "fantasy",
        }}
      >
        <br></br>
        <br></br>
        <Link to={"/register"}>
          <li>Creat An Account</li>
        </Link>
        <Link to={"/login"}>
          <li>Try To Login</li>
        </Link>
        <br></br>
        <li>Then Try The Forget Password</li>
      </ol>
    </div>
  );
};

export default Home;

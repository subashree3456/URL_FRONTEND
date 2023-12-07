import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    username: name,
    password,
  };

  const handleSubmit = () => {
    async function loginuser(data) {
      console.log(data);
      await fetch(`https://reset-password-back-end.vercel.app/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            toast.error("Error: " + data.error);
          } else {
            toast.success("Success: " + data.msg);
            navigate("/loginSuccess");
          }
        });
    }
    loginuser(data);
  };

  return (
    <div className="bodyl">
      <div className="boxsl">
        <div className="forml">
          <h2>Sign In</h2>
          <div className="inputBoxl">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required="required"
            />
            <span className="span">Username</span>
            <i></i>
          </div>
          <div className="inputBoxl">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
            <span className="spanl">Password</span>
            <i></i>
          </div>
          <div className="linksl">
            <Link className="link-doml" to={"/forgotpassword"}>
              <span>Forget Password</span>
            </Link>
            <Link className="link-doml" to={"/register"}>
              <span>SignUp</span>
            </Link>
          </div>
          <button onClick={() => handleSubmit(data)}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./register.css";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [conformPass, setConformPass] = useState("");
  const data = {
    name,
    username: name,
    email,
    password,
  };

  const handleSubmit = (data) => {
    if (password === conformPass) {
      async function registeruser(data) {
        console.log(data);
        await fetch(`https://reset-password-back-end.vercel.app/signup`, {
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
              navigate("/registerSuccess");
            }
          });
      }
      registeruser(data);
    } else {
      alert("password Not Match");
    }
  };
  return (
    <div className="bodys">
      <div className="box">
        <div className="form">
          <h2>Sign Up</h2>
          <div className="inputBox">
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required="required"
            />
            <span className="span">Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required="required"
            />
            <span className="span">Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
            <span className="span">Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              value={conformPass}
              name="password"
              onChange={(e) => setConformPass(e.target.value)}
              required="required"
            />
            <span className="span">ConForm Password</span>
            <i></i>
          </div>
          <div className="links">
            <span>Already Have Account</span>
            <Link className="link-dom" to={"/login"}>
              <span>Login</span>
            </Link>
          </div>
          <button onClick={() => handleSubmit(data)}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

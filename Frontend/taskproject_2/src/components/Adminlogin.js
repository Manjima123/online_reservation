import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import auth from "../service/auth-service";
import Form from "react-bootstrap/Form";
import image1 from "../assets/image1.jpeg";

const Adminlogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const Regi = (e) => {
    e.preventDefault();

    const val = {
      username,
      password,
    };

    auth
      .auth(val)
      .then((response) => {
        console.log("Feedback added successfully", response.data);
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("username", val.username);

        window.location.href = "/Adminprofile";
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {" "}
        <h1> Admin Login</h1>
      </div>
      <div class="container d-flex justify-content-center">
        <form
          className="form-control"
          style={{
            width: "20rem",
            height: "12rem",
            marginTop: "2rem",
            marginLeft: "1rem",
            // marginRight: "0.5rem",
            backgroundColor: "black",
          }}
        >
          <div class="form-group pt-2 pl-1">
            <label
              for="exampleInputName"
              style={{ fontSize: "17px", color: "white" }}
            >
              {" "}
              Enter your UserName
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div class="form-group pl-1">
            <label for="password" style={{ fontSize: "17px", color: "white" }}>
              Enter your Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div>
            <div class="row homecontactbtn">
              <button
                class="btn btn-primary homecontactbtn1"
                onClick={(e) => {
                  Regi(e);
                }}
                style={{
                  marginTop: "3rem",
                  fontFamily: "serif",
                  paddingTop: "10px",
                  width: "6rem",
                  alignItems: "center",
                  marginLeft: "110px",
                  fontSize: "20px",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;

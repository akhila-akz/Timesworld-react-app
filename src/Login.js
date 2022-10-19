import React, { useState } from "react";
import "./App.css";
import "./login.css";

import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

const Login = (props) => {
  const [login, setLogin] = useState(false);

  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    uname: "",
    password: "",
  });

  const validation = () => {
    let isError = false;

    let errorsMessages = {
      uname: "",
      password: "",
    };

    if (uname === "") {
      isError = true;
      errorsMessages.uname = "User name required";
    }
    if (password === "") {
      isError = true;
      errorsMessages.password = "Password is required";
    }
    setErrors(errorsMessages);
    return isError;
  };

  const submitHandler = () => {
    if (!validation()) {
      props.history.push("/home");
    }
  };

  return (
    <div className="container">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Row>
            <Col lg={9} md={12} sm={12} xs={12}>
              <h3 className="main-head">Sign In</h3>

              <p className="para-1">
                New User?{" "}
                <span>
                  <Link to="">Create new user</Link>
                </span>
              </p>

              <div>
                <input
                  type="text"
                  placeholder="Username Or Email"
                  name="uname"
                  value={uname}
                  onChange={(e) => {
                    setUname(e.target.value);
                    setErrors({
                      ...errors,
                      uname: "",
                    });
                  }}
                />
                <p className="errorMsg">{errors.uname}</p>

                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({
                      ...errors,
                      password: "",
                    });
                  }}
                />
                <p className="errorMsg">{errors.password}</p>

                <input type="checkBox" />
                <span className="check-text">keep me signed in</span>

                <button
                  type="submit"
                  className="signup-btn"
                  onClick={() => submitHandler()}
                >
                  Sign In
                </button>

                <div className="horizontal_dotted_line">Or Sign In With</div>
              </div>
              <div className="icons">
                <i className="bi-google "></i>
                <span>
                  <i className="bi-facebook " />
                </span>
                <span>
                  <i className="bi-linkedin" />
                </span>
                <span>
                  <i className="bi-twitter " />
                </span>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12} xs={12}>
              <div>
                <img
                  src={"assets/login-image.png"}
                  alt=""
                  style={{ marginTop: "105px" }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

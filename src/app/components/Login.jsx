import React, { useState } from "react";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

import {
  Col,
  Row,
  Form,
  Card,
  Button,
  Container,
} from "@themesberg/react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  focusOnFeild,
  validationError,
  hasValidationError,
} from "../custom-components/validation";

// import { Routes } from "../../routes";
import BgImage from "../assets/img/signin.svg";
import CompanyLogo from "../assets/Logo/Company_Logo.png";
import { CheckBoxField, InputField } from "../custom-components/Fields";
import { customRoutes } from "../routes/routes";
import { Loader } from "../custom-components/Loader";

export function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  const validate = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const newError = {};
    let positionFocus = "";
    if (!user.email || !user.email.trim()) {
      newError["email"] = " is Required";
      positionFocus = positionFocus || "email";
    } else if (!emailRegex.test(user.email)) {
      newError["email"] = "Please enter a valid email";
      positionFocus = positionFocus || "email";
    }
    if (!user.password || !user.password.trim()) {
      newError["password"] = "is Required";
      positionFocus = positionFocus || "password";
    }
    setErrors(newError);
    if (positionFocus) {
      focusOnFeild(positionFocus);
      return false;
    }
    return true;
  };

  const submit = () => {
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (location.pathname === customRoutes.adminLogin.path) {
          navigate(customRoutes.adminHome.path);
        }
        if (location.pathname === customRoutes.staffLogin.path) {
          navigate(customRoutes.StaffHome.path);
        }
        if (location.pathname === customRoutes.userLogin.path) {
          navigate(customRoutes.UserHome.path);
        }
        // if (location.pathname === customRoutes.guest.path) {
        //   navigate(customRoutes.guestHome.path);
        // }
      }, 3000);
    }
  }

  return (
    <div>
      <main>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
          <Container>
            {/* <p className="text-center">
              <Card.Link className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
                homepage
              </Card.Link>
            </p> */}
            <Row
              className="justify-content-center form-bg-image"
              style={{ backgroundImage: `url(${BgImage})` }}
            >
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="bg-white shadow-soft border rounded border-light p-5 pt-2 w-100 fmxw-500">
                  <div className="col-12 text-center">
                    <img
                      className="w-50"
                      src={CompanyLogo}
                      alt="company_name"
                    />
                  </div>

                  <div className="mb-4 mt-md-0">
                    <h3 className="mb-0 mt-3">Sign in to our platform</h3>
                  </div>
                  <Form className="mt-4">
                    <InputField
                      id="email"
                      showIcon={true}
                      validation={true}
                      iconName={faEnvelope}
                      type="email"
                      placeholder="email@gmail.com"
                      label="Your Email"
                      name="email"
                      error={
                        hasValidationError(errors, "email")
                          ? validationError(errors, "email")
                          : null
                      }
                      onChange={handleOnChange}
                      autoFocus={true}
                    />

                    <InputField
                      id="password"
                      label="Your Password"
                      type="password"
                      showIcon={true}
                      validation={true}
                      iconName={faUnlockAlt}
                      placeholder="Password"
                      name="password"
                      error={
                        hasValidationError(errors, "password")
                          ? validationError(errors, "password")
                          : null
                      }
                      onChange={handleOnChange}
                    />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <CheckBoxField
                        id="defaultCheck5"
                        htmlfor="defaultCheck5"
                        label="Remember Me"
                      />

                      <Card.Link className="small text-end" as={Link} to="/forgetPassword" >
                        Lost password?
                      </Card.Link>
                    </div>
                    <Button variant="primary" onClick={submit} className="w-100">
                      Sign in
                    </Button>
                  </Form>

                  {/* <div className="mt-3 mb-4 text-center">
                    <span className="fw-normal">or login with</span>
                  </div>
                  <div className="d-flex justify-content-center my-4">
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pill text-facebook me-2"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </Button>
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pill text-twitter me-2"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </Button>
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pil text-dark"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                  </div> */}
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="fw-normal">
                      Not registered?
                      <Card.Link
                        className="fw-bold"
                        as={Link}
                        to={
                          location.pathname === customRoutes.adminLogin.path
                            ? customRoutes.adminSignup.path
                            : location.pathname === customRoutes.userLogin.path
                              ? customRoutes.userSignUp.path
                              : location.pathname === customRoutes.staffLogin.path
                                ? customRoutes.staffSignup.path
                                : ""
                        }
                      >
                        {` Create account `}
                      </Card.Link>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Loader loading={loading} />
    </div>
  );
}

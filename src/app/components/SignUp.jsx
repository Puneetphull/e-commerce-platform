import React, { useState } from "react";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import {
  focusOnFeild,
  validationError,
  hasValidationError,
} from "../custom-components/validation";
import {Col,Row,Form,Button,Container,Card} from "@themesberg/react-bootstrap";
import BgImage from "../assets/img/signin.svg";
import { CheckBoxField, InputField } from "../custom-components/Fields";
import { Link, useLocation } from "react-router-dom";
import CompanyLogo from "../assets/Logo/Company_Logo.png";
import { Title } from "../custom-components/title";
import { VerifyEmail } from "./verfiyEmail";
import { customRoutes } from "../routes/routes";
import { Loader } from "../custom-components/Loader";

export const SignUp = (props) => {
  const location = useLocation();
  const [errors, setErrors] = useState([]);
  const [showVerifyEmail, setVerfiyEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signUpDetail, setSingnUpDetail] = useState({
    email: "",
    confirmPassword: "",
    password: "",
    terms: false,
  });
  const handleOnChange = (event) => {

    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      setSingnUpDetail({ ...signUpDetail, [name]: event.target.checked })
    }
    else {
      setSingnUpDetail({ ...signUpDetail, [name]: value });
    }
  };

  const validate = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const newError = {};
    let positionFocus = "";
    if (!signUpDetail.email || !signUpDetail.email.trim()) {
      newError["email"] = " is Required";
      positionFocus = positionFocus || "email";
    } else if (!emailRegex.test(signUpDetail.email)) {
      newError["email"] = "Please enter a valid email";
      positionFocus = positionFocus || "email";
    }
    if (!signUpDetail.password || !signUpDetail.password.trim()) {
      newError["password"] = "is Required";
      positionFocus = positionFocus || "password";
    }
    if (!signUpDetail.confirmPassword || !signUpDetail.confirmPassword.trim()) {
      newError["confirmPassword"] = "is Required";
      positionFocus = positionFocus || "confirmPassword";
    } else if (signUpDetail.password !== signUpDetail.confirmPassword) {
      newError["confirmPassword"] =
        "Password and Confirm password do not match";
      positionFocus = positionFocus || "confirmPassword";
    } if (!signUpDetail.terms) {
      newError["terms"] = "  is Required";
      positionFocus = positionFocus || "terms";
    }
    setErrors(newError);
    if (positionFocus) {
      focusOnFeild(positionFocus);
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setVerfiyEmail(true);
      }, 3000);

    }
  };

  return (
    <>
      {!showVerifyEmail ? (
        <main>
          <Title title="Register" />
          <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
            <Container>
              {/* <p className="text-center">
            <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
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

                  <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-5 pt-2 w-100 fmxw-500">
                    <div className="col-12 text-center">
                      <img
                        className="w-50"
                        src={CompanyLogo}
                        alt="company_name"
                      />
                    </div>
                    <div className="mb-4 mt-md-0">
                      <h3 className="mb-0 mt-3">Create an account</h3>
                    </div>
                    <Form className="mt-4">
                      <InputField
                        id={"email"}
                        showIcon={true}
                        iconName={faEnvelope}
                        validation={true}
                        placeholder="example@company.com"
                        label="Your Email"
                        type={"email"}
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
                        showIcon={true}
                        iconName={faUnlockAlt}
                        validation={true}
                        error={
                          hasValidationError(errors, "password")
                            ? validationError(errors, "password")
                            : null
                        }
                        type={"password"}
                        placeholder="Password"
                        name="password"
                        onChange={handleOnChange}
                      />

                      <InputField
                        id="confirmPassword"
                        label="Confirm Password"
                        showIcon={true}
                        iconName={faUnlockAlt}
                        validation={true}
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        error={
                          hasValidationError(errors, "confirmPassword")
                            ? validationError(errors, "confirmPassword")
                            : null
                        }
                        onChange={handleOnChange}
                      />

                      <CheckBoxField
                        name="terms"
                        id="terms"
                        required={true}
                        onChange={handleOnChange}
                        label="I agree to the terms and  conditions "
                        htmlFor="terms"
                        error={
                          hasValidationError(errors, "terms")
                            ? validationError(errors, "terms")
                            : null
                        }
                      />
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100"
                        onClick={onSubmit}
                      >
                        Sign up
                      </Button>
                    </Form>
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <span className="fw-normal">
                        Already have an account?
                        <Card.Link
                          as={Link}
                          to={location.pathname === customRoutes.adminSignup.path
                            ? customRoutes.adminLogin.path
                            : location.pathname === customRoutes.userSignUp.path
                              ? customRoutes.userLogin.path
                              : location.pathname === customRoutes.staffSignup.path
                                ? customRoutes.staffLogin.path
                                : ""}
                          className="fw-bold"
                        >
                          {` Login here `}
                        </Card.Link>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <Loader/> */}
        </main>
      ) : (
        <VerifyEmail email={signUpDetail.email} />
      )}

      <Loader loading={loading} />
    </>
  );
};

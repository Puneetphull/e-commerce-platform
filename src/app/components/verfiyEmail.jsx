import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { focusOnFeild,validationError,hasValidationError } from "../custom-components/validation";
import {
  Col,
  Row,
  Form,
  Button,
  Container,
} from "@themesberg/react-bootstrap";
import BgImage from "../assets/img/signin.svg";
import { useNavigate, useLocation } from "react-router-dom";
import Timer from "../custom-components/Timer";
import { customRoutes } from "../routes/routes";
import { InputField } from "../custom-components/Fields";
import { Loader } from "../custom-components/Loader";

export const VerifyEmail = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp,setotp]=useState("");
  const [errors, setErrors] = useState([]);
  const [loading,setLoading] = useState(false);


  const handleOnChange= (e)=>{
    const {value} = e.target;
    setotp(value);
  }

  const validate = () => {
    const newError = {};
    const numberReg =/^[0-9\b]+$/;
    let positionFocus = "";
    if (!otp || !otp.trim()) {
        newError["otp"] = " is Required";
        positionFocus = positionFocus || "otp";
    }
    else if(!numberReg.test(otp)){
      newError["otp"] = "Only numeric digit can  be enter";
      positionFocus = positionFocus || "otp";
    }
    else if(otp.length < 5){
      newError["otp"] = " Otp length must be 5 digit";
      positionFocus = positionFocus || "otp";

    }   
    setErrors(newError);
    if (positionFocus) {
       focusOnFeild(positionFocus);
        return false;
    }
    return true;
}


  const verifyOtp = () => {
   if(validate()){
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
  
   
    if (location.pathname === customRoutes.adminSignup.path) {
      navigate(customRoutes.adminDetail.path);
    }
    if (location.pathname === customRoutes.staffSignup.path) {
      navigate(customRoutes.staffDetail.path);
    }
    if (location.pathname === customRoutes.userSignUp.path) {
      navigate(customRoutes.userDetail.path);
    }
    if (location.pathname === customRoutes.guestSignup.path) {
      navigate(customRoutes.guestHome.path);
    }
  }, 3000);
  }
  };
  return (
    <main>
      <section className="bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            {/* <p className="text-center">
              <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
              </Card.Link>
            </p> */}
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3 className="mb-4">OTP is Send To Email </h3>
                <p>{props.email ? props.email : ""} </p>
                <Form>
                <InputField
                      id="otp"
                      showIcon={true}
                      name="otp"
                      validation={true}
                      iconName={faEnvelope}
                      type="text"
                      placeholder="Enter the Otp"
                      label="Your OTP"
                      maxLength="6"
                      error={hasValidationError(errors, "otp") ? 
                      validationError(errors,"otp")
                     : null}
                      onChange={handleOnChange}
                    />
                  
                  <Timer initialSecond={59} initialMinutes={0} />
                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={verifyOtp}
                  >
                    Verfiy OTP
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Loader loading={loading} />
    </main>
  );
};

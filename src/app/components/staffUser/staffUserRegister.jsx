import React, { useState } from "react";
import { Col, Row, Form, Button, Container } from "@themesberg/react-bootstrap";
import BgImage from "../../assets/img/signin.svg";
import { InputField, SelectField } from "../../custom-components/Fields";
import { Role, city } from "../../static.data";
import {
  focusOnFeild,
  validationError,
  hasValidationError,
} from "../../custom-components/validation";
import { useLocation,useNavigate } from "react-router-dom";
import { customRoutes } from "../../routes/routes";
import CompanyLogo from "../../assets/Logo/Company_Logo.png";

export function StaffUserRegister() {
  const location = useLocation();
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    role: "",
    location: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const validate = () => {
    const newError = {};
    let positionFocus = "";
    const numberReg =/^[0-9\b]+$/;
    if (!personalInfo.firstName || !personalInfo.lastName.trim()) {
      newError["firstName"] = " is Required";
      positionFocus = positionFocus || "firstName";
    }
    if (!personalInfo.lastName || !personalInfo.lastName.trim()) {
      newError["lastName"] = "is Required";
      positionFocus = positionFocus || "lastName";
    }
    if (!personalInfo.middleName || !personalInfo.middleName.trim()) {
      newError["middleName"] = "is Required";
      positionFocus = positionFocus || "middleName";
    }
    if (!personalInfo.phone || !personalInfo.phone.trim()) {
      newError["phone"] = "is Required";
      positionFocus = positionFocus || "phone";
    }
    else if(!numberReg.test(personalInfo.phone)){
      newError["phone"] = "Only numeric digit can  be enter";
      positionFocus = positionFocus || "phone";
    }
    if(location.pathname === customRoutes.staffDetail.path){
      if (!personalInfo.role || !personalInfo.role.trim()) {
        newError["role"] = "is Required";
        positionFocus = positionFocus || "role";
      }
      if (!personalInfo.location || !personalInfo.location.trim()) {
        newError["location"] = "is Required";
        positionFocus = positionFocus || "location";
      }
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
      if(location.pathname === customRoutes.staffDetail.path){
        navigate(customRoutes.StaffHome.path);
      }
      if(location.pathname === customRoutes.userDetail.path){
         navigate(customRoutes.UserHome.path);
      }
    }
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
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
                <h3 className="mb-0 mt-3">{location.pathname === customRoutes.staffDetail ? "Staff User Information" : "Personal Information"}</h3>
                </div>
                <Form className="mt-4">
                  <InputField
                    name="firstName"
                    label="First Name"
                    validation={true}
                    error={
                      hasValidationError(errors, "firstName")
                        ? validationError(errors, "firstName")
                        : null
                    }
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Enter the Name"
                  />
                  <InputField
                    name="middleName"
                    label="Middle Name"
                    validation={true}
                    error={
                      hasValidationError(errors, "middleName")
                        ? validationError(errors, "middleName")
                        : null
                    }
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Enter the Name"
                  />
                  <InputField
                    name="lastName"
                    label="Last Name"
                    validation={true}
                    error={
                      hasValidationError(errors, "lastName")
                        ? validationError(errors, "lastName")
                        : null
                    }
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Enter the Name"
                  />

                  <InputField
                    name="phone"
                    label="Phone Number"
                    validation={true}
                    error={
                      hasValidationError(errors, "phone")
                        ? validationError(errors, "phone")
                        : null
                    }
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Enter the Phone Number"
                  />

                  {location.pathname === customRoutes.staffDetail.path ? (
                    <>
                      <SelectField
                        label="Role"
                        defaultValue="Select Role"
                        options={Role}
                        name="role"
                        fieldName="name"
                        value="name"
                        error={
                          hasValidationError(errors, "role")
                            ? validationError(errors, "role")
                            : null
                        }
                        onChange={handleOnChange}
                        validation={true}
                      />
                      <SelectField
                        label="Location"
                        defaultValue="Select Location"
                        options={city}
                        fieldName="cityName"
                        name="location"
                        value="cityName"
                        error={
                          hasValidationError(errors, "location")
                            ? validationError(errors, "location")
                            : null
                        }
                        onChange={handleOnChange}
                        validation={true}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Button variant="primary" onClick={submit} className="w-100">
                    Finish
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

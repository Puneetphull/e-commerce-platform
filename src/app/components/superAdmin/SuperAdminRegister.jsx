import React, { useState } from "react";
import { Col, Row, Form, Container } from "@themesberg/react-bootstrap";
import BgImage from "../../assets/img/signin.svg";
import { InputField } from "../../custom-components/Fields";
import Address from "../../custom-components/Address";
import {
  focusOnFeild,
  validationError,
  hasValidationError,
} from "../../custom-components/validation";
import CompanyLogo from "../../assets/Logo/Company_Logo.png";

export function SuperAdminRegister() {
  const [errors, setErrors] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    companyName: "",
    websiteAddress: "",
    attention: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const validate = () => {
    const newError = {};
    let positionFocus = "";
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
    if (!personalInfo.companyName || !personalInfo.companyName.trim()) {
      newError["companyName"] = "is Required";
      positionFocus = positionFocus || "companyName";
    }
    if (!personalInfo.websiteAddress || !personalInfo.websiteAddress.trim()) {
      newError["websiteAddress"] = "is Required";
      positionFocus = positionFocus || "websiteAddress";
    }
    if (!personalInfo.attention || !personalInfo.attention.trim()) {
      newError["attention"] = "is Required";
      positionFocus = positionFocus || "attention";
    }

    setErrors(newError);
    if (positionFocus) {
      focusOnFeild(positionFocus);
      return false;
    }
    return true;
  };

  // const submit = () => {
  //   if (validate()) {
  //   }
  // };
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
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-5 pt-2  w-100 fmxw-500">
                <div className="col-12 text-center">
                  <img
                    className="w-50"
                    src={CompanyLogo}
                    alt="company_name"
                  />
                </div>
                <div className="mb-4 mt-md-0">
                  <h3 className="mb-0 mt-3">Personal Information</h3>
                </div>
                <Form className="mt-4">
                  <div className="row">
                    <InputField
                      name="firstName"
                      label="First Name"
                      validation={true}
                      error={
                        hasValidationError(errors, "firstName")
                          ? validationError(errors, "firstName")
                          : null
                      }
                      type="text"
                      onChange={handleOnChange}
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
                      error={
                        hasValidationError(errors, "lastName")
                          ? validationError(errors, "lastName")
                          : null
                      }
                      label="Last Name"
                      validation={true}
                      onChange={handleOnChange}
                      type="text"
                      placeholder="Enter the Name"
                    />
                  </div>
                  <div className="row">
                    <InputField
                      name="companyName"
                      label="Company Name"
                      validation={true}
                      error={
                        hasValidationError(errors, "companyName")
                          ? validationError(errors, "companyName")
                          : null
                      }
                      type="text"
                      onChange={handleOnChange}
                      placeholder="Enter the Name"
                    />
                    <InputField
                      name="websiteAddress"
                      label="website Address"
                      error={
                        hasValidationError(errors, "websiteAddress")
                          ? validationError(errors, "websiteAddress")
                          : null
                      }
                      validation={true}
                      type="text"
                      onChange={handleOnChange}
                      placeholder="Enter the Name"
                    />
                    <InputField
                      name="attention"
                      label="Attention"
                      validation={true}
                      error={
                        hasValidationError(errors, "attention")
                          ? validationError(errors, "attention")
                          : null
                      }
                      type="text"
                      onChange={handleOnChange}
                      placeholder="Enter the Name"
                    />
                  </div>


                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Address validate={validate} />

    </main>
  );
}

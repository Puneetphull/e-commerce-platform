import React, { useState } from "react";
import {
  DateTimePicker,
  InputField,
  SelectField,
} from "../custom-components/Fields";
import { Issues, AppointmentType } from "../data/problem";
import { city } from "../static.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  faClipboardList,
  faLocationDot,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  focusOnFeild,
  validationError,
  hasValidationError,
} from "../custom-components/validation";
// import { DoctorList } from "../data/doctorList";
import { Summary } from "../components/Summary";
import { Button, Card, Container, Image } from "@themesberg/react-bootstrap";
import { customRoutes } from "../routes/routes";

import BgImage from "../assets/img/apbackground.jpg";

import { RcTable } from "../custom-components/Table";

export function Appointment(props) {
  const columns = [
    { Header: "Doctor Name", accessor: "doctorName" },
    { Header: "experience", accessor: "experience" },
    { Header: "Timing", accessor: "timing" },
    { Header: "Status", accessor: "status" },
  ];
  const data = [
    {
      doctorName: "Anmol Rana",
      experience: "3 Years",
      timing: "10:00 AM - 17:00PM",
      status: "Active",
    },
    {
      doctorName: "Sourav Sharma",
      experience: "3 Years",
      timing: "10:00 AM - 17:00PM",
      status: "InActive",
    },
    {
      doctorName: "Paras Sharma",
      experience: "3 Years",
      timing: "10:00 AM - 17:00PM",
      status: "Suspended",
    },
    {
      doctorName: "Puneet Phull",
      experience: "3 Years",
      timing: "10:00 AM - 17:00PM",
      status: "Active",
    },
    {
      doctorName: "Anmol Rana",
      experience: "3 Years",
      timing: "10:00 AM - 17:00PM",
      status: "Active",
    },
    {
      doctorName: "Anmol Rana",
      experience: "3 Years",
      timing: "10:00 AM - 17:00PM",
      status: "InActive",
    },
  ];

  const navigate = useNavigate();
  const [appointmentDetail, setAppointmentDetail] = useState({
    issue: "",
    problem: "",
    location: "",
    appointmentType: "",
  });

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // const [time, setTime] = useState("");

  const [errors, setErrors] = useState([]);

  // const [showModal, setShowModal] = useState(props.show);

  const [steps, setStep] = useState(1);

  // const [showText, setShow] = useState(false);

  const validate = () => {
    const newError = {};
    let positionFocus = "";
    if (steps === 1) {
      if (!appointmentDetail.issue || !appointmentDetail.issue.trim()) {
        newError["issue"] = " is Required";
        positionFocus = positionFocus || "issue";
      }
      if (appointmentDetail.issue === "10") {
        if (!appointmentDetail.problem || !appointmentDetail.problem.trim()) {
          newError["problem"] = "is Required";
          positionFocus = positionFocus || "problem";
        }
      }
    }
    if (steps === 2) {
      if (!appointmentDetail.location || !appointmentDetail.location.trim()) {
        newError["location"] = "is Required";
        positionFocus = positionFocus || "location";
      }
      if (
        !appointmentDetail.appointmentType ||
        !appointmentDetail.appointmentType.trim()
      ) {
        newError["appointmentType"] = "is Required";
        positionFocus = positionFocus || "appointmentType";
      }
    }

    setErrors(newError);
    if (positionFocus) {
      focusOnFeild(positionFocus);
      return false;
    }
    return true;
  };

  const handleOnchange = (e) => {
    let { name, value } = e.target;
    console.log(e.target.value);
    setAppointmentDetail({ ...appointmentDetail, [name]: value });
    // if (name === "issue" && value === "10") {
    //   setShow(true);
    // } else if (name === "issue" && value !== "10") {
    //   setShow(false);
    // }
  };

  // const onHideModal = () => {
  //   setShowModal(false);
  //   props.setShowModal(false);
  // };

  const previousStep = () => {
    if (steps !== 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const changeStep = (stepId) => {
    if (validate() && steps < 3) {
      setStep((preState) => preState + 1);
    }
  };

  const Finish = () => {
    toast.success(" Appointment Success Booked!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      navigate(customRoutes.adminHome.path);
    }, 3000);
  };
  return (
    <main>
      <section className="d-flex align-items-center my-5 mb-lg-5">
        <Container>
          <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-5 pt-2 w-100 fmxw-1000">
            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x mt-4">
              <div
                class={`step ${steps === 2 || steps === 3 ? "completed" : ""}`}
              >
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </div>
                <h4 class="step-title">Step 1</h4>
              </div>
              <div class={`step ${steps === 3 ? "completed" : ""}`}>
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                </div>
                <h4 class="step-title">Step 2</h4>
              </div>
              <div class="step">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <FontAwesomeIcon icon={faClipboardList} />
                  </div>
                </div>
                <h4 class="step-title">Step 3</h4>
              </div>
              {/* <div class="step">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-home"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Product Delivered</h4>
                </div> */}
            </div>
            <div className="d-flex">
              <div className="col-md-6">
                {steps === 1 ? (
                  <>
                    <SelectField
                      label="Select the Problem"
                      defaultValue="Select the Problem"
                      options={Issues}
                      className=""
                      name="issue"
                      fieldName="name"
                      value="id"
                      validation={true}
                      onChange={handleOnchange}
                      error={
                        hasValidationError(errors, "issue")
                          ? validationError(errors, "issue")
                          : null
                      }
                      selectedValue={appointmentDetail.issue}
                    />

                    <InputField
                      parentClassName=""
                      className="col-xl-6"
                      name="problem"
                      label="Explain the issue"
                      type="text"
                      validation={true}
                      placeholder="Enter the Description"
                      as="textarea"
                      rows={4}
                      onChange={handleOnchange}
                      error={
                        hasValidationError(errors, "problem")
                          ? validationError(errors, "problem")
                          : null
                      }
                      value={appointmentDetail.problem}
                    />
                  </>
                ) : (
                  <></>
                )}

                {steps === 2 ? (
                  <>
                    <SelectField
                      label="Select the Location"
                      defaultValue="Select the Location"
                      options={city}
                      className=""
                      name="location"
                      fieldName="cityName"
                      value="cityName"
                      validation={true}
                      onChange={handleOnchange}
                      error={
                        hasValidationError(errors, "location")
                          ? validationError(errors, "location")
                          : null
                      }
                      selectedValue={appointmentDetail.location}
                    />
                    <SelectField
                      label="When do You need the appointment"
                      defaultValue="Select the appointment Type"
                      options={AppointmentType}
                      name="appointmentType"
                      className=""
                      fieldName="name"
                      value="id"
                      validation={true}
                      onChange={handleOnchange}
                      error={
                        hasValidationError(errors, "appointmentType")
                          ? validationError(errors, "appointmentType")
                          : null
                      }
                      selectedValue={appointmentDetail.appointmentType}
                    />
                  </>
                ) : (
                  <></>
                )}

                {steps === 3 ? <Summary /> : <></>}
              </div>

              {steps === 1 || steps === 2 ? (
                <div className="col-md-6">
                  <Image src={BgImage} height={"350px"} width={"450px"} />
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              className={`d-flex ${
                steps === 1 ? "justify-content-end" : "justify-content-between"
              } mt-3`}
            >
              {steps > 1 ? <Button onClick={previousStep}>Back</Button> : <></>}

              <Button
                variant="secondary"
                onClick={steps === 3 ? Finish : changeStep}
              >
                {steps === 3 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
          {appointmentDetail.appointmentType === "2" && steps === 2 ? (
            <>
              <Card className="mt-4 mb-2">
                <Card.Body>
                  <div className="d-flex justify-content-around">
                    <div>
                      <DateTimePicker
                        label="Start Date"
                        icon={faCalendarAlt}
                        setDate={setStartDate}
                        dateFormat="MM/DD/YYYY"
                        date={startDate}
                      />
                    </div>
                    <div>
                      <DateTimePicker
                        label="End Date"
                        icon={faCalendarAlt}
                        setDate={setEndDate}
                        dateFormat="MM/DD/YYYY"
                        date={endDate}
                      />
                    </div>
                    <div>
                      <DateTimePicker
                        label="Time"
                        timeFormat={true}
                        dateFormat={false}
                        icon={faClock}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <RcTable columns={columns} data={data} />
                </Card.Body>
              </Card>
            </>
          ) : (
            <></>
          )}
        </Container>
        {/* <Container>
          <Row className="justify-content-center form-bg-image" 
                style={{ backgroundImage: `url(${BgImage})` }} >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-5 pt-2 w-100 fmxw-500">
              <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x mt-4">
                <div class="step completed">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                  </div>
                  <h4 class="step-title">Personal Information</h4>
                </div>
                <div class="step completed">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                  </div>
                  <h4 class="step-title">Location</h4>
                </div>
                <div class="step completed">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <FontAwesomeIcon icon={faClipboardList} />
                    </div>
                  </div>
                  <h4 class="step-title">Summary</h4>
                </div>
                <div class="step">
                <div class="step-icon-wrap">
                  <div class="step-icon"><i class="pe-7s-home"></i></div>
                </div>
                <h4 class="step-title">Product Delivered</h4>
              </div>
              </div>

              {steps === 1 ? (
                <>
                  <SelectField
                    label="Select the Problem"
                    defaultValue="Select the Problem"
                    options={Issues}
                    name="issue"
                    fieldName="name"
                    value="id"
                    validation={true}
                    onChange={handleOnchange}
                    error={
                      hasValidationError(errors, "issue")
                        ? validationError(errors, "issue")
                        : null
                    }
                    selectedValue={appointmentDetail.issue}
                  />

                  <InputField
                    className="col-xl-6"
                    name="problem"
                    label="Explain the issue"
                    type="text"
                    validation={true}
                    placeholder="Enter the Description"
                    as="textarea"
                    rows={4}
                    onChange={handleOnchange}
                    error={
                      hasValidationError(errors, "problem")
                        ? validationError(errors, "problem")
                        : null
                    }
                  />
                </>
              ) : (
                <></>
              )}
              {steps === 2 ? (
                <>
                  <SelectField
                    label="Select the Location"
                    defaultValue="Select the Location"
                    options={city}
                    name="location"
                    fieldName="cityName"
                    value="cityName"
                    validation={true}
                    onChange={handleOnchange}
                    error={
                      hasValidationError(errors, "location")
                        ? validationError(errors, "location")
                        : null
                    }
                    selectedValue={appointmentDetail.location}
                  />
                  <SelectField
                    label="When do You need the appointment"
                    defaultValue="Select the appointment Type"
                    options={AppointmentType}
                    name="appointmentType"
                    fieldName="name"
                    value="id"
                    validation={true}
                    onChange={handleOnchange}
                    error={
                      hasValidationError(errors, "appointmentType")
                        ? validationError(errors, "appointmentType")
                        : null
                    }
                  />

                  
                </>
              ) : (
                <></>
              )}
              {steps === 3 ? <Summary /> : <></>}

              <div className="d-flex justify-content-between mt-3 ">
                {steps > 1 ? (
                  <Button onClick={previousStep}>Back</Button>
                ) : (
                  <></>
                )}

                <Button onClick={steps === 3 ? Finish : changeStep}>
                  {steps === 3 ? "Finish" : "Next"}
                </Button>
              </div>
              </div>
              <ToastContainer />
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container> */}
        <ToastContainer />
      </section>
    </main>
  );
}

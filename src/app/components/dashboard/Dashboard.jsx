import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faPlus,
  faTasks,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Dropdown } from "@themesberg/react-bootstrap";
import { PageVisitsTable } from "../../custom-components/Tables";
import { patientHeader, patientList } from "../../data/tables";

export function Dashboard() {
  const [showAppointment, setAppointment] = useState(false);

  const showModal = () => {
    setAppointment(true);
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle
            as={Button}
            variant="primary"
            size="sm"
            className="me-2"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            New
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> Add Staff
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold" onClick={showModal}>
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Book
              Appointment
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview
              Security
            </Dropdown.Item>
            <Dropdown.Divider />

            {/* <Dropdown.Item className="fw-bold">
          <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Upgrade to Pro
        </Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>

        {/* <ButtonGroup>
      <Button variant="outline-primary" size="sm">Share</Button>
      <Button variant="outline-primary" size="sm">Export</Button>
    </ButtonGroup> */}
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          {/* <SalesValueWidget
        title="Sales Value"
        value="10,567"
        percentage={10.57}
      /> */}
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          {/* <SalesValueWidgetPhone
        title="Sales Value"
        value="10,567"
        percentage={10.57}
      /> */}
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          {/* <CounterWidget
        category="Total Patients"
        title="10000"
        period="start - till Now"
        area="USA"
        percentage={18.2}
        icon={faChartLine}
        iconColor="shape-secondary"
      /> */}
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          {/* <CounterWidget
        category="This Month Revenue"
        title="$43,594"
        period="Monthly"
        percentage={10.4}
        icon={faCashRegister}
        iconColor="shape-tertiary"
      /> */}
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          {/* <CircleChartWidget
        title="All Users"
        data={trafficShares}
         /> */}
        </Col>
      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <PageVisitsTable
                    title={"Apointment"}
                    headerCell={patientHeader}
                    data={patientList}
                  />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  {/* <TeamMembersWidget title={"Doctors In Hospital"} /> */}
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  {/* <ProgressTrackWidget title={"Track Record Presence"} /> */}
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  {/* <BarChartWidget
                title="Total Appointment Toady"
                value={30}
                percentage={18.2}
                data={totalOrders} 
                /> */}
                </Col>

                <Col xs={12} className="px-0 mb-4">
                  {/* <RankingWidget /> */}
                </Col>

                <Col xs={12} className="px-0">
                  {/* <AcquisitionWidget /> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

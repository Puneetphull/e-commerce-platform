import React, { useState } from "react";
import { BreadCrumbs } from "../custom-components/BreadCrumbs";
import {
  Col,
  Row,
  Card,
  ProgressBar,
  Button,
  Image,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { RcTable } from "../custom-components/Table";
import Pic1 from "../assets/doctor/profile-picture-1.jpg";
import Pic2 from "../assets/doctor/profile-picture-2.jpg";
import Pic3 from "../assets/doctor/profile-picture-3.jpg";
import Pic4 from "../assets/doctor/profile-picture-4.jpg";
import Pic5 from "../assets/doctor/profile-picture-5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export function TaskList() {
  const columns = [
    { Header: "Task Name", accessor: "taskName" },
    { Header: "Deadline", accessor: "deadline" },
    {
      Header: "Status",
      accessor: "status",
      Cell: (props) => {
        return (
          <>
            <Button
              variant={
                props.value === "Assigned"
                  ? "danger"
                  : props.value === "InProgress"
                  ? "secondary"
                  : "success"
              }
              size="sm"
              className="m-2"
            >
              {props.value}
            </Button>
          </>
        );
      },
    },
    {
      Header: "Working Time",
      accessor: "workingTime",
      Cell: (props) => {
        return (
          <>
            <ProgressBar variant="primary" now={props.value} />
          </>
        );
      },
    },
    {
      Header: "Assigne",
      accessor: "assigne",
      Cell: (props) => {
        return (
          <>
            <Image
              className="avatar rounded-circle me-3"
              height={"40"}
              width={"40"}
              src={props.value}
            />
          </>
        );
      },
    },
  ];
  const data = [
    {
      taskName: "Setup meeting with nurency",
      deadline: "10 Dec 2023",
      status: "InProgress",
      workingTime: "15",
      assigne: Pic1,
    },
    {
      taskName: "Meeting with full team",
      deadline: "10 Dec 2023",
      status: "InProgress",
      workingTime: "25",
      assigne: Pic2,
    },
    {
      taskName: "Clean up process",
      deadline: "10 Dec 2023",
      status: "Assigned",
      workingTime: "45",
      assigne: Pic3,
    },
    {
      taskName: "Check Appointment with patient",
      deadline: "10 Dec 2023",
      status: "Active",
      workingTime: "65",
      assigne: Pic1,
    },
    {
      taskName: "Setup meeting with nurency",
      deadline: "10 Dec 2023",
      status: "Active",
      workingTime: "85",
      assigne: Pic4,
    },
    {
      taskName: "Setup meeting with nurency",
      deadline: "10 Dec 2023",
      status: "Assigned",
      workingTime: "45",
      assigne: Pic5,
    },
    {
      taskName: "Team party",
      deadline: "10 Dec 2023",
      status: "Done",
      workingTime: "45",
      assigne: Pic5,
    },
  ];
  const [tableData, setTableData] = useState(data);

  const onSearchChange=(event)=>{
    let TaskListArr = JSON.parse(JSON.stringify(data));
    let searchTxt = event.target.value.trim();
    let searchResult =  TaskListArr.filter(taskList=>taskList.taskName.toLowerCase().includes(searchTxt.toLowerCase()));
     setTableData(searchResult);
   }

  const onSelectChange = (event) => {
    let doctorListArr = JSON.parse(JSON.stringify(data));
    if (event.target.value === "all") {
      setTableData(doctorListArr);
    } else {
      let FilterData = doctorListArr.filter((doctorList) => {
        return (
          doctorList.status.toLowerCase().trim() === event.target.value.trim()
        );
      });
      setTableData(FilterData);
    }
  };

  return (
    <>
      <main>
        <div class="d-block mb-4 mb-md-0">
          <BreadCrumbs></BreadCrumbs>
          <h4>Task List</h4>
          <p class="mb-0">All the Task of the Staff</p>
        </div>
        <Card className="mb-2 mt-2">
          <Card.Body>
            <div class="table-settings">
              <div class="justify-content-between align-items-center row">
                <div class="d-md-flex col-lg-8 col-9">
                  <div className=" d-flex me-2 me-lg-3">
                    <Dropdown as={ButtonGroup}>
                      <Dropdown.Toggle
                        as={Button}
                        split
                        variant="link"
                        className="text-dark m-0 p-0"
                      >
                        <span className="icon icon-sm">
                          <FontAwesomeIcon
                            icon={faGear}
                            className="icon-dark"
                          />
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>10</Dropdown.Item>
                        <Dropdown.Item>20</Dropdown.Item>
                        <Dropdown.Item>30</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div class="me-2 me-lg-3 fmxw-300 input-group">
                    <input
                      placeholder="Search Task"
                      type="text"
                      class="form-control"
                      onChange={onSearchChange}
                    />
                  </div>
                  <select
                    class="fmxw-200 d-none d-md-inline form-select"
                    onChange={onSelectChange}
                  >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="assigned">Assigned</option>
                    <option value="inprogress">InProgress</option>
                    <option value="done">Done</option>
                  </select>
                </div>
                <div class="d-flex justify-content-end col-lg-4 col-3">
                  <div role="group" class="btn-group">
                    <div class="me-1 dropdown">
                      <button
                        id="react-aria2805492218-13"
                        aria-expanded="false"
                        type="button"
                        class="text-dark m-0 p-1 dropdown-toggle dropdown-toggle-split btn btn-link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-sm"
                        >
                          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="dropdown">
                      <button
                        id="react-aria2805492218-14"
                        aria-expanded="false"
                        type="button"
                        class="text-dark m-0 p-1 dropdown-toggle dropdown-toggle-split btn btn-link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-sm"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Row>
          <Col xs={12}>
            <Card className="shadow mb-4 card border-0">
              <Card.Body>
                <RcTable columns={columns} data={tableData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>
    </>
  );
}

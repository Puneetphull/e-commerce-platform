import React from "react";
import { Calendar } from "../custom-components/Calendar";
import { Calendar as ReactCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  ListGroup,
  Card,
  OverlayTrigger,
  Tooltip,
} from "@themesberg/react-bootstrap";
import moment from "moment";
import { CheckBoxField } from "../custom-components/Fields";
export default function AppointmentCalendar() {
  const dates = [
    {
      id: 1,
      resourceId: "1",
      start: "2023-05-23",
      end: "2018-03-23",
      title: "checkUp",
      backgroundColor:'#e11d48',
    },
    {
      id: 2,
      resourceId: "1",
      start: "2023-05-23",
      end: "2018-03-23",
      title: "Meeting",
    },
    {
      id: 3,
      resourceId: "1",
      start: "2023-05-23",
      end: "2018-03-23",
      title: "Team meeting",
    },
    {
      id: 4,
      resourceId: "1",
      start: "2023-05-25",
      end: "2018-03-25",
      title: "OPD Session",
      backgroundColor:'#2361ce'
    },
    {
      id: 5,
      resourceId: "2",
      start: "2023-05-24",
      end: "2018-03-24",
      title: "Patient Checkup",
    },
  ];

  return (
    <>
      <div className="mt-4">
        <div className="d-flex">
          <Card className="react-calendar-container">
            <Card.Body>
              <div className="mr-4">
                <div className="react-calendar">
                  <ReactCalendar
                    tileClassName={({ activeStartDate, date, view }) => {
                      if (
                        dates.find(
                          (e) => e.start === moment(date).format("YYYY-MM-DD")
                        )
                      ) {
                        return "text-success";
                      }
                    }}
                  />
                </div>
                <div className="events mt-4">
                  <h5>Filters</h5>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">
                      <CheckBoxField label={"Today Events"} />
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <CheckBoxField label={"Meetings"} />
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <CheckBoxField label={"Booked Appointments"} />
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <CheckBoxField label={"OPD"} />
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </Card.Body>
          </Card>
          <div style={{ width: "100%" }}>
            <Calendar
              eventColor={"green"}
              events={dates}
              eventMouseEnter={(args) => {
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  overlay={<Tooltip>{args.event.title}</Tooltip>}
                  
                ></OverlayTrigger>
            }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

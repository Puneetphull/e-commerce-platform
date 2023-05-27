import React,{useRef} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
export function Calendar({height,headerToolbar,plugins,views,initialView,weekends,eventColor,events,eventMouseEnter}) {
  const calendarRef = useRef()
  return (
    <FullCalendar
      ref={calendarRef}
      height={ height ? height :  "100vh"}
      headerToolbar={ headerToolbar ? headerToolbar : {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,dayGridWeek,timeGridDay",
      }}
      plugins={ plugins ? plugins :  [dayGridPlugin]}
      views={ views ? views : ["dayGridMonth", "dayGridWeek", "dayGridDay"]}
      initialView={initialView ? initialView :  "dayGridMonth"}
      weekends={ weekends ? weekends : true}
      eventColor={eventColor ? eventColor : "green"}
      events={events ? events : []}
      eventMouseEnter={eventMouseEnter ? eventMouseEnter : false}
    />
  );
}

import React from 'react';
import './App.css';
import {
  Calendar,
  momentLocalizer,
  Views
} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

let events = [
  {
    "start": "2020-05-01T00:12:00.000Z",
    "end": "2020-05-02T06:26:00.000Z",
    "type": "host-d",
    "title": "Technician",
    "allDay": false
  },
  {
    "start": "2020-05-01T15:24:00.000Z",
    "end": "2020-05-04T06:40:00.000Z",
    "type": "host-e",
    "title": "Administrator",
    "allDay": false
  },
  {
    "start": "2020-05-15T15:32:00.000Z",
    "end": "2020-05-15T18:48:00.000Z",
    "type": "host-c",
    "title": "Manager",
    "allDay": false
  },
  {
    "start": "2020-05-16T09:05:00.000Z",
    "end": "2020-05-17T23:29:00.000Z",
    "type": "host-b",
    "title": "Manager",
    "allDay": false
  },
  {
    "start": "2020-05-21T08:40:00.000Z",
    "end": "2020-05-28T09:40:00.000Z",
    "type": "host-c",
    "title": "Engineer",
    "allDay": false
  },
  {
    "start": "2020-05-25T04:24:00.000Z",
    "end": "2020-05-29T00:35:00.000Z",
    "type": "host-b",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-05-30T22:15:00.000Z",
    "end": "2020-05-31T23:35:00.000Z",
    "type": "host-g",
    "title": "Directory",
    "allDay": false
  },
  {
    "start": "2020-05-15T10:14:00.000Z",
    "end": "2020-06-02T06:22:00.000Z",
    "type": "host-f",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-05-01T01:17:00.000Z",
    "end": "2020-05-05T09:19:00.000Z",
    "type": "host-g",
    "title": "Administrator",
    "allDay": false
  },
  {
    "start": "2020-04-28T00:06:00.000Z",
    "end": "2020-05-08T09:14:00.000Z",
    "type": "host-g",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-05-10T01:42:00.000Z",
    "end": "2020-05-10T20:05:00.000Z",
    "type": "host-a",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-05-12T13:46:00.000Z",
    "end": "2020-05-12T21:07:00.000Z",
    "type": "host-e",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-05-13T23:28:00.000Z",
    "end": "2020-05-15T10:41:00.000Z",
    "type": "host-e",
    "title": "Directory",
    "allDay": false
  },
  {
    "start": "2020-05-10T07:09:00.000Z",
    "end": "2020-05-15T15:28:00.000Z",
    "type": "host-e",
    "title": "Manager",
    "allDay": false
  },
  {
    "start": "2020-05-17T19:06:00.000Z",
    "end": "2020-05-19T23:22:00.000Z",
    "type": "host-a",
    "title": "Technician",
    "allDay": false
  },
  {
    "start": "2020-05-25T17:01:00.000Z",
    "end": "2020-06-03T04:13:00.000Z",
    "type": "host-c",
    "title": "Engineer",
    "allDay": false
  },
  {
    "start": "2020-06-08T00:36:00.000Z",
    "end": "2020-06-08T10:43:00.000Z",
    "type": "host-f",
    "title": "Administrator",
    "allDay": false
  },
  {
    "start": "2020-06-05T14:25:00.000Z",
    "end": "2020-06-11T10:12:00.000Z",
    "type": "host-d",
    "title": "Directory",
    "allDay": false
  },
  {
    "start": "2020-04-23T04:58:00.000Z",
    "end": "2020-04-24T23:26:00.000Z",
    "type": "host-b",
    "title": "Administrator",
    "allDay": false
  },
  {
    "start": "2020-04-27T03:36:00.000Z",
    "end": "2020-05-14T15:04:00.000Z",
    "type": "host-a",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-05-08T06:15:00.000Z",
    "end": "2020-05-20T15:38:00.000Z",
    "type": "host-f",
    "title": "Administrator",
    "allDay": false
  },
  {
    "start": "2020-05-16T20:35:00.000Z",
    "end": "2020-05-25T16:38:00.000Z",
    "type": "host-f",
    "title": "Administrator",
    "allDay": false
  },
  {
    "start": "2020-05-20T18:30:00.000Z",
    "end": "2020-06-04T20:37:00.000Z",
    "type": "host-f",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-06-05T19:37:00.000Z",
    "end": "2020-06-07T10:16:00.000Z",
    "type": "host-c",
    "title": "Administrator",
    "allDay": false
  },
  {
    "start": "2020-05-23T20:51:00.000Z",
    "end": "2020-06-12T12:13:00.000Z",
    "type": "host-e",
    "title": "Manager",
    "allDay": false
  },
  {
    "start": "2020-06-03T06:11:00.000Z",
    "end": "2020-06-16T07:26:00.000Z",
    "type": "host-c",
    "title": "Engineer",
    "allDay": false
  },
  {
    "start": "2020-05-01T15:12:00.000Z",
    "end": "2020-05-05T11:12:00.000Z",
    "type": "host-e",
    "title": "Engineer",
    "allDay": false
  },
  {
    "start": "2020-05-16T23:37:00.000Z",
    "end": "2020-05-17T15:06:00.000Z",
    "type": "host-f",
    "title": "Directory",
    "allDay": false
  },
  {
    "start": "2020-05-22T09:27:00.000Z",
    "end": "2020-05-26T10:08:00.000Z",
    "type": "host-f",
    "title": "Engineer",
    "allDay": false
  },
  {
    "start": "2020-05-27T06:06:00.000Z",
    "end": "2020-06-14T00:42:00.000Z",
    "type": "host-c",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-04-29T13:29:00.000Z",
    "end": "2020-04-30T19:44:00.000Z",
    "type": "host-f",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-04-26T15:24:00.000Z",
    "end": "2020-05-05T13:05:00.000Z",
    "type": "host-g",
    "title": "Administrator",
    "allDay": false
  },
  {
    "start": "2020-05-08T11:44:00.000Z",
    "end": "2020-05-09T18:46:00.000Z",
    "type": "host-c",
    "title": "Administrator",
    "allDay": false
  },
  {
    "start": "2020-05-05T16:05:00.000Z",
    "end": "2020-05-11T10:33:00.000Z",
    "type": "host-d",
    "title": "Manager",
    "allDay": false
  },
  {
    "start": "2020-05-26T23:24:00.000Z",
    "end": "2020-05-27T08:25:00.000Z",
    "type": "host-e",
    "title": "Technician",
    "allDay": false
  },
  {
    "start": "2020-05-31T01:38:00.000Z",
    "end": "2020-06-01T04:05:00.000Z",
    "type": "host-f",
    "title": "Manager",
    "allDay": false
  },
  {
    "start": "2020-05-07T23:18:00.000Z",
    "end": "2020-05-10T14:21:00.000Z",
    "type": "host-e",
    "title": "Engineer",
    "allDay": false
  },
  {
    "start": "2020-05-13T23:18:00.000Z",
    "end": "2020-05-19T16:23:00.000Z",
    "type": "host-c",
    "title": "Supervisor",
    "allDay": false
  },
  {
    "start": "2020-05-23T14:24:00.000Z",
    "end": "2020-05-26T02:35:00.000Z",
    "type": "host-b",
    "title": "Directory",
    "allDay": false
  },
  {
    "start": "2020-05-25T14:17:00.000Z",
    "end": "2020-05-30T14:53:00.000Z",
    "type": "host-g",
    "title": "Engineer",
    "allDay": false
  },
  {
    "start": "2020-05-29T19:49:00.000Z",
    "end": "2020-06-13T09:30:00.000Z",
    "type": "host-c",
    "title": "Directory",
    "allDay": false
  },
  {
    "start": "2020-05-15T00:00:00.000Z",
    "end": "2020-05-27T00:00:00.000Z",
    "type": "host-b",
    "title": "Administrator",
    "allDay": true
  },
  {
    "start": "2020-04-21T00:00:00.000Z",
    "end": "2020-04-25T00:00:00.000Z",
    "type": "host-e",
    "title": "Directory",
    "allDay": true
  },
  {
    "start": "2020-05-11T00:00:00.000Z",
    "end": "2020-05-16T00:00:00.000Z",
    "type": "host-d",
    "title": "Technician",
    "allDay": true
  },
  {
    "start": "2020-05-04T00:00:00.000Z",
    "end": "2020-05-05T00:00:00.000Z",
    "type": "host-d",
    "title": "Manager",
    "allDay": true
  }
];

events = events.map(event => {
  event.start = new Date(event.start);  
  event.end = new Date(event.end);
  return event;
})

function App() {
  return (
    <div className="App">
      <Calendar
        localizer={momentLocalizer(moment)}
        events={events}
        startAccessor="start"
        endAccessor="end"
        popup={true}
        style={{ height: 500 }}
      />
    </div>
  );
}

export default App;

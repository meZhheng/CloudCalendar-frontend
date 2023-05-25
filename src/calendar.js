import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';


const Calendar = () => {
  const calendarRef = useRef(null);

  const headerToolbar = {
    start: 'title',
    center: 'timeGridDay timeGridWeek dayGridMonth',
    end: 'today prev,next',
  };

  const buttonText = {
    'day': '天',
    'week': '周',
    'month': '月',
  }

  const buttonIcons = {
    timeGridDay: 'chevron-left',
  }

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={headerToolbar}
        buttonText={buttonText}
        buttonIcons={buttonIcons}
      />
    </div>
  );
};

export default Calendar;

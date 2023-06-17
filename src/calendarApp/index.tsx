import React, { useEffect, useState } from "react";
import { CalendarScheduler } from "./mainCalendar";
import { mapArrayEventCalendar } from "./domain";
import { getAllEventsCalendar } from "./services/eventCalendarApi";
import { IEventCalendar } from "./domain";

const CalendarApp: React.FC = () => {
  const [listEventsCalendar, setListEventsCalendar] = useState<IEventCalendar[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsCalendar = await getAllEventsCalendar();
        const listAllEventsCalendar = mapArrayEventCalendar(eventsCalendar);
        setListEventsCalendar(listAllEventsCalendar);
      } catch (error) {
        // 处理错误
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen min-w-screen">
      <CalendarScheduler eventsCalendar={listEventsCalendar} />
    </div>
  );
};
export default CalendarApp;
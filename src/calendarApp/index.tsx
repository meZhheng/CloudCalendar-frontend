import React, { useEffect, useState } from "react";
import { CalendarScheduler } from "./mainCalendar";
import { mapArrayEventCalendar } from "./domain";
import { getAllEventsCalendar } from "./services/eventCalendarApi";
import { IEventCalendar } from "./domain";
import {message} from "antd";

const CalendarApp: React.FC = () => {
  const [listEventsCalendar, setListEventsCalendar] = useState<IEventCalendar[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsCalendar = await getAllEventsCalendar();
        const listAllEventsCalendar = mapArrayEventCalendar(eventsCalendar);
        setListEventsCalendar(listAllEventsCalendar);
      } catch (error) {
        message.error('后端接口异常，请稍后重试');
      }
    };
    fetchData().then(() => {});
  }, []);

  return (
    <div className="flex min-h-screen min-w-screen">
      <CalendarScheduler eventsCalendar={listEventsCalendar} />
    </div>
  );
};
export default CalendarApp;
import React, { useEffect, useState } from "react";
import { CalendarScheduler } from "./mainCalendar";
import { mapArrayEventCalendar } from "./domain";
import { IEventCalendar } from "./domain";
import { message } from "antd";
import { useGetEventsCalendarMutation } from "../store/eventApi";

const CalendarApp: React.FC = () => {
  const [listEventsCalendar, setListEventsCalendar] = useState<IEventCalendar[]>([]);
  const [ fetchGetEventsCalendar ] = useGetEventsCalendarMutation()
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchGetEventsCalendar({}).unwrap();
        if (res?.code === 200) {
          const eventsCalendar = res?.events;
          const listAllEventsCalendar = mapArrayEventCalendar(eventsCalendar);
          setListEventsCalendar(listAllEventsCalendar);
          setIsDataLoaded(true);
        } else {
          message.error(res?.message);
        }
      } catch (error) {
        message.error('后端接口异常，请稍后重试');
      }
    };
    fetchData().then(() => {});
  }, [fetchGetEventsCalendar]);

  return (
    <div className="flex min-h-screen min-w-screen">
      {isDataLoaded ? (
        <CalendarScheduler eventsCalendar={listEventsCalendar} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default CalendarApp;
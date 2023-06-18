import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { ModalInfosEventCalendar } from "./modalInfoEventCalendar";
import { useDisclosure } from "../hooks";
import { useState } from "react";
import { IEventCalendar } from "../domain";
import {useNavigate} from "react-router-dom";
// import React from 'react';

type CalendarSchedulerProps = {
  eventsCalendar: IEventCalendar[];
}

export const CalendarScheduler = ({eventsCalendar}: CalendarSchedulerProps) => {
  const [eventInfos, setEventInfos] = useState();
  const [isEditCard, setIsEditCard] = useState<boolean>(false);
  const navigate = useNavigate();
  const weekends = {
    weekendsVisible: true,
    currentEvents: [],
  };

  const modalInfosEvent = useDisclosure(false);

  const handleAddEventSelectAndOpenModal = (selectInfo: any) => {
    setIsEditCard(false);
    setEventInfos(selectInfo);
    modalInfosEvent.handleOpen();
  };

  const handleEditEventSelectAndOpenModal = (clickInfo: any) => {
    setIsEditCard(true);
    setEventInfos(clickInfo);
    modalInfosEvent.handleOpen();
  };

  const toUserProfile = () => {
    navigate('/profile')
  };

  const logout = () => {
    // 自定义按钮2的点击事件处理逻辑
    navigate('/logout')
  };

  return (
    <div className="flex min-h-full min-w-full">
      <ModalInfosEventCalendar
        open={modalInfosEvent.isOpen}
        handleClose={modalInfosEvent.handleClose}
        eventInfos={eventInfos}
        isEditCard={isEditCard}
      />
      <div className="flex flex-col flex-grow h-screen w-screen items-center">
        <div style={{ width: '90%', height:'100%'}}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left:"prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay customButton2,customButton1",
            }}
            initialView="dayGridMonth"
            locale="zh-cn"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekends.weekendsVisible}
            initialEvents={eventsCalendar}
            select={handleAddEventSelectAndOpenModal}
            eventClick={handleEditEventSelectAndOpenModal}
            longPressDelay={1000}
            eventLongPressDelay={1000}
            selectLongPressDelay={1000}
            allDaySlot={false}
            height="100%"
            customButtons={{
              customButton1: {
                text: 'Log Out',
                click: logout,
              },
              customButton2: {
                text: 'Profile',
                click: toUserProfile,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
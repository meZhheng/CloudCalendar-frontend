import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { ModalInfosEventCalendar } from "./modalInfoEventCalendar";
import { useDisclosure } from "../hooks";
import { useState } from "react";
import { updateEventCalendar } from "../services/eventCalendarApi";
import { message } from "antd";
import { IEventCalendar } from "../domain";

type CalendarSchedulerProps = {
  eventsCalendar: IEventCalendar[];
}

export const CalendarScheduler = ({eventsCalendar}: CalendarSchedulerProps) => {
  const [eventInfos, setEventInfos] = useState();
  const [isEditCard, setIsEditCard] = useState<boolean>(false);

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

  const handleUpdateEventSelect = async (changeInfo: any) => {
    try {
      const eventCalendarUpdated = {
        eventCalendar: {
          _id: changeInfo.event.id,
          title: changeInfo.event.title,
          start: changeInfo.event.startStr,
          end: changeInfo.event.endStr,
          backgroundColor: changeInfo.event.backgroundColor,
          textColor: changeInfo.event.textColor,
        },
      };

      await updateEventCalendar(eventCalendarUpdated);
    } catch (err) {
      message.error('Houve um erro ao atualizar o evento');
    }
  };

  return (
    <div className="flex min-h-full min-w-full">
      <ModalInfosEventCalendar
        open={modalInfosEvent.isOpen}
        handleClose={modalInfosEvent.handleClose}
        eventInfos={eventInfos}
        isEditCard={isEditCard}
      />
      <div className="flex flex-col flex-grow min-h-full min-w-full items-center">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
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
          eventChange={handleUpdateEventSelect}
          longPressDelay={1000}
          eventLongPressDelay={1000}
          selectLongPressDelay={1000}
          allDaySlot={false}
          height="100%"
        />
      </div>
    </div>
  );
};
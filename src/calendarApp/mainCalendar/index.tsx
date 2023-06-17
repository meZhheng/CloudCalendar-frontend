import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { ModalInfosEventCalendar } from "./modalInfoEventCalendar";
import { useDisclosure } from "../hooks";
import { useState } from "react";
import { message } from "antd";
import { IEventCalendar } from "../domain";
import { useUpdateEventCalendarMutation } from "../../store/eventApi";

type CalendarSchedulerProps = {
  eventsCalendar: IEventCalendar[];
}

export const CalendarScheduler = ({eventsCalendar}: CalendarSchedulerProps) => {
  const [eventInfos, setEventInfos] = useState();
  const [isEditCard, setIsEditCard] = useState<boolean>(false);

  const [ fetchUpdateEventCalendar ] = useUpdateEventCalendarMutation();

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

      const res: any = await fetchUpdateEventCalendar(eventCalendarUpdated).unwrap();
      if (res?.code === 200) {
        message.success(res?.message);
      } else {
        message.error(res?.message);
      }
    } catch (err) {
      message.error('Houve um erro ao atualizar o evento');
    }
  };

  const customButton1ClickHandler = () => {

  };

  const customButton2ClickHandler = () => {
    // 自定义按钮2的点击事件处理逻辑
    console.log('Custom Button 2 clicked');
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
            eventChange={handleUpdateEventSelect}
            longPressDelay={1000}
            eventLongPressDelay={1000}
            selectLongPressDelay={1000}
            allDaySlot={false}
            height="100%"
            customButtons={{
              customButton1: {
                text: 'Log Out',
                click: customButton1ClickHandler,
              },
              customButton2: {
                text: 'Profile',
                click: customButton2ClickHandler,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
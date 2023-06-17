import React, { useState, useEffect } from 'react';
import { Modal, Container, TextField, Button } from '@mui/material';
import { Key } from 'react';
import { message } from 'antd';
import { ListColorsCard } from '../../styles';
import {
  deleteEventCalendar
} from '../../services/eventCalendarApi';
import { BackgroundColorRounded, BoxContainer, SelectColors } from './styles';
import { useGetGroupIdMutation } from "../../../store/shareGroupIdApi";
import { useUpdateEventCalendarMutation, useCreateEventCalendarMutation } from "../../../store/eventApi";

interface ICardColor {
  backgroundColor: string;
  textColor: string;
}

interface IModalInfosEventCalendaryProps {
  open: boolean;
  handleClose: () => void;
  eventInfos: any;
  isEditCard: boolean;
}

export const ModalInfosEventCalendar = ({
  handleClose,
  open,
  eventInfos,
  isEditCard,
}: IModalInfosEventCalendaryProps) => {
  const [title, setTitle] = useState<string>('');
  const [cardColor, setCardColor] = useState<ICardColor>({
    backgroundColor: '#039be5',
    textColor: '#ffffff',
  });
  const [ selectedOptions, setSelectedOptions ] = useState<string[]>([]);
  const [ fetchGetGroupId ] = useGetGroupIdMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupId = await fetchGetGroupId({}).unwrap();
        console.log('Received groupId from backend:', groupId);
        // 在这里处理 groupId，可以存储到状态中或进行其他操作
      } catch (error) {
        console.error('Error fetching groupId:', error);
      }
    };
    if(open) {
      fetchData();
    }
  }, [open]);

  const [ fetchUpdateEventCalendar ] = useUpdateEventCalendarMutation();
  const [ fetchCreateEventCalendar ] = useCreateEventCalendarMutation();

  useEffect(() => {
    if (isEditCard) {
      setTitle(eventInfos?.event?.title);
      setCardColor({
        backgroundColor: eventInfos?.event?.backgroundColor,
        textColor: eventInfos?.event?.textColor,
      });
    } else {
      setTitle('');
      setCardColor({ backgroundColor: '#039be5', textColor: '#ffffff' });
    }
  }, [eventInfos, isEditCard]);

  const handleSelectCardColor = (color: ICardColor) => {
    setCardColor({
      backgroundColor: color.backgroundColor,
      textColor: color.textColor,
    });
  };

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleAddedEvent = async () => {
    try {
      const calendarApi = eventInfos.view.calendar;

      const res = await fetchCreateEventCalendar({
        eventCalendar: {
          title: title === '' ? '无标题' : title,
          start: eventInfos.startStr,
          end: eventInfos.endStr,
          backgroundColor: cardColor.backgroundColor,
          textColor: cardColor.textColor,
          selectedOptions: selectedOptions,
        },
      }).unwrap();

      if (res?.code === 200) {
        message.success(res?.message);
        calendarApi.addEvent({
          id: res?.schedule?._id,
          title: res?.schedule?.title,
          start: res?.schedule?.start,
          end: res?.schedule?.endStr,
          backgroundColor: cardColor.backgroundColor,
          textColor: cardColor.textColor,
        });
      } else {
        message.error(res?.message);
      }
    } catch (err) {
      message.error('There was an error creating an event');
    } finally {
      setTitle('');
      setSelectedOptions([]);
      handleClose();
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEventCalendar({ id: eventInfos.event.id });
      eventInfos.event.remove();
    } catch (error) {
      message.error('Houve um erro ao deletar o evento');
    } finally {
      setTitle('');
      setSelectedOptions([]);
      handleClose();
    }
  };

  const handleUpdatedEvent = async () => {
    try {
      const calendarApi = eventInfos.view.calendar;

      const eventCalendarUpdated = {
        eventCalendar: {
          _id: eventInfos.event.id,
          title: title !== '' ? title : '无标题',
          start: eventInfos.event.startStr,
          end: eventInfos.event.endStr,
          backgroundColor: cardColor.backgroundColor,
          textColor: cardColor.textColor,
          selectedOptions: selectedOptions,
        },
      };

      const currentEvent = calendarApi.getEventById(eventInfos.event.id);

      if (currentEvent) {
        currentEvent.setProp('title', title !== '' ? title : '无标题');
        currentEvent.setProp('backgroundColor', cardColor.backgroundColor);
        currentEvent.setProp('textColor', cardColor.textColor);
      }

      const res: any = await fetchUpdateEventCalendar(eventCalendarUpdated).unwrap();
      if (res?.code === 200) {
        message.success(res?.message);
      } else {
        message.error(res?.message);
      }
    } catch (error) {
      message.error('更新事件时出现错误');
    } finally {
      setTitle('');
      setSelectedOptions([]);
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <BoxContainer>
        <TextField label={'日程计划'} value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />

        <SelectColors>
          {ListColorsCard.map((color: ICardColor, index: Key | null | undefined) => (
            <BackgroundColorRounded
              key={index}
              selected={false}
              color={color.backgroundColor}
              onClick={() => handleSelectCardColor(color)}
            >
              <input
                type="radio"
                name="cardColor"
                checked={color.backgroundColor === cardColor.backgroundColor}
              />
            </BackgroundColorRounded>
          ))}
        </SelectColors>
        
        {selectedOptions.map((option:any) => (
          <div key={option.id}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.id)}
              onChange={() => handleCheckboxChange(option.id)}
            />
            <label>{option.label}</label>
          </div>
        ))}
        
        <Button
          variant="contained"
          fullWidth
          onClick={isEditCard ? handleUpdatedEvent : handleAddedEvent}
          sx={{ marginTop: '0.5rem' }}
        >
          {isEditCard ? '更新事件' : '添加事件'}
        </Button>

        {isEditCard && (
          <Button variant="contained" fullWidth sx={{ marginTop: '0.5rem' }} onClick={handleDeleteEvent}>
            删除事件
          </Button>
        )}
      </BoxContainer>
    </Modal>
  );
};

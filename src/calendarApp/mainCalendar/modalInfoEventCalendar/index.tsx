import { useState, useEffect } from 'react';
import { Modal, TextField, Button } from '@mui/material';
import { Key } from 'react';
import { message } from 'antd';
import { ListColorsCard } from '../../styles';
import { deleteEventCalendar } from '../../services/eventCalendarApi';
import { BackgroundColorRounded, BoxContainer, SelectColors } from './styles';
import { useGetGroupIdMutation } from "../../../store/shareGroupIdApi";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useUpdateEventCalendarMutation, useCreateEventCalendarMutation } from "../../../store/eventApi";
import Radio from '@mui/material/Radio';

interface ICardColor {
  backgroundColor: string;
  textColor: string;
}

interface GroupOption {
  id: string;
  name: string;
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
  const [ selectedOptions, setSelectedOptions ] = useState<string>('');
  const [ fetchGetGroupId ] = useGetGroupIdMutation();

  const [GroupInfo, setGroupInfo] = useState<GroupOption[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res:any = await fetchGetGroupId({}).unwrap();
        if (res?.code === 200) {
          const groupInfo = res?.groupInfo;
          setGroupInfo(groupInfo);
        } else {
          message.error(res?.message);
        }
      } catch (error) {
        console.error('Error fetching groupId:', error);
      }
    };
    if(open) {
      fetchData().then(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleOptionChange = (option: string) => {
    setSelectedOptions(option);
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
      setSelectedOptions('');
      handleClose();
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEventCalendar({ id: eventInfos.event.id });
      eventInfos.event.remove();
    } catch (error) {
      message.error('There was an error deleting an event');
    } finally {
      setTitle('');
      setSelectedOptions('');
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
      setSelectedOptions('');
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

        <div>
          {GroupInfo.map((option: GroupOption) => (
            <FormControlLabel
                key={option.id}
                control={
                  <Radio
                    checked={selectedOptions === option.id}
                    onChange={() => handleOptionChange(option.id)}
                  />
                }
                label={`${option.name}`}
              />
          ))}
        </div>
        
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

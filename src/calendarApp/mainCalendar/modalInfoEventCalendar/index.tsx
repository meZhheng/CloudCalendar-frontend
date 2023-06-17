import { Button, Modal, TextField } from '@mui/material';
import { Key, useEffect, useState} from 'react';
import { message } from 'antd';
import { ListColorsCard } from '../../styles';
import {
  deleteEventCalendar
} from '../../services/eventCalendarApi';
import { BackgroundColorRounded, BoxContainer, SelectColors } from './styles';
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
      setCardColor({backgroundColor: '#039be5', textColor: '#ffffff'});
    }
  }, [eventInfos, isEditCard]);

  const handleSelectCardColor = (color: ICardColor) => {
    setCardColor({
      backgroundColor: color.backgroundColor,
      textColor: color.textColor,
    });
  };

  const handleAddedEvent = async () => {
    try {
      const calendarApi = eventInfos.view.calendar;

      const res = await fetchCreateEventCalendar({
        eventCalendar: {
          title: title === '' ? 'Sem título' : title,
          start: eventInfos.startStr,
          end: eventInfos.endStr,
          backgroundColor: cardColor.backgroundColor,
          textColor: cardColor.textColor,
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
      message.error('Houve um erro ao criar um evento');
    } finally {
      setTitle('');
      handleClose();
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEventCalendar({id: eventInfos.event.id});
      eventInfos.event.remove();
    } catch (error) {
      message.error('Houve um erro ao deletar o evento');
    } finally {
      setTitle('');
      handleClose();
    }
  };

  const handleUpdatedEvent = async () => {
    try {
      const calendarApi = eventInfos.view.calendar;

      const eventCalendarUpdated = {
        eventCalendar: {
          _id: eventInfos.event.id,
          title: title !== '' ? title : 'Sem título',
          start: eventInfos.event.startStr,
          end: eventInfos.event.endStr,
          backgroundColor: cardColor.backgroundColor,
          textColor: cardColor.textColor,
        },
      };

      const currentEvent = calendarApi.getEventById(eventInfos.event.id);

      if (currentEvent) {
        currentEvent.setProp('title', title !== '' ? title : 'Sem título');
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
      message.error('Houve um erro ao atualizar o evento');
    } finally {
      setTitle('');
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <BoxContainer>
        <TextField label={'Adicionar título'} value={title} onChange={(e) => setTitle(e.target.value)} fullWidth/>

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


        <Button
          variant="contained"
          fullWidth
          onClick={isEditCard ? handleUpdatedEvent : handleAddedEvent}
          sx={{ marginTop: '0.5rem' }}
        >
          {isEditCard ? 'Atualizar evento' : 'Adicionar evento'}
        </Button>

        {isEditCard && (
          <Button variant="contained" fullWidth sx={{ marginTop: '0.5rem' }} onClick={handleDeleteEvent}>
            Excluir evento
          </Button>
        )}
      </BoxContainer>
    </Modal>
  );
};
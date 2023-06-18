import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl} from "../api/baseQuery";
import {CREATE_EVENT, GET_EVENTS, UPDATE_EVENT} from "../api/api";
import {IEventCalendar} from "../calendarApp/domain";

interface IEventCreateResponse {
  code: number;
  message: string;
  schedule: {
    _id: string;
    title: string;
    start: string;
    endStr: string;
  }
}

interface IEventCreateArgs {
  eventCalendar:{
    title: string;
    start: string;
    end: string;
    backgroundColor: string;
    textColor: string;
    selectedOptions: string;
  }
}

interface IEventGetAllResponse {
  code: number;
  message?: string;
  events: IEventCalendar[],
}

const eventApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userToken") || "";
      const username = (getState() as any).public.userInfo;
      if (token !== "" && username) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Username", username);
      }
      return headers;
    },
  }),
  endpoints(build) {
    return {
      // 登录
      updateEventCalendar: build.mutation({
        query(args) {
          return {
            url: UPDATE_EVENT,
            method: 'POST',
            body: args,
            headers: {
              'Content-Type': 'application/json'
            }
          };
        },
      }),
      createEventCalendar: build.mutation<IEventCreateResponse, IEventCreateArgs>({
        query(args) {
          return {
            url: CREATE_EVENT,
            method: 'POST',
            body: args,
            headers: {
              'Content-Type': 'application/json'
            }
          };
        },
      }),
      getEventsCalendar: build.mutation<IEventGetAllResponse, unknown>({
        query() {
          return GET_EVENTS;
        },
      }),
    };
  },
});
export const { useUpdateEventCalendarMutation,useCreateEventCalendarMutation, useGetEventsCalendarMutation } = eventApi;

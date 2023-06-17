import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl} from "../api/baseQuery";
import {CREATE_EVENT, GET_USERINFO, UPDATE_EVENT} from "../api/api";

interface IEventCreateResponse {
  code: number;
  message: string;
  _id: string;
  title: string;
  start: string;
  endStr: string;
}

interface IEventCreateArgs {
  eventCalendar:{
    title: string;
    start: string;
    end: string;
    backgroundColor: string;
    textColor: string;
  }
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
      getEventsCalendar: build.query({
        query() {
          return GET_USERINFO;
        },
      }),
    };
  },
});
export const { useUpdateEventCalendarMutation,useCreateEventCalendarMutation, useGetEventsCalendarQuery } = eventApi;

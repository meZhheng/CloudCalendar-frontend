import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl} from "../api/baseQuery";
import {UPDATE_EVENT} from "../api/api";

const eventApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
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
    };
  },
});
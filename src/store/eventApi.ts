import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl} from "../api/baseQuery";
import {LOGIN} from "../api/api";

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
            url: LOGIN,
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
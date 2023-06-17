import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { UPDATE_EVENT, ADD_EVENT } from "../api/api";
import { baseUrl } from "../api/baseQuery";

const setEventApi = createApi({
  reducerPath: "setEventApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userToken") || "";
      const username = (getState() as any).public.userInfo;
      if (token !== "") {
        headers.set("Authorization", `Bearer ${token}`);
      }
      if (username) {
        headers.set("Username", username);
      }
      return headers;
    },
  }),
  endpoints(build) {
    return {
      // 创建组群
      setAddEvent: build.mutation({
        query(args) {
          return {
            url: ADD_EVENT,
            method: 'POST',
            body: args,
            headers: {
              'Content-Type': 'application/json'
            }
          };
        },
      }),
      updateEvent: build.query({
        query() {
          return UPDATE_EVENT;
        }
      }),
    };
  },
});
export const { useSetAddEventMutation, useUpdateEventQuery } = setEventApi;

export default setEventApi;
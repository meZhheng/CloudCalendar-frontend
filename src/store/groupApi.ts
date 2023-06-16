import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {CreateGroup, JOIN_GROUP} from "../api/api";
import { baseUrl } from "../api/baseQuery";

const groupApi = createApi({
  reducerPath: "groupApi",
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
      // 创建组群
      CreateGroup: build.mutation({
        query(args) {
          return {
            url: CreateGroup,
            method: 'POST',
            body: args,
            headers: {
              'Content-Type': 'application/json'
            }
          };
        },
      }),
      joinGroup: build.mutation({
        query(args) {
          return {
            url: JOIN_GROUP,
            method: 'POST',
            body: args,
            headers: {
              'Content-Type': 'application/json'
            }
          };
        },
      })
    };
  },
});
export const { useCreateGroupMutation, useJoinGroupMutation } = groupApi;
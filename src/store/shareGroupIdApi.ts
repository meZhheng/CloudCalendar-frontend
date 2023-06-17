import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GET_GROUPID } from "../api/api";
import { baseUrl } from "../api/baseQuery";

const groupEventApi = createApi({
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
      getGroupId: build.mutation({
        query() {
          return GET_GROUPID;
        }
      }),
    };
  },
});
export const { useGetGroupIdMutation } = groupEventApi;
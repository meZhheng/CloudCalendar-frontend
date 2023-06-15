import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GET_USERINFO, Personalinfo } from "../api/api";
import { baseUrl } from "../api/baseQuery";

const setUserinfoApi = createApi({
  reducerPath: "setUserinfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // 在这里可以为headers添加额外的信息
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
      setPersonalinfo: build.mutation({
        query(args) {
          return {
            url: Personalinfo,
            method: 'POST',
            body: args,
            headers: {
              'Content-Type': 'application/json'
            }
          };
        },
      }),
      getUserInfo: build.query({
        query() {
          return GET_USERINFO;
        }
      }),
    };
  },
});
export const { useSetPersonalinfoMutation, useGetUserInfoQuery } = setUserinfoApi;

export default setUserinfoApi;
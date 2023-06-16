import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GETMEMBER } from "../api/api";
import { baseUrl } from "../api/baseQuery";

const setGetmemberApi = createApi({
  reducerPath: "setGetmemberApi",
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
      getMember: build.query({
        query() {
          return GETMEMBER;
        }
      }),
    };
  },
});
export const { useGetMemberQuery } = setGetmemberApi;

export default setGetmemberApi;
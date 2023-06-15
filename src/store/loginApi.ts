import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GET_CAPTCHA, LOGIN, REGISTER, LOGOUT } from "../api/api";
import { baseUrl } from "../api/baseQuery";

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints(build) {
    return {
      // 登录
      login: build.mutation({
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
      register: build.mutation({
        query(args) {
          return {
            url: REGISTER,
            method: 'POST',
            body: args,
            headers: {
              'Content-Type': 'application/json'
            }
          };
        },
      }),
      logout: build.mutation({
        query(args) {
          return {
            url: LOGOUT,
            method: 'POST',
            body: args,
            headers: {
              'Content-Type': 'application/json'
            }
          };
        },
      }),
      getCaptcha: build.query({
        query() {
          return GET_CAPTCHA;
        },
      }),
    };
  },
});
export const { useLoginMutation, useRegisterMutation,useLogoutMutation, useGetCaptchaQuery } = loginApi;

export default loginApi;
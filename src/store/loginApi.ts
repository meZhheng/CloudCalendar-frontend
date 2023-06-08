import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GET_CAPTCHA, LOGIN, REGISTER } from "../api/api";
import { baseUrl, InterceptorsResponse } from "../api/baseQuery";

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
      getCaptcha: build.query({
        query() {
          return GET_CAPTCHA;
        },
        // transformResponse 用来转换响应数据的格式
        transformResponse(res: any) {
          // console.log(res, "用来转换响应数据的格式....");
          return InterceptorsResponse(res);
        },
      }),
    };
  },
});
export const { useLoginMutation, useRegisterMutation, useGetCaptchaQuery } = loginApi;

export default loginApi;
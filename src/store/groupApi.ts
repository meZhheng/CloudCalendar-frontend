import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CreateGroup } from "../api/api";
import { baseUrl, InterceptorsResponse } from "../api/baseQuery";

const groupApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
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
    };
  },
});
export const { useCreateGroupMutation } = groupApi;
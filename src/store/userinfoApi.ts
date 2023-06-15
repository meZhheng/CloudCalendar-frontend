import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Personalinfo} from "../api/api";
import { baseUrl, InterceptorsResponse } from "../api/baseQuery";

const userinfoApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints(build) {
    return {
      // 创建组群
      Personalinfo: build.mutation({
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
    };
  },
});
export const { usePersonalinfoMutation } = userinfoApi;

export default userinfoApi;
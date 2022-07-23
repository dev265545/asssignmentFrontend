import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        return {
          mode: "no-cors",
          url: `users/${id}`,
          method: "GET",
        };
      },
    }),
    getAllPostByPage: builder.query({
      query: (page) => {
        return {
          url: `users?page=${page}`,
          method: "GET",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetAllPostByPageQuery,
} = postApi;

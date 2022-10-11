// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Data } from '../../store/features/data/dataSlice'

// Define a service using a base URL and expected endpoints
export const modelApi = createApi({
  reducerPath: 'modelApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getAllModelApi: builder.query<Data[], void>({
      query: () => '/posts',
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllModelApiQuery  } = modelApi
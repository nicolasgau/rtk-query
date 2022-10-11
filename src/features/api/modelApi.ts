// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Data } from '../../store/features/data/dataSlice'

type Model = {
  label: string, 
  prix: number
}

export type FetchedModelsData = {
  [key: string]: Model 
}

export type ModelsData = {
  ref: string
  label: string
  prix: number
}


// Define a service using a base URL and expected endpoints
export const modelApi = createApi({
  reducerPath: 'modelApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev.merlo-ch.com/gestion/configurateur' }),
  endpoints: (builder) => ({
    // ModelsData[] is the desired returned type
    getAllModelApi: builder.query<ModelsData[], string>({
      query: (ref) => `ajax_get_machines.php?gamme=${ref}`,
      // res is the data fetched and we transform it to be of ModelsData[] type
      transformResponse: ((res: FetchedModelsData, _meta, _arg) => {
        let modelKeys = Object.keys(res) as string[]
        const result : ModelsData[] = modelKeys.map(key => {
          return { ref: key, ...res[key]}
        })
        // result is of ModelsData[] type
        return result
      }),
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllModelApiQuery  } = modelApi
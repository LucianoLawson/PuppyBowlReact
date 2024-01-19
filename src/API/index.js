import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const puppyBowlApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players' }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => 'players',
    }),
  }),
});

export const { useGetPlayersQuery } = puppyBowlApi;

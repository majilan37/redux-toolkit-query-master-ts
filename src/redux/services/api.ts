import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post, Comment, User } from '../types';

export const api = createApi({
    reducerPath:'api' ,
    baseQuery: fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com'
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => '/posts'
        }),
        getComments: builder.query<Comment[], void>({
            query: () => '/comments'
        }),
        getUsers: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ['Users']
        }),
        addUser: builder.mutation<void, User>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation<void, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: builder.mutation<void, User>({
            query: ({id, ...rest}) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Users']
        })
    })
})


export const { 
    useGetPostsQuery, 
    useGetCommentsQuery, 
    useGetUsersQuery,
    useAddUserMutation,
    useDeleteUserMutation,
    useUpdateUserMutation
 } = api
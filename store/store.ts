import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersReducer'

export const store = configureStore({
  reducer: {
    //posts: postsReducer,
    //comments: commentsReducer,
    auth: usersReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

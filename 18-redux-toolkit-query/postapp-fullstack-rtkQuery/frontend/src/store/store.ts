// import { configureStore } from '@reduxjs/toolkit';
// import postReducer from '../features/posts/redux/postSlice';

// const store = configureStore({
//   reducer: {
//     posts: postReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { postApi } from '../features/posts/redux/postApi';  // Import the API slice

const store = configureStore({
  reducer: {
    // Add the postApi reducer
    [postApi.reducerPath]: postApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

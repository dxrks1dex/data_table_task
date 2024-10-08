import { configureStore } from "@reduxjs/toolkit";
import { sortSlice } from "@/features/sortSlice";
import { usersSlice } from "@/features/usersSlice";

export const store = configureStore({
  reducer: {
    sort: sortSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../features/ChannelSlice";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
  },
});

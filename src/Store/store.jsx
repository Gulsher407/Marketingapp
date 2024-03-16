import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/Userdetails";

const store = configureStore({
  reducer: {
    app: userDetail,
  },
});

export default store;

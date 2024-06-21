import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentSlice"; // Assuming your slice is in this file
import authReducer from "./slices/authSlice"; // Import the authSlice reducer

const store = configureStore({
  reducer: {
    student: studentReducer,
    auth: authReducer,
    // Add other reducers here if needed
  },
});

export default store;

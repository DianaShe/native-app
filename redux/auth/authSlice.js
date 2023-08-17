import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  updateUser,
//   updateUserData,
//   refreshUser,
} from "./operations";
import { handleAuthFulfilled, handleAuthPending, handleAuthRejected, handleLogInFulfilled, handleLogOutFulfilled, handleUpdateUserFulfilled } from "./handlers";

const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: {
        id: null,
        login: null,
        email: null,
        password: null,
        photo: null,
      },
      isLoggedIn: false,
      authInProgress: false,
      error: null,
    },
  
    extraReducers: (builder) => {
      builder
        .addCase(register.fulfilled, handleLogInFulfilled)
        .addCase(register.rejected, handleAuthRejected)
        .addCase(logIn.rejected, handleAuthRejected)
        .addCase(logIn.fulfilled, handleLogInFulfilled)
        .addCase(updateUser.fulfilled, handleUpdateUserFulfilled)
        .addCase(logOut.fulfilled, handleLogOutFulfilled)
        .addMatcher(
          isAnyOf(register.pending, logIn.pending, updateUser.pending, logOut.pending
        ), handleAuthPending)
        .addMatcher(
          isAnyOf(register.fulfilled, logIn.fulfilled, updateUser.fulfilled, logOut.fulfilled
        ), handleAuthFulfilled);
    },
  });

export const authReducer = authSlice.reducer;
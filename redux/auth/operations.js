import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";


const updateUserProfile = async (update) => {
  const user = auth.currentUser;
  if (user) {
    try {
       await updateProfile(user, update);
       console.log(
        
        user.displayName)
       
      return {
        email: user.email,
        login: user.displayName,
        password: user.password,
        id: user.uid,
        photo: user.photoURL,
         ...update}
    } catch (error) {
      throw error;
    }
  }
};


export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const {login, email, password } = user;
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return await updateUserProfile( {displayName: login });
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logIn = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const { email, password} = user;
  try {
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    console.log(user)
    return {
      id: user.uid,
      email,
      password,
      login: user.displayName,
      photo: user.photoURL,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (user, thunkAPI) => {
  
  try {
    await signOut(auth)
    return {
      id: null,
      email: null,
      password: null,
      login: null,
      photo: null,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  
});

export const updateUser = createAsyncThunk("auth/update", async (user, thunkAPI) => {
  const {photoURL} = user;
  try {
   return await updateUserProfile({photoURL})

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  
});

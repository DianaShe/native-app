import { createAsyncThunk} from "@reduxjs/toolkit";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config";
import { upLoadFile } from "../../services/uploadFile";

export const addPost = createAsyncThunk("posts/add", async (data, thunkAPI) => {
  try {
    const { photoUri, ...rest } = data;

    const response = await fetch(photoUri);
    const file = await response.blob();

    const fileName = photoUri.slice(photoUri.lastIndexOf("/") + 1);
   
    const path = `images/${fileName}`;
    const photo = await upLoadFile(file, path);
  
    post = { photo, ...rest };
    const postRef = await addDoc(collection(db, "posts"), post);
    
    return { id: postRef.id, ...post };
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    
    try {
      const posts = await getDocs(collection(db, "posts"));
      let array = [];
      posts.forEach((doc) => {
        array.push({ id: doc.id, ...doc.data() });
      });
      return array;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async(comment, thunkAPI) => {
    try {
      const {text, date, author, id} =comment;
      
      const ref = doc(db, "posts", id);
      await updateDoc(ref, {
        comments: arrayUnion({text, date, author})
      })
      return {text, date, author, id}
    } catch (error) {
      console.log("in addComment" + error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const manageLike = createAsyncThunk(
  "posts/manageLike",
  async (data, thunkAPI) => {
    try {
      const {photoId, userId} = data
      const state = thunkAPI.getState();
      const posts = state.posts.posts;
      
      const post = posts.find((post) => post.id === photoId);
      
      if (!post.likes.find((id) => userId === id)) {
        const postRef = doc(db, "posts", photoId);
        await updateDoc(postRef, {
          likes: arrayUnion(userId),
        });
        return { photoId, userId, action: "increase" };
      } else {
        const postRef = doc(db, "posts", photoId);
        await updateDoc(postRef, {
          likes: arrayRemove(userId),
        });
        return { photoId, userId, action: "decrease" };
      }
    } catch (error) {
      console.log("in manageLike" + error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
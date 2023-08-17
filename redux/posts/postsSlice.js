import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addComment, addPost, fetchPosts, manageLike } from "./operations";
import { handleAddCommentFulfilled, handleAddPostFulfilled, handleError, handleFetchPostsFulfilled, handleFulfilled, handleLikes, handlePending } from "./handlers";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: false,
        error: null,
    },

    extraReducers: (builder) => 
        builder
            .addCase(addPost.fulfilled, handleAddPostFulfilled)
            .addCase(fetchPosts.fulfilled, handleFetchPostsFulfilled)
            .addCase(addComment.fulfilled , handleAddCommentFulfilled)
            .addCase(manageLike.fulfilled, handleLikes)
            
            .addMatcher(isAnyOf(addPost.rejected, fetchPosts.rejected, addComment.rejected), handleError)
            .addMatcher(isAnyOf(addPost.pending, fetchPosts.pending, addComment.pending), handlePending)
            .addMatcher(isAnyOf(addPost.fulfilled, addComment.fulfilled, fetchPosts.fulfilled, manageLike.fulfilled), handleFulfilled)
})

export const postsReducer = postsSlice.reducer
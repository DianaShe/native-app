export const handleAddPostFulfilled =(state, {payload}) => {
    state.posts.push(payload)
}

export const handleFetchPostsFulfilled = (state, { payload }) => {
    state.posts = payload;
  };

export const handleAddCommentFulfilled = (state, {payload}) => {
  const index = state.posts.findIndex(item => item.id === payload.id);
  state.posts[index].comments.push(payload)
}

export const handleLikes = (state, {payload}) => {
  const { photoId, userId, action } = payload;
  const post = state.posts.find((item) => item.id === photoId);
  if (action === "increase") {
    post.likes.push(userId)
  } else if (action === "decrease") {
    post.likes = post.likes.filter((id) => id !== userId);
  }
}

export const handlePending = state => {
    state.isLoading = true;
  };

  export const handleFulfilled = state => {
    state.isLoading = false;
    state.error = null;
  };
  
  export const handleError = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  };
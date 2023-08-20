export function handleLogInFulfilled(state, action) {
    state.user = action.payload;
    state.isLoggedIn = true;
  }

export function handleAuthRejected(state, action) {
    state.isLoggedIn = false;
    state.error = action.payload;
    state.authInProgress = false;
  }
  
export function handleLogOutFulfilled(state) {
    state.user.email = null;
    state.user.login = null;
    state.isLoggedIn = false;
  }
  
export function handleUpdateUserFulfilled(state, {payload}) {
    state.user = payload;
    state.isLoggedIn = true;
  }

export function handleAuthPending (state) {
    state.authInProgress = true;
  }

  export function handleAuthFulfilled (state) {
    state.authInProgress = false;
  }

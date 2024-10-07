// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthenticated: false,
//   loading: false,
//   user: null,
//   error: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     loadUserRequest(state) {
//       state.loading = true;
//     },
//     loadUserSuccess(state, action) {
//       state.isAuthenticated = true;
//       state.loading = false;
//       state.user = action.payload;
//     },
//     loadUserFail(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//       state.isAuthenticated = false;
//     },
//     clearErrors(state) {
//       state.error = null;
//     }
//   }
// });

// export const { loadUserRequest, loadUserSuccess, loadUserFail, clearErrors } = userSlice.actions;

// export default userSlice.reducer;





// ******************************************************************************************************************************

// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthenticated: false,
// };

// export const userReducer = createReducer(initialState, {
//   LoadUserRequest: (state) => {
//     state.loading = true;
//   },
//   LoadUserSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.loading = false;
//     state.user = action.payload;
//   },
//   LoadUserFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//     state.isAuthenticated = false;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
// });


// ***************************************************************************

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadUserSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("LoadUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

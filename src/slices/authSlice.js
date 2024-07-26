import { createSlice } from "@reduxjs/toolkit";


const initialState = {                                 
  signupData: null,                                    
  loading: false,    //localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed.
  token: localStorage.getItem("token")? (JSON.parse(localStorage.getItem("token"))) : (null),
    // token: localStorage.getItem("token") || (null),
};


const authSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {              //reducers are functions that control changes to a Redux store's state.
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
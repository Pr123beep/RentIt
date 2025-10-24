import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isUpdated: false,
  isLoading: false,
  isError: false,
  isSweetAlert:false,
  isPageLoading:false,
  isOrderModalOpen:false,
  singleOrderDetails:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
    },
    loadingEnd: (state) => {
      state.isLoading = false;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isError = false;
      state.isLoading = false;
    },
    signInFailure: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
    deleteUserStart: (state) => {
      state.isLoading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.isError = false;
      state.isLoading = false;
    },
    deleteUserFailure: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.isError = false;
    },
    editUserProfile: (state, action) => {
      const { username, email, phoneNumber, adress } = action.payload;
      console.log("editUserProfile reducer called with:", action.payload);
      console.log("Current user before update:", state.currentUser);
      
      // Only update if currentUser exists
      if (state.currentUser) {
        if (username !== undefined) state.currentUser.username = username;
        if (email !== undefined) state.currentUser.email = email;
        if (phoneNumber !== undefined) state.currentUser.phoneNumber = phoneNumber;
        if (adress !== undefined) state.currentUser.adress = adress;
        
        console.log("Current user after update:", state.currentUser);
      } else {
        console.error("Cannot update profile: currentUser is null!");
      }
    },
    setUpdated: (state, action) => {
      state.isUpdated = action.payload;
    },
    setIsSweetAlert: (state, action) => {
      state.isSweetAlert = action.payload;
    },
    setPageLoading:(state,action) => {
      state.isPageLoading = action.payload
    },
    setIsOrderModalOpen: (state,action) => {
      state.isOrderModalOpen = action.payload
    },
    setSingleOrderDetails:(state,action) => {
      state.singleOrderDetails = action.payload
    }
  },
});

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
  editUserProfile,
  setUpdated,
  loadingEnd,
  setIsSweetAlert,
  setPageLoading,
  setIsOrderModalOpen,
  setSingleOrderDetails
} = userSlice.actions;

export default userSlice.reducer;

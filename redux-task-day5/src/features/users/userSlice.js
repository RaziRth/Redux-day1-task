import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

// Thunk action for API call
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersStart());

    try {
      const response = await axios.get('https://dummyjson.com/users');
      dispatch(fetchUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} = userSlice.actions;

export default userSlice.reducer;
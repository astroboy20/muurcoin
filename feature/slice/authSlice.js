import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../authservice";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

//Register user

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(BiMessageAltEdit);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        state.message = toast.success( action.payload);
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;

        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

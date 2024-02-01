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
    } catch (errors) {
      const message =
        (errors.response && errors.response.data.message) ||
        errors.message ||
        errors.toString() ||
        message;
      console.log("message", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (errors.response && errors.response.data.message) ||
      errors.message ||
      errors.toString() ||
      message;
    console.log("message", message);
    return thunkAPI.rejectWithValue(message);
  }
});

//logout user
export const logoOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    const message =
      (error.response && error.response.data.message.message) ||
      error.message ||
      error.toString() ||
      message;

    return thunkAPI.rejectWithValue(message);
  }
});
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
      //register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        state.message = action.payload.status;
        toast.success("Registration Successful");
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //login
      .addCase(login.pending, (state) => {})
      
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        state.message = action.payload.status;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //logout
      .addCase(logoOut.fulfilled, (state, action) => {
        state.user = action.payload;
        state.message = action.payload.status;
        toast.success("Registration Successful");
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

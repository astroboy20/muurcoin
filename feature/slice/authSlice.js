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
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (errors) {
    const message =
      (errors.response && errors.response.data.message) ||
      errors.message ||
      errors.toString() ||
      message;
    return thunkAPI.rejectWithValue(message);
  }
});

//forgot password

export const resetEmail = createAsyncThunk(
  "auth/forgot-password",
  async (email, thunkAPI) => {
    try {
      return await authService.reset_with_email(email);
    } catch (errors) {
      const message =
        (errors.response && errors.response.data.message) ||
        errors.message ||
        errors.toString() ||
        message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//reset password
export const resetPassword = createAsyncThunk(
  "auth/reset-password",
  async (resetDetails, thunkAPI) => {
    try {
      return await authService.reset_Password(resetDetails);
    } catch (errors) {
      const message =
        (errors.response && errors.response.data.message) ||
        errors.message ||
        errors.toString() ||
        message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
//logout user
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
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
    clearUser:(state)=>{
      state.user=null
    }
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
        toast.success(action.payload.status);
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        state.message = action.payload.message;
        toast.success(action.payload?.message)
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //reset_email
      .addCase(resetEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetEmail.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(resetEmail.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      
      //reset_password
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })

      //logout
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = null;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload.status;
        toast.success(action.payload.status);
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload.status);
      });
  },
});

export const { reset,clearUser } = authSlice.actions;
export default authSlice.reducer;

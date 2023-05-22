import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Action,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';
import { RegisterT } from '../../types/authType';
import instance from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REGISTRATION_CREATOR } from '../actionCreators/authCreators';
import { REGISTRATION_PATH } from '../../utils/consts';

type InitialAuthDataT = {
  username: string;
  email: string;
  roles: string[];
  token: string;
  _id: string;
};

const initialState: InitialAuthDataT = {
  username: '',
  email: '',
  roles: [],
  token: '',
  _id: '',
};

export const registerUser = createAsyncThunk(
  REGISTRATION_CREATOR,
  async ({ username, password, email }: RegisterT) => {
    try {
      const { data } = await instance.post<InitialAuthDataT>(
        REGISTRATION_PATH,
        {
          username,
          password,
          email,
        }
      );
      if (data.token) {
        await AsyncStorage.setItem('@token', data.token);
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// export const loginUser = createAsyncThunk('auth/loginUser', async ({ username, password }) => {
//   try {
//     const { data } = await instance.post('/auth/login', { username, password });
//     if (data.token) {
//       localStorage.setItem('token', data.token);
//     }
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const getMe = createAsyncThunk('auth/me', async () => {
//   try {
//     const { data } = await instance.get('/auth/me');
//     if (data.token) {
//       localStorage.setItem('token', data.token);
//     }
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // logout: (state,action : PayloadAction<string>) => {
    //   state.user = null;
    //   state.token = null;
    //   state.isLoading = false;
    //   state.status = null;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(
      registerUser.pending,
      (state, { payload }: PayloadAction<InitialAuthDataT>) => {
        state.username = payload.username;
        state.email = payload.email;
        state.roles = payload.roles;
        state.token = payload.token;
        state._id = payload._id;
      }
    );
  },
});

export const checkIsAuth = (state) => Boolean(state.auth.token);

export default authSlice.reducer;
// export const { logout } = authSlice.actions;

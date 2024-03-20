import { RootState } from "../../reducrs/rootReeducer";
import { AuthState } from "./AuthSliceTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: "",
};

export const AuthsSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setLoading: (state: AuthState, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
    }
})

export const {
    setLoading,
  } = AuthsSlice.actions;

  export const authSelector = (state: RootState) => state.auth;
export default AuthsSlice.reducer;

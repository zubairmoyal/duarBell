import { combineReducers, Reducer } from "@reduxjs/toolkit";
import AuthReducer from "../Slice/LoginService/AuthSlice"
const combinedReducer = combineReducers({
  auth: AuthReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer = (state: RootState, action: any) => {
  if (action.type === "auth/logout") {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

// const rootReducer = combineReducers({
//   authReducer: authReducer,
// });

// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
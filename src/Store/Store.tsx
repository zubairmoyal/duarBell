import { configureStore, Action } from "@reduxjs/toolkit";
import { setAutoFreeze } from "immer";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "../reducrs/rootReeducer";
// const middleware = [...getDefaultMiddleware()];
setAutoFreeze(false);
const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;

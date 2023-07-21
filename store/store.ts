import { AnyAction, combineReducers } from "redux";
import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { projectsReducer } from "@/store/projects-reducer";

const rootReducer = combineReducers({
  photosProjects: projectsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppThunkDispatchType = ThunkDispatch<
  AppRootStateType,
  any,
  AnyAction
>;
export const useAppDispatch = () => useDispatch<AppThunkDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;

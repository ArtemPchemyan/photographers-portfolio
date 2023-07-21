import { createSlice } from "@reduxjs/toolkit";
import { PHOTOS_PROJECTS } from "@/store/model/projects-store";

const initialState = PHOTOS_PROJECTS;

const slice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export const projectsReducer = slice.reducer;
export const projectsActions = slice.actions;

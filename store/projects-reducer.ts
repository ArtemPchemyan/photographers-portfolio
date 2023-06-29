import { createSlice } from "@reduxjs/toolkit";
import { PROJECTS } from "@/store/model/projects-store";

const initialState = PROJECTS;

const slice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export const projectsReducer = slice.reducer
export const projectsActions = slice.actions

import { createSlice } from "@reduxjs/toolkit";
import { VIDEOS_PROJECTS } from "@/store/model/videos-projects-store";

const initialState = VIDEOS_PROJECTS;

const slice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
});

export const videosProjectsReducer = slice.reducer;
export const videosProjectsActions = slice.actions;

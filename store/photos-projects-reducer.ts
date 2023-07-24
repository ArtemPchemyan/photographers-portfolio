import { createSlice } from "@reduxjs/toolkit";
import { PHOTOS_PROJECTS } from "@/store/model/photos-projects-store";

const initialState = PHOTOS_PROJECTS;

const slice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
});

export const photosProjectsReducer = slice.reducer;
export const photosProjectsActions = slice.actions;

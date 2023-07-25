import barberVideoCover from "./videos-covers/barber-video-cover.jpg";
import clubVideoCover from "./videos-covers/club-video-cover.jpg";
import matokaVideoCover from "./videos-covers/matoka-video-cover.jpg";
import slangVideoCover from "./videos-covers/slang-video-cover.jpg";
import { StaticImageData } from "next/image";

export type VideosProjectsStateType = {
  id: string;
  title: string;
  cover: StaticImageData;
  album: string[];
};

export const VIDEOS_PROJECTS: VideosProjectsStateType[] = [
  {
    id: "0",
    title: "Slang Language School",
    cover: slangVideoCover,
    album: ["cD4vXJ-YoJQ", "fu0VCOvwaYo"],
  },
  {
    id: "1",
    title: "Matoka",
    cover: matokaVideoCover,
    album: ["FQJOKLYcEJs", "Z3acn0kDdEI"],
  },
  {
    id: "2",
    title: "Club Videos",
    cover: clubVideoCover,
    album: ["71Y7jqVkr6A", "nuwNkag844g"],
  },
  {
    id: "3",
    title: "Barber",
    cover: barberVideoCover,
    album: ["f6JwTAFoFMM"],
  },
];

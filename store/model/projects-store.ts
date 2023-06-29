import street1 from "store/model/albums-src/street/9a2ed563-0e24-4522-8fa1-c3eb0a18a9a3.jpg";
import street2 from "store/model/albums-src/street/7d731c99-a7df-4112-812b-316067d2d023.jpg";
import street3 from "store/model/albums-src/street/3cc66494-e5f7-4d76-b22f-54f692c7b68a.jpg";
import art11 from "store/model/albums-src/art1/326e8d18-6873-4233-bc3b-898bad343644.jpg";
import art12 from "store/model/albums-src/art1/ffa55616-48b4-46f2-b4d4-d4afacce40bb.jpg";
import art13 from "store/model/albums-src/art1/4529b35a-104e-4e56-8af2-05cbc946c5ca.jpg";
import club1 from "store/model/albums-src/club/7fb57ae3-4f41-474f-bb7d-c1d6ebf52c8c_rw_1920.jpg";
import club2 from "store/model/albums-src/club/2b401f02-e087-44f3-a430-a91acc69e852_rw_1920.jpg";
import club3 from "store/model/albums-src/club/1c02a889-6d81-4c3f-8755-920e00da1c2a_rw_1920.jpg";
import exibition1 from "store/model/albums-src/exibition/DSCF4566.jpg";
import exibition2 from "store/model/albums-src/exibition/DSCF4594.jpg";
import exibition3 from "store/model/albums-src/exibition/DSCF4581.jpg";
import fashion1 from "store/model/albums-src/fashion/0a406684-e1e8-4b6f-bd3a-b3b776abae9f.jpg";
import fashion2 from "store/model/albums-src/fashion/1e80b346-e41c-493f-9b2f-21656a233742.jpg";
import fashion3 from "store/model/albums-src/fashion/7d4a75a5-1d87-4861-af37-fdaab80b87cc.jpg";
import matoka1 from "store/model/albums-src/matoka/DSCF0030-восстановлено.jpg";
import matoka2 from "store/model/albums-src/matoka/1.jpg";
import matoka3 from "store/model/albums-src/matoka/DSCF0012.jpg";
import dentist1 from "store/model/albums-src/dentist/910037c8-40e7-4d23-aa8b-86d4e5f68102_rw_1920.jpg";
import dentist2 from "store/model/albums-src/dentist/59ac6c1a-b1db-45c6-ad4d-ae521260be41_rw_3840.jpg";
import dentist3 from "store/model/albums-src/dentist/2ef55ab1-0bbf-4cb1-af34-8503afde7623_rw_1920.jpg";
import parliament1 from "store/model/albums-src/parliament/DSCF0988.jpg";
import parliament2 from "store/model/albums-src/parliament/DSCF0944.jpg";
import parliament3 from "store/model/albums-src/parliament/DSCF0977.jpg";
import art21 from "store/model/albums-src/art2/695c66aa-255c-4c41-bd40-7cc82429fa14.jpg";
import art22 from "store/model/albums-src/art2/890a767f-b263-4307-8679-db881505211e.jpg";
import art23 from "store/model/albums-src/art2/5a27fc1c-14e2-407f-9aae-a67f805fcffd.jpg";
import art31 from "store/model/albums-src/art3/1.jpg";
import art32 from "store/model/albums-src/art3/2.jpg";
import art33 from "store/model/albums-src/art3/3.jpg";
import cilantro1 from "store/model/albums-src/cilantro/0ef1636e-eb28-4cfd-9867-106f90606c5c_rw_1920.jpg";
import cilantro2 from "store/model/albums-src/cilantro/5f8d4a9d-2626-49f9-8156-fc1316898723_rw_1920.jpg";
import cilantro3 from "store/model/albums-src/cilantro/5b8e49ec-7904-477e-8ade-2c4ebc5173b3_rw_1920.jpg";
import meat1 from "store/model/albums-src/meat/5eda0d6e-5c27-4955-bcc2-22e18c6c0368.jpg";
import meat2 from "store/model/albums-src/meat/8c8eaf19-3f81-4bfe-a679-ee9149882f1b_rw_1920.jpg";
import meat3 from "store/model/albums-src/meat/3cd99fa7-5cb4-4991-8cad-7bf562210436_rw_1920.jpg";
import { StaticImageData } from "next/image";

export type ProjectStateType = {
  id: string;
  title: string;
  description: string;
  album: AlbumType[];
  // style: {
  //   gridArea: string;
  //   background: string;
  // };
};

export type AlbumType = {
  id: string;
  src: StaticImageData;
};

const STREET_ALBUM: AlbumType[] = [
  { id: "0", src: street1 },
  { id: "1", src: street2 },
  { id: "2", src: street3 },
];
const ART1_ALBUM: AlbumType[] = [
  { id: "0", src: art11 },
  { id: "1", src: art12 },
  { id: "2", src: art13 },
];
const CLUB_ALBUM: AlbumType[] = [
  { id: "0", src: club1 },
  { id: "1", src: club2 },
  { id: "2", src: club3 },
];
const EXIBITION_ALBUM: AlbumType[] = [
  { id: "0", src: exibition1 },
  { id: "1", src: exibition2 },
  { id: "2", src: exibition3 },
];
const FASHION_ALBUM: AlbumType[] = [
  { id: "0", src: fashion1 },
  { id: "1", src: fashion2 },
  { id: "2", src: fashion3 },
];
const MATOKA_ALBUM: AlbumType[] = [
  { id: "0", src: matoka1 },
  { id: "1", src: matoka2 },
  { id: "2", src: matoka3 },
];
const DENTIST_ALBUM: AlbumType[] = [
  { id: "0", src: dentist1 },
  { id: "1", src: dentist2 },
  { id: "2", src: dentist3 },
];
const PARLIAMENT_ALBUM: AlbumType[] = [
  { id: "0", src: parliament1 },
  { id: "1", src: parliament2 },
  { id: "2", src: parliament3 },
];
const ART2_ALBUM: AlbumType[] = [
  { id: "0", src: art21 },
  { id: "1", src: art22 },
  { id: "2", src: art23 },
];
2;
const ART3_ALBUM: AlbumType[] = [
  { id: "0", src: art31 },
  { id: "1", src: art32 },
  { id: "2", src: art33 },
];
const CILANTRO_ALBUM: AlbumType[] = [
  { id: "0", src: cilantro1 },
  { id: "1", src: cilantro2 },
  { id: "2", src: cilantro3 },
];
const MEAT_ALBUM: AlbumType[] = [
  { id: "0", src: meat1 },
  { id: "1", src: meat2 },
  { id: "2", src: meat3 },
];

export const PROJECTS: ProjectStateType[] = [
  {
    id: "0",
    title: "Street",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit.",
    album: STREET_ALBUM,
    // style: {gridArea: "project1", background: "#ffc504"},
  },
  {
    id: "1",
    title: "Art1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: ART1_ALBUM,
    // style: {gridArea: "project2", background: "#c2f50a"},
  },
  {
    id: "2",
    title: "Clubs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: CLUB_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
  {
    id: "3",
    title: "Exibition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: EXIBITION_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
  {
    id: "4",
    title: "Fashion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: FASHION_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
  {
    id: "5",
    title: "Matoka",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: MATOKA_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
  {
    id: "6",
    title: "Dentist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: DENTIST_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
  {
    id: "7",
    title: "Cilantro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: CILANTRO_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
  {
    id: "8",
    title: "Parliament",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: PARLIAMENT_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
  {
    id: "9",
    title: "Art2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: ART2_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
  {
    id: "10",
    title: "Art3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: ART3_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
  {
    id: "11",
    title: "Meat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.",
    album: MEAT_ALBUM,
    // style: {gridArea: "project3", background: "#77c7c8"},
  },
];

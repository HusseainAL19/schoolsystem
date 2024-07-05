import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { darkThme, whiteTheme } from "./colors";

interface initalStateTyps {
  themeType: string;
  colors: {
    fontColor: string;
    mainBackGroundColor: string;
    outColor: string;
    blackColor: string;
    SidBar: string;
    SidBarfont: string;
    OrngColor: string;
    greenColor: string,
    gray:string,
    Navsheet:string
    purpleColor: string;
    button:string,
    Darkblue: string,
    bgsheet:string,
    ylawoColor: string,
    card:string,
    shadowColor: string;
  };
}

const initialState: initalStateTyps = darkThme;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: initalStateTyps) => {
      if (state.themeType === "dark") {
        state = whiteTheme;
      }
      if (state.themeType === "white") {
        state = darkThme;
      } else {
        return;
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

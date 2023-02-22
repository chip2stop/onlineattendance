import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: {
    total: 1,
  },
  reducers: {
    increment: (state) => {
      return { ...state, total: state.total + 1 };
    },
    decrement: (state) => {
      if 
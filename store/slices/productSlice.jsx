import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import data from "../../data/product";

const slice = createSlice({
  name: "product",
  initialState: data,
  reducers: {
    insert: (state, action) => {
      if (action.payload.productName) {
        let newState = [...state];
        newState.push({
          id: uuid(),
          productName: action.payload.productName,
          category: actio
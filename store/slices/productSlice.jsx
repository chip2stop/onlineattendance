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
          category: action.payload.category,
          totalValue: action.payload.totalValue,
          dateMade: action.payload.dateMade,
        });
        return newState;
      }
    },
    edit: (state, action) => {
      // loop to check if the id exists in my list, and then change the data accord
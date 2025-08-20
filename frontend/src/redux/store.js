import { combineSlices } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { customersSlice } from "./slices/customersSlice";

const reducer = combineSlices(customersSlice)
export const STORE = configureStore({
    reducer: reducer
});
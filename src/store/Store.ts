import { configureStore } from "@reduxjs/toolkit"
import {pledgeSlice} from "./features/pledgeSlice"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer: {
        pledge: pledgeSlice.reducer
    }
})

export const useAppDispatch:() => typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
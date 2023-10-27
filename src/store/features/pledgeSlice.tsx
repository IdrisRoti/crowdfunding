import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type status = {
    backed: number,
    backers: number,
    daysLeft: number,
    toBeBacked: number
}

const initialState:status = {
        backed: 89914,
        backers: 5007,
        daysLeft: 56,
        toBeBacked: 100000
    }

export const pledgeSlice = createSlice({
    name: "pledge",
    initialState,
    reducers: {
        updatePledge: (state, action:PayloadAction<number>) => {
            state.backed += action.payload,
            state.backers += 1
        }
    }
})

export default pledgeSlice.reducer;
export const { updatePledge } = pledgeSlice.actions;
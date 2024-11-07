//FILL HERE 3.1

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type  FloorState = [boolean, boolean, boolean, boolean, boolean]

const initialState: FloorState = [false, false, false, false, false]

export const floorReducer = createSlice({
  name: 'floorAccess',
  initialState,
  reducers: {
    changeAccess : (state: FloorState, action: PayloadAction<number>) => {
      state[action.payload] = !state[action.payload]
    },
  },
})

export const {changeAccess} = floorReducer.actions

export default floorReducer.reducer
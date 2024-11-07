//FILL HERE 3.1

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface  FloorState {
  floorAccess: AccessType
  }

type AccessType = [boolean, boolean, boolean, boolean, boolean] 

const initialState: FloorState = { floorAccess: [false, false, false, false, false] }

export const floorReducer = createSlice({
  name: 'floorAccess',
  initialState,
  reducers: {
    changeAccess : (state: FloorState, action: PayloadAction<number>) => {
      state.floorAccess[action.payload] = !state.floorAccess[action.payload]
    },
  },
})

export const {changeAccess} = floorReducer.actions

export default floorReducer.reducer
//FILL HERE 3.1

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface  FloorState{
  floor1: boolean
  floor2: boolean
  floor3: boolean
  floor4: boolean
  floor5: boolean
}

const initialState: FloorState = {
  floor1: false,
  floor2: false,
  floor3: false,
  floor4: false,
  floor5: false,
}

type floors =
  'floor1' |
  'floor2' |
  'floor3' |
  'floor4' |
  'floor5'

export const floorReducer = createSlice({
  name: 'floorAccess',
  initialState,
  reducers: {
    changeAccess : (state: FloorState, action: PayloadAction<number>) => {

      state[(`floor${action.payload}`as floors)] = !state[(`floor${action.payload}`as floors)]
    },
  },
})

export const {changeAccess} = floorReducer.actions

export default floorReducer.reducer
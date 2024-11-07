//FILL HERE 3.2
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import roles from '../data/roles.json'

export interface RoleState {
  role: RoleType
}

type RoleType = "Unknown Personnel" | "Guest" | "Student" | "Developer" | "Executive Personnel"

const initialState: RoleType = roles[0] as RoleType

export const RoleReducer = createSlice({
  name: 'roleAccess',
  initialState,
  reducers: {
    setRole : (state: RoleType, action: PayloadAction<number>) => {
      state = roles[action.payload] as RoleType
      return state
    },
  },
})

export const {setRole} = RoleReducer.actions

export default RoleReducer.reducer
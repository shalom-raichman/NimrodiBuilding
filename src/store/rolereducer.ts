//FILL HERE 3.2
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import roles from '../data/roles.json'

export interface RoleState {
  role: RoleType
}

type RoleType = "Unknown Personnel" | "Guest" | "Student" | "Developer" | "Executive Personnel"

const initialState: RoleState = {role: roles[0] as RoleType}

export const RoleReducer = createSlice({
  name: 'roleAccess',
  initialState,
  reducers: {
    setRole : (state: RoleState, action: PayloadAction<number>) => {
      state.role = roles[action.payload] as RoleType
    },
  },
})

export const {setRole} = RoleReducer.actions

export default RoleReducer.reducer
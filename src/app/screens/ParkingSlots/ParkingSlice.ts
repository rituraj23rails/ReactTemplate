/**
 PARKING SLOTS SLICE
 */
 import { createSlice, PayloadAction } from '@reduxjs/toolkit'

 export interface LOCATION_STATE {
   parkingData: Array<any>;
 }
 
 const initialState: LOCATION_STATE = {
   parkingData: []
 }
 
 /* istanbul ignore next */
 export const parkingSlice = createSlice({
   name: 'Parking',
   initialState,
   reducers: {
     updateParkingData: (state, action) => {
        state.parkingData = action.payload;
     }
   },
 })
 
 // Action creators are generated for each case reducer function
 export const { updateParkingData } = parkingSlice.actions
 
 export default parkingSlice.reducer;
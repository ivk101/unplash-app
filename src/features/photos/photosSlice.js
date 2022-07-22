import { createSlice } from '@reduxjs/toolkit';

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    data: [6],
    pages: [],
  },
  reducers: {
    increment: (state) => { 
      state.data[0] += 1
    },
    decrement: (state) => {
      state.data[0] -= 1
    },
    incrementByAmount: (state, action) => {
      state.data[0] += action.payload
    }, 
    addValues: (state, action) => {   
      state.data = [...state.data, ...action.payload]          
    },
    increaseLike: (state, action) => {
      console.log(action.payload)
      let obj = state.data.find(item => item.id === action.payload )
      obj.likes += 1
    },
    decreaseLike: (state, action) => {
      console.log(action.payload)
      let obj = state.data.find(item => item.id === action.payload )
      obj.likes -= 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addValues, increaseLike, decreaseLike } = photosSlice.actions;

export default photosSlice.reducer;
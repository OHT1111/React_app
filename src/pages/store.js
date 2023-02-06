import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {name: '김컬리', memberYear: 0},
  reducers: {
    changeName(state) {
      state.name = '오개똥'
    },
    changeYear(state, action) {
      state.memberYear += action.payload
    }
  }
})



export const { changeName, changeYear } = user.actions

export default configureStore({
  reducer: {
    user: user.reducer
  }
})
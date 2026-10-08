import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // const response = await axios.get('data.json')

    return response.data
  }
)

// export const addUser = createAsyncThunk(
//   'users/addUser',
//   async (newUser) => {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser)
//     return response.data
//   }
// )

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      //  .addCase(addUser.pending, (state) => {
      //   state.loading = true
      // })
      // .addCase(addUser.fulfilled, (state, action) => {
      //   state.loading = false
      //   state.users.push(action.payload)  
      // })
      // .addCase(addUser.rejected, (state, action) => {
      //   state.loading = false
      //   state.error = action.error.message
      // })

  }
})

export default userSlice.reducer

// // // basic syntax
// export const action_name = createAsyncThunk(
//   'slice_name/action_name',
//   async (parameter)=>{
//     const res = await axios.HTTP_method('......')
//     return res.data
//   }
// )


// // // add case syntax
// addCase(action_name,(state,action)=>{
//   update_state
// })
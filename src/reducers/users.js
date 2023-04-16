import { createSlice } from "@reduxjs/toolkit";
import { users } from "../Data/data";

export const userSlice = createSlice({

    name:"users",
    initialState:{value:users},
    reducers: {
addusers: (state,action) =>
{
state.value.push(action.payload);

},

deleteusers:(state,action) =>
{
state.value = state.value.filter((user) => user.id !== action.payload.id);

},
updateusers:(state,action) =>
{
    state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
      });
},

    },

});
export const {addusers,deleteusers,updateusers} = userSlice.actions;
export default userSlice.reducer;


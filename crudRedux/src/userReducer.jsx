import {createSlice} from '@reduxjs/toolkit'
import { userList } from './Data.jsx'

const userSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
            const {id,name,email} = action.payload
            const uu = state.find(user => user.id == id)
            if(uu){
                uu.name = name,
                uu.email=email
            }
        },
        deleteUser:(state,action) =>{
            const {id} = action.payload
            // const itemToDel = state.filter(user =>user.id == id)
            const index = state.findIndex(user => user.id == id)
            state.splice(index,1)
        }
    }
})
export const {addUser,updateUser,deleteUser} = userSlice.actions

export default userSlice.reducer
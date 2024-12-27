import { createSlice } from "@reduxjs/toolkit";



let user = createSlice({       // useState 역할임
    name : 'user',
    initialState : {name : 'kim', age : 20},

    reducers : {
        changeName (state){
            state.name = 'park'
        },
        increaseAge (state, action){
            state.age += action.payload
        }        
    }, 

})

export let {changeName, increaseAge} = user.actions;

export default user;
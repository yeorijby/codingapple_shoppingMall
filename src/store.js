import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import cart from "./store/cartSlice";


// let cart = createSlice({       // useState 역할임
//     name : 'cart',
//     initialState : [
//         {id : 0, name : 'White and Black', count : 2},
//         {id : 2, name : 'Grey Yordan', count : 1}
//     ], 

//     reducers : {
//         increaseCount : (state, action) => {
//             // 1. 일단 배열에서 인덱스를 찾기
//             const selIndex = state.findIndex((element) => element.id == action.payload);

//             state[selIndex].count++;
//         }
//     }, 
// })
// export let {increaseCount, } = cart.actions;

export default configureStore({
    // 등록하는 부분
    reducer : {
        user : user.reducer,
        //stock : stock.reducer,
        cart : cart.reducer
    }
})


// index.js에서 쓰도록 세팅할것!!!
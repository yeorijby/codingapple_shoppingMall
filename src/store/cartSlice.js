import { createSlice } from "@reduxjs/toolkit";


let cart = createSlice({       // useState 역할임
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ], 

    reducers : {
        increaseCount : (state, action) => {
            // 1. 일단 배열에서 인덱스를 찾기
            const selIndex = state.findIndex((element) => element.id == action.payload);

            state[selIndex].count++;
        },
        deleteGood : (state, action) => {
            // 1. 일단 배열에서 인덱스를 찾기
            const selIndex = state.findIndex((element) => element.id == action.payload);

            // 2. 해당 인덱스만 삭제하기
            state.splice(selIndex, 1);
        },
        decreaseCount: (state, action) => {
            const selIndex = state.findIndex((element) => element.id == action.payload);

            if (selIndex !== -1) {
                if (state[selIndex].count === 0) {
                    // 삭제해야 함! deleteGood을 디스패치
                    //action.dispatch(deleteGood(action.payload)); // action.dispatch를 사용하여 deleteGood 호출
                    state.splice(selIndex, 1);
                } else {
                    // 카운트 감소
                    state[selIndex].count--;
                }
            }
        },
           
        addGood : (state, action) => {
            //let copy = [...state];
            let selIndex = state.findIndex((element) => element.id == action.payload.id);
            console.log(action.payload);

            if (selIndex < 0 ){
                //// 카트에 추가되지 않은 제품인가?   - 새로운 항목 insert
                let addedGood = {id : -1, name : '', count : 0};
                addedGood.id = action.payload.id;
                addedGood.name = action.payload.title;
                addedGood.count = 1;

                state.push(addedGood);
            }
            else 
            {
                //// 이미 카트에추가 된 제품 -> 카운트만 증가
                state[selIndex].count++;    
            }

        }, 

    }, 
})
export let {increaseCount, addGood, decreaseCount, deleteGood} = cart.actions;

export default cart;
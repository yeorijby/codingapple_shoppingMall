import React, { useContext, useEffect, useState, memo, useMemo, useTransition, useDeferredValue } from "react";
import { useParams } from "react-router-dom";       // 페이지 끼리 Url상의 파라미터를 넘길때 '/:id'
import { Button, Nav, NavDropdown, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount, deleteGood } from "../store/cartSlice";
//import { increaseCount } from "../store";
import { changeName, increaseAge } from "../store/userSlice";

// 성능저하를 강제로 일으킴
let arr = new Array(5000).fill(0);

function Cart({shoes}){  
    let [fade, setFade] = useState('');
    let [count, setCount] = useState(0);
    let [name, setName] = useState('이름없다');

    let [isPending, 늦게처리] = useTransition();

    let state = useDeferredValue(name);



    // Redux store 가져와줌
    let carts = useSelector((state)=>{return state.cart});
    let user = useSelector((state)=>{return state.user});

    let dispatch = useDispatch();

    useEffect(()=>{
        let oneTime = setTimeout(()=>{setFade('end')},100)
        return ()=> {
            clearTimeout(oneTime);
            setFade('');
        }
    }, [])
    return (
        <div className={`container start ${fade}`}>
            {user.name} (나이 : {user.age})의 장바구니
            <Button onClick={()=>{dispatch((changeName(user)))}}>이름 변경</Button>
            <Button onClick={()=>{dispatch((increaseAge(100)))}}>나이 증가</Button>
            <Button onClick={()=>{setCount(count+1)}}>+</Button>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map((element, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.count}</td>
                                    <td>
                                        <button onClick={() => {
                                            dispatch((increaseCount(element.id)))
                                        }}>+</button>
                                        <button onClick={() => {
                                            dispatch((decreaseCount(element.id)))
                                        }}>-</button>
                                        <button onClick={() => {
                                            dispatch((deleteGood(element.id)))
                                        }}>삭제</button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                </tbody>
                </Table>   
                <input onChange={(e)=>{
                    늦게처리(()=>{setName(e.target.value)})
                }}/>
                {
                    isPending ? '로딩중':
                    arr.map((element,index)=>{
                        return <div>{state}</div>
                    })
                }
                         
        </div> 
    )

}
export default Cart;
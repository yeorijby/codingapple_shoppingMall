import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";       // 페이지 끼리 Url상의 파라미터를 넘길때 '/:id'
import { Button, Nav, NavDropdown } from 'react-bootstrap';
//import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//import { Context1 } from "../App";
import { addGood } from "../store/cartSlice";

// let YellowBtn = styled.button`
//     background : ${ props => props.bg};
//     color : ${ props => props.bg == 'blue' ? 'white':'black'};
//     padding : 10 px;
// `

// let Box = styled.div`
//     background : grey;
//     padding : 20 px
// `

function Detail({shoes}){  
    //let { 재고} = useContext(Context1);

    // let [timeout, setTimeout] = useState(true);
    let [count, setCount] = useState(0);
    // let [input, setInput] = useState(0);
    let [seltab, setSelTab] = useState(0);
    // let [fade, setFade] = useState('');

    // ////// 복잡한 계산, 서버에서 뭐 받아오는 경우 
    // useEffect(()=>{
    //     if (isNaN(input) == true) {
    //         alert("숫자만 입력하세용~~");
    //     }     
    //     // // 타이머 주는 방법
    //     // let a = setTimeout(()=>{
    //     //     setTimeout(false);
    //     // }, 2000);

    //     // // return을 추가 할수가 았다.
    //     // return () => {
    //     //     // useEffect가 실행되기 전에 실행되는 내용

    //     //     // EX) 기존 타어머를 제거하는 내용을 이곳에 적을수가 있다.
    //     //     clearTimeout(a);
    //     // }
    // }, [input])

    // useEffect(()=>{
    //     let oneTime = setTimeout(()=>{setFade('end')},100)
    //     return ()=> {
    //         clearTimeout(oneTime);
    //         setFade('');
    //     }
    // }, [seltab])
    // useEffect(()=>{ ??? })           ---> 1. 재랜더링마다 코드 실행하고 싶을때 
    // useEffect(()=>{ ??? }, [])       ---> 2. mount시 1회 코드 실행하고 싶을때
    // useEffect(()=>{ ??? }, [count])  ---> 5. 특정 state 변경시에만 실행하려면[state명명]
    // useEffect(()=>{ 
    //      return ()=>{
    //                                  ---> 3. unmount시 1회 코드 실행하고 싶을때    
    //                                  ---> 4. useEffect 실행전에 뭔가 실행하려면     
    //    }
    //  }, [])
    // Redux store 가져와줌
    let carts = useSelector((state)=>{return state.cart});

    let dispatch = useDispatch();

    let {id} = useParams();
    let searchedGood = shoes.find(x => x.id == id);
    //console.log(id);

    useEffect(()=>{
        // console.log(searchedGood.id);
        
        // 1. 현재 로컬 스토리지의 값을 가져온다. 
        let jsonDataOut = localStorage.getItem('watched');
        let objDataOut = JSON.parse(jsonDataOut);
        console.log(jsonDataOut);

        objDataOut.push(searchedGood.id);
        //console.log(jsonDataOut);
        localStorage.setItem('watched', JSON.stringify(objDataOut));



        // // 2. 가져온값에서 현재 ID가 있는지 체크한다. 
        // let copycopy = [...objDataOut];
        // const selIndexIndex = copycopy.findIndex((element) => element.id == id);

        // console.log(selIndexIndex);
        // if (selIndexIndex == -1)
        // {
        //     // 2.1. 현재 ID가 없을 경우 - 가져온 로컬 스토리지 데이터(배열)에 추가한다.
        //     copycopy.push(parseInt(id, 10));

        //     // // 2.1.1. 중복을 제거한다.              - if 다음의 3번과 같음
        //     // let uniqueArray = [...new Set(copycopy)]

        //     // // 2.1.2. id를 로컬 스토리지에 넣는다.   - if 다음의 4번과 같음
        //     // let jsonDataIn = JSON.stringify(uniqueArray);
        //     // console.log(jsonDataIn);
        //     // localStorage.setItem('watched', jsonDataIn);

        // }
        // // 2.2. 현재 ID가 있을 경우 - 아무것도 하지 않는다. 
        // //else {}

        // // 3. 중복을 제거한다. 
        // let uniqueArray = [...new Set(copycopy)]

        // // 4. id를 로컬 스토리지에 넣는다. 
        // let jsonDataIn = JSON.stringify(uniqueArray);
        // console.log(jsonDataIn);
        // localStorage.setItem('watched', jsonDataIn);

    }, [])

        // let jsonDataOut = localStorage.getItem('watched');
        // let objDataOut = JSON.parse(jsonDataOut);
        // //console.log(jsonDataOut);
    
        // // 갯수가 0개인지 체크
        // if (objDataOut.length === 0)
        // {
        //     // 갯수가 0개이면 - 무조건 push
        //     //let intId = parseInt(id, 10);
        //     //console.log('id:'+ id, 'intId:'+ intId);
        //     const mapfn = (arg) => Number(arg)
        //     let arr = Array.from(id, mapfn);
        //     //objDataOut.push(arr);
    
        //     console.log(arr);
    
        //     localStorage.setItem('watched', JSON.stringify(arr));
        //     //localStorage.setItem('watched', arr);
        // }
        // else if (objDataOut.length > 0)
        // {
        //     // 갯수가 0보다 많으면 - 해당 번호가 있는지 체크할 것!
        //     let copycopy = [...objDataOut];
        //     const selIndexIndex = copycopy.findIndex((element) => element.id == id);
    
        //     console.log(selIndexIndex);
        //     if (selIndexIndex == -1)
        //     {
        //         // 갯수가 0개이면 - 무조건 push
        //         copycopy.push(parseInt(id, 10));
    
        //         let uniqueArray = [...new Set(copycopy)]
        //         let jsonDataIn = JSON.stringify(uniqueArray);
        //         console.log(jsonDataIn);
        //         localStorage.setItem('watched', jsonDataIn);
        //     }
        // }
        // // // 갯수가 음수가 나오면
        // // else 
        // // {
        // //     //  아무것도 하지 않음!
        // // }
    let copy = [...shoes];

    // 1. 일단 배열에서 인덱스를 찾기
    const selIndex = copy.findIndex((element) => element.id == id);

    //console.log("셀인덱스 " + selIndex);
    let num = shoes[selIndex].id + 1;

    //const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        // <div className={`container start ${fade}`}>
        <div className={`container`}>
            {/* {timeout == true ? <TimeSale/> : null} */}
            {count}
            <button onClick={()=>{setCount(count+1)}}>버튼</button>
            {/* <YellowBtn bg='blue'>노랑버튼</YellowBtn>
            <YellowBtn bg='skyblue'>노랑버튼</YellowBtn>
                
            <input type="text" onBlur={(e) =>{
                setInput(e.target.value); 
            }}/> */}

            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes" + num + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{shoes[selIndex].title}</h4>
                <p>{shoes[selIndex].content}</p>
                <p>{shoes[selIndex].price}원</p>
                <button className="btn btn-danger"
                    onClick={()=>{
                        dispatch(addGood(shoes[selIndex]));
                    }}
                >주문하기</button> 
                </div>
            </div>
            {/* <Nav variant="tabs" defaultActiveKey='link0' activeKey="1" onSelect={handleSelect}> */}
            <Nav variant="tabs" defaultActiveKey='link0' onSelect={(eventKey)=>{
                //console.log(eventKey.length);
                let index = eventKey.substring(eventKey.length-1);
                //console.log(index);
                setSelTab(index);
                }}>
                <Nav.Item>
                    <Nav.Link eventKey='link0'>버튼 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='link1'>버튼 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='link2'>버튼 2</Nav.Link>
                </Nav.Item>
                {/* <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav> 
            <TabContent selIndex={selIndex} shoes={shoes} seltab={seltab}/>
            {/* <div className={`start ${fade}`}>
                {[<div>{shoes[selIndex].title}</div>, <div>내용1</div>, <div>내용2</div>][seltab]}
            </div> */}
        </div> 
    )

}

function TabContent({selIndex, shoes, seltab}){          // props를 쓰기 귀찮을때 이런식으로 사용가능(props 축약방법) 
    // // 전통적인 방법
    // if (seltab == 0){
    //     return <div>내용0</div>
    // }else if (seltab == 1){
    //     return <div>내용1</div>
    // }else if (seltab == 2){
    //     return <div>내용2</div>
    // }


    //let { 재고} = useContext(Context1);

    let [fade, setFade] = useState('');
    useEffect(()=>{
        let oneTime = setTimeout(()=>{setFade('end')},100)
        return ()=> {
            clearTimeout(oneTime);
            setFade('');
        }
    }, [seltab])
    // 새로운 방법 - 이렇게도 사용이가능하다~~~~~ 신기방기(if문 필요없다)
    return <div className={`start ${fade}`}>
        {[<div>{shoes[selIndex].title}</div>, <div>내용1</div>, <div>내용2</div>][seltab]}
    </div>
}

function TimeSale() {
  return (
    <div className="alert alert-warning">
      <h4>2초 이내 구매시 할인</h4>
    </div>
  )
}
export default Detail;
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col, Table } from 'react-bootstrap';
import bg from './img/bg.png';
import { lazy, Suspense, React, useEffect, useState} from 'react';
import data from './data.js';
import Good from './component/good.jsx';

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import Detail from './route/Detail.jsx';
import Cart from './route/Cart.jsx';

// const Detail = lazy(()=>{import('./route/Detail.jsx')});
// const Cart = lazy(()=>{import('./route/Cart.jsx')});

//export let Context1 = createContext();

function App() {
  // useEffect(()=>{
  //   localStorage.setItem('watched',JSON.stringify([]));
  // },[])

  // let objDataIn = {name : 'kim'}
  // // JSON DATA는 스트링으로 만들어준거임 {'name' : 'kim'} 이런식으로
  // let jsonDataIn = JSON.stringify(objDataIn);
  // localStorage.setItem('data', jsonDataIn);

  // let jsonDataOut = localStorage.getItem('data');
  // let objDataOut = JSON.parse(jsonDataOut);
  // //console.log(objDataOut);

  let [shoes, setShoes] = useState(data);
//  let [재고, 재고변경] = useState([10, 11, 12]);
  let [moreshoes, setMoreShoes] = useState();
  let [more, setMore] = useState(false);

  let navigate = useNavigate();

  // let result1 = useQuery(['작명'], ()=>{
  //   axios.get('https://codingapple1.github.io/userdata.json')
  //   .then((a)=>{
  //     console.log('요청됨')
  //     return a.data
  //   })
  // });

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Carisma</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate('/about/member')}}>About_Member</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/location')}}>About_Location</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event/one')}}>Event_One</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event/two')}}>Event_Two</Nav.Link> */}
          </Nav>
          {/* <Nav className="ms-auto">
            {result1.isLoading && '로딩중'}
            {result1.error && '에러남'}
            {result1.data && result1.data.name}
          </Nav> */}
        </Container>
      </Navbar>
      {/* <div className="banner">
        <Table striped>
          <thead>
              <tr>
                  <th>#</th>
                  <th>상품명</th>
              </tr>
          </thead>
          <tbody>
              {


                watctedGoodObj.map((element, index)=>{
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
      </div> */}
      {/* <Suspense fallback={<div>로딩중입니다.</div>}> */}
        <Routes>
          <Route path='/' element={   
            <>
              <div className='main-bg' style={{backgroundImage:'url(' + bg + ')'}}/>
              <Container>
                <Row>
                  <GoodLine data={shoes}/>
                </Row>
                {/* { (more == true) ? <GoodLine data={moreshoes}/>: null } */}

              </Container>

              <div className="sort-row">
                <Button variant="primary" onClick={()=>{
                  let copy = [...shoes];
                  const result = copy.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1)
                  // console.log(result);
                  setShoes(result);
                }}>상품명 내림차순 정렬</Button>&nbsp; 
                <Button variant="primary" onClick={()=>{
                  let copy = [...shoes];
                  const result = copy.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1);
                  // console.log(result);
                  setShoes(result);
                }}>상품명 오름차순 정렬</Button>                
              </div>
              <div className="sort-row">
                <Button variant="primary" onClick={()=>{
                  let copy = [...shoes];
                  const result = copy.sort((a, b) => a.content.toLowerCase() < b.content.toLowerCase() ? -1 : 1)
                  // console.log(result);
                  setShoes(result);
                }}>내용 내림차순 정렬</Button>&nbsp;   
                <Button variant="primary" onClick={()=>{
                  let copy = [...shoes];
                  const result = copy.sort((a, b) => a.content.toLowerCase() > b.content.toLowerCase() ? -1 : 1);
                  // console.log(result);
                  setShoes(result);
                }}>내용 오름차순 정렬</Button>                
              </div>        
              <div className="sort-row">
                <Button variant="primary" onClick={()=>{
                  let copy = [...shoes];
                  const result = copy.sort((a, b) => a.price - b.price)
                  // console.log(result);
                  setShoes(result);
                }}>가격 내림차순 정렬</Button>&nbsp;      
                <Button variant="primary" onClick={()=>{
                  let copy = [...shoes];
                  const result = copy.sort((a, b) => b.price - a.price);
                  setShoes(result);
                }}>가격 오름차순 정렬</Button>                
              </div>
              <Button onClick={()=>{
                // 로딩중 UI를 띄우고
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                  console.log(result.data);
                  let copy = [...shoes];
                  let copycopy = copy.concat(result.data);      
                  setShoes(copycopy);
                  console.log(copycopy);

                  // 로딩중 UI를 숨기기
                })
                .catch(()=>{
                  console.log('더이상 데이터가 없다니깡... 똑바로해라.');
                  // 로딩중 UI를 숨기기
                })
                
                // // post 요청을 하고 싶을때
                // axios.get('/afdfsdfesefdsd', {name : 'kim'});

                // // axios.get('/url1');
                // // axios.get('/url2');
                // // 위의 두줄 처럼 get 요청을 동시에 여러개를 하고 싶을 때 
                // Promise.all([axios.get('/url1'), axios.get('/url2')])
                // .then(()=>{

                // })

              }}>버튼</Button>   
            </>   
          }/>
          <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>

          <Route path='/cart' element={<Cart shoes={shoes}/>}/>

          {/* <Route path='/about' element={<About/>}>
            <Route path='member' element={<div>멤버임</div>}/>
            <Route path='location' element={<div>위치정보임</div>}/>        
          </Route>
          <Route path='/event' element={<Event/>}>
            <Route path='one' element={<div>첫 주문시 양배추즙 서비스스</div>}/>
            <Route path='two' element={<div>생일 기념 쿠폰 받기기</div>}/>        
          </Route>
          <Route path='*' element={<div>없는 페이지용~~~</div>}/> */}
          
        </Routes>
         
      {/* </Suspense> */}
   </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function GoodLine(props) {
  return (
    <>
      {
        props.data.map((element, index)=>{
          return (
            <Good shoes={props.data[index]}/>
          )
        })
      }
    </>
  )
}


export default App;

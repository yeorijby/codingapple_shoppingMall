import React from "react";
import { Col } from 'react-bootstrap';


function Good(props){
  let num = props.shoes.id + 1;
  //console.log(num);
  let url = 'https://codingapple1.github.io/shop/shoes'+ num +'.jpg';
  
    return (
      <div className="col-md-4">
        <a href={"/detail/" + props.shoes.id}><img src={url} width='80%'/></a>
        <h4> {props.shoes.title} </h4>
        <p> {props.shoes.price} </p>
        <p> {props.shoes.content} </p>
      </div>
    )
}

export default Good;
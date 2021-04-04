import React, { useState } from 'react';
import css from './style.css';
import Axios from 'axios';
import Shadow from '../shadow';

function Modal (props) {

  const [fullName, setFullName] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");

  const addToList =()=> {
    Axios.post("http://localhost:3001/insert", {fullName: fullName, job: job, age:age, sex:sex});
    window.location.reload();
  }

 

  return (
    <div>
    <Shadow show={props.show}/>
    <div className="Modal" style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
            <label>Овог нэр: </label>
              <input 
              type="text"
              onChange = {(event) => {
                setFullName(event.target.value);
              }}  />
            <label>Мэргэжил: </label>
              <input 
              type="text"
              onChange = {(event) => {
                setJob(event.target.value);
              }}  />
            <label>Нас: </label>
              <input 
              type = "number"
              onChange = {(event) => {
                setAge(event.target.value);
              }}  />
            <label>Хүйс: </label>
              <input 
              type = "text"
              onChange = {(event) => {
                setSex(event.target.value);
              }}  />
              <button id="tovch" onClick={addToList} >Илгээх/ хаах</button>
        </div>
    </div>
  );
}

export default Modal ;
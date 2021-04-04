import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import style from './style.css';
import Button from './../button/index';
import Modal from './../modal/index';
import {Link }from 'react-router-dom';



function AnketList(props) {
    console.log(props);
const [anketiinJagsaalt, setAnketiinJagsaalt] = useState([]);
const [newFullName, setNewFullName] = useState("");
const [newJob, setNewJob] = useState("");
const [newAge, setNewAge] = useState("");
const [newSex, setNewSex] = useState("");
    useEffect(()=> {
        Axios.get('http://localhost:3001/read').then((response)=>{
          setAnketiinJagsaalt(response.data);
        })
      }, [])

      const deleteAnket = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
        window.location.reload();
        };

        const updateAnket = (id) => {
            Axios.put("http://localhost:3001/update", {
              id: id, 
              newFullName: newFullName,
              newJob: newJob,
              newAge: newAge,
              newSex: newSex
            });


            window.location.reload(2);
          }



    return (
        <div>
              
            <Link to='/'><h3 id="fas"><i class="fa fa-home" aria-hidden="true"></i>HOME</h3> </Link>
            
            <h2 id="head">БҮРТГҮҮЛСЭН АНКЕТ </h2>
        
            {anketiinJagsaalt.map((e, key) => {
                return (<div key={key} className="cards"> 

                  <table >

                    <tr>
                      <th>Одоогийн мэдээлэл</th>
                      <th>Мэдээллийг засах</th>
                    </tr>

                    <tr>
                      <td><h3>{e.fullName}</h3></td>
                      <td><input id="update" type="text"  placeholder="Овог нэрээ шинээр оруулна уу ..." 
            onChange = {(event) => {
              setNewFullName(event.target.value);
            }} /></td>
                    </tr>
                    <tr>
                      <td><h3>{e.job}</h3></td>
                      <td><input id="update" type="text"  placeholder="Мэргэжлээ шинээр оруулна уу ..." 
            onChange = {(event) => {
              setNewJob(event.target.value);
            }} /></td>
                    </tr>
                    <tr>
                      <td><h3>{e.age}</h3></td>
                      <td><input id="update" type="text"  placeholder="Насаа шинээр оруулна уу ..." 
            onChange = {(event) => {
              setNewAge(event.target.value);
            }} /></td>
                    </tr>
                    <tr>
                      <td><h3>{e.sex}</h3></td>
                      <td><input id="update" type="text"  placeholder="Хүйсээ шинээр оруулна уу ..." 
            onChange = {(event) => {
              setNewSex(event.target.value);
            }} /></td>
                    </tr>

                  </table>

                        
                        
                                <button onClick={()=> deleteAnket(e._id)}>Delete</button>
                                
                                <button onClick={() => updateAnket(e._id)} >Update</button>
                                
                                
                        </div>)})}




            {/* {anketiinJagsaalt.map((e, key) => {
                return (<div key={key} className="cards"> 
                        <ul id="jagsaalt">
                            
                            <li><h3>{e.fullName} <input id="update" type="text"  placeholder="Овог нэрээ шинээр оруулна уу ..." 
            onChange = {(event) => {
              setNewFullName(event.target.value);
            }} /></h3> </li>
                            <li>{e.job}<input id="update" type="text"  placeholder="Мэргэжлээ шинээр оруулна уу ..." 
            onChange = {(event) => {
              setNewJob(event.target.value);
            }} /></li>
                            <li>{e.age}<input id="update" type="text"  placeholder="Насаа шинээр оруулна уу ..." 
            onChange = {(event) => {
              setNewAge(event.target.value);
            }} /></li>
                            <li>{e.sex}<input id="update" type="text"  placeholder="Хүйсээ шинээр оруулна уу ..." 
            onChange = {(event) => {
              setNewSex(event.target.value);
            }} /></li>
                            
                        </ul>
                        
                                <button onClick={()=> deleteAnket(e._id)}>Delete</button>
                                
                                <button onClick={() => updateAnket(e._id)} >Update</button>
                                
                                
                        </div>)})} */}
        </div>
    )
}

export default AnketList;
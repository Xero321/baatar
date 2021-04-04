
import { useState } from 'react';


import {Route, Link} from 'react-router-dom';
import Modal from './../modal/index'



function EditList(props) {


  return (
    
    <div className="Edit">
                
            
                    <div>
                    <Modal show={props.showModal} />
                      <h3 id="text">ТА МАНАЙ САНД АНКЕТАА  ҮҮСГЭСНЭЭР ӨӨРИЙН ХҮССЭН 
                          АЖИЛДАА ЗУУЧЛУУЛААРАЙ</h3>
                    
                 
                    </div>
    
    
    </div>
             

     
  );
}

export default EditList;

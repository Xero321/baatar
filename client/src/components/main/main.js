
import { useState } from 'react';
import style from  './main.css';
import Button from '../button/index';

import Modal from '../modal/index';

import {Link} from 'react-router-dom';




function Main() {

const [showModal, setShowModal] = useState(false);

const showModalView =() => {
  setShowModal(true);
}
const hideModalView =() => {
  setShowModal(false);
}



  return (
    
    <div className="container">
                <Link to='/list'><p id="link">Анкетны сан</p></Link>
            
                    <Modal show={showModal} />
                      <h3 id="text">ТА МАНАЙ САНД АНКЕТАА  ҮҮСГЭСНЭЭР ӨӨРИЙН ХҮССЭН 
                          АЖИЛДАА ЗУУЧЛУУЛААРАЙ</h3>
                    <Button showModalView={showModalView} text="Эхлэх"/>
                 
    
    
    </div>
             

     
  );
}

export default Main;

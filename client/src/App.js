
import { useState } from 'react';
import './App.css';
import Button from './components/button';

import Modal from './components/modal';
import AnketList from './components/anketList'
import {Route, Link} from 'react-router-dom';
import Main from './components/main/main'
import EditList from './components/editList/index';
function App() {


  return (
    
    <div className="Aa">
                
            
                    
                    <Route exact path="/" exact component={Main} />
                    <Route exact path="/list" exact component={AnketList} />
                    <Route exact path="/edit" exact component={EditList} />
    
    </div>
             

     
  );
}

export default App;

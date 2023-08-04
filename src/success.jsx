
import {Image,Button,Form, Container,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';





const Success = ({emails}) => {


    const values = [true]
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    
    let see = () =>{
        return setShow(true)
    }
    let close = () =>{
        return setShow(false)
    }
    return ( 
        <div>
         
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        
        <Modal.Title>Modal</Modal.Title>
        
    
         
        <button onClick={()=> close()} > close </button>
      </Modal>
      <Button onClick={() => see()}>click</Button>
     
        </div>
     );
}
 
export default Success;
import bgImage from './images/illustration-sign-up-desktop.svg';
import bgList from './images/icon-list.svg';
import mobimg from './images/illustration-sign-up-mobile.svg'

import {Image,Button,Form, Container,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import success from './images/icon-success.svg'
import './images/style.css';



const Home = () => {
    
 const [email,setEmail] = useState('mnmj')
   
 const values = [true];
 const [fullscreen, setFullscreen] = useState(true);
 const [show, setShow] = useState(false);

 let see = (e) => {
  
    e.preventDefault()
   setShow(true)
   console.log(e)
 
  
 }

 let close = () => {
  
  return setShow(false)
 }
   
  return (
  
        
            <Container   fluid >
               <Row >
               
               <Col xs={{ span: 12, offset: 0 , order:'last'}} sm={{ span: 6, offset: 0, order:'first'}}  xl={{ span: 4, offset: 2, order:'first'}}    >
                  <Row>
                     <Col className='py-3' sm={12}>
                     <h1 className='dark' >Stay updated!</h1>
                     </Col>

                     <Col sm={12}>
                      <p className='grey text'>Join 60,000+ product managers receiving monthly updates on:
                </p>
                     </Col>
                  </Row>
                  
                  
               
               
                <Row className='my-2'>
                  <Col xs={1} > <Image src={bgList}  /></Col>
                  <Col xs={11}><span className='grey text '> Product discovery and building what matters</span><br /></Col>
                  
                </Row>
                <Row className='my-2'>
                  <Col xs={1} > <Image src={bgList}  /></Col>
                  <Col xs={11}><span className='grey text '> Measuring to ensure updates are a success</span></Col>
                  
                </Row>
                <Row className='my-2'>
                  <Col xs={1} > <Image src={bgList}   /></Col>
                  <Col xs={11}><span className='grey text '> And much more!</span></Col>
                  
                </Row>
                
                <Row>
                <Form onSubmit={(e) => see(e)}>
                <Form.Group  controlId="formBasicEmail">
                  <Col> <Form.Label className='dark'>Email address</Form.Label></Col>
                  <Col><Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email@company.com" /></Col>
                  </Form.Group>
                  <Modal  show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Container className='d-flex align-items-center justify-content-center' style={{height:'80vh',width:'100vw'}} >
                      <Row   >
                        <Col  xs={12}><Image src={success} /></Col>
                        <Col xs={12}><h1>Thanks for subscribing!</h1></Col>
                        <Col xs={12}>A confirmation email has been sent to <br /> {email}. Please opene it and click the button to confirm your subscription</Col>
                       
                       <Col    xs={12}> <button onClick={() => close()}>close</button></Col>
                      </Row>
                      
                        
                    </Container>
                       
                   

                    </Modal>
                  <Col><Button type='submit' className='btn change'> Subscribe to monthly newseletter</Button></Col>
                  </Form>
                </Row>
            

               </Col>
              
             
               <Col fluid className='p-0'     xs={{ span: 12, offset: 0 , order:'first'}} sm={{ span: 6, offset: 0, order:'first',}} md={{ span: 6, offset: 0 , order:'last'}} >
                 
                 
      
                  
                 
                 
                   <Image src={bgImage} className='dis wid d-none d-sm-block' fluid/>  
                   <Image fluid src={mobimg} className='d-block d-sm-none' />
                  </Col>
                    
 
               </Row>
          
               
            </Container>
             
  )
         
     
}

 
export default Home;

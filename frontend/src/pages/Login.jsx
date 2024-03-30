import React from 'react';
import { Container, Row,Col, Form,FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { useState } from 'react';
import '../styles/login.css';

const Login = () => {

  const[credentials, setCredentials]= useState({
    email:undefined,
    password:undefined,
  });
  
  const handleChange =e =>{
    setCredentials(prev => ({...prev,[e.target.id]:e.target.value}));
  };

  const handleClick = e =>{
    e.preventDefault();
  };

  return (
    
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login_img">
              <img src={loginImg} alt=''/>
            </div>

            <div className="login-form">
              <div className="user">
                <img src={userIcon} alt=''/>
              </div>
              <h2>Login</h2>

              <Form>
                <FormGroup>
                  <input type='email' placeholder='Email' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                </FormGroup>
                <Button className='btn secondary_btn auth_btn' type='submit'>Login</Button>
              </Form>
              <p>Dont have an account? <Link to='/register'>Create</Link></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login
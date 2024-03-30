import React from 'react';
import { Container, Row,Col, Form,FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { useState, useContext } from 'react';
import '../styles/login.css';
import {AuthContext} from './../context/AuthContext';


const Register = () => {

  const[credentials, setCredentials]= useState({
    userName:undefined,
    email:undefined,
    password:undefined,
  });

  const {dispatch} = useContext(AuthContext)
  
  const handleChange =e =>{
    setCredentials(prev => ({...prev,[e.target.id]:e.target.value}));
  };

  const handleClick = async e =>{
    e.preventDefault();
  };

  return (
    
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login_img">
              <img src={registerImg} alt=''/>
            </div>

            <div className="login-form">
              <div className="user">
                <img src={userIcon} alt=''/>
              </div>
              <h2>Register</h2>

              <Form>
              <FormGroup>
                  <input type='userName' placeholder='Username' required id='userName' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type='email' placeholder='Email' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                </FormGroup>
                <Button className='btn secondary_btn auth_btn' type='submit'>Create Account</Button>
              </Form>
              <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;
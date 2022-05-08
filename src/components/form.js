import { Component } from 'react';
import React, { useState } from 'react';
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { Spinner } from "reactstrap"

function Loginform() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
     
        if(event.target.name === 'email'){
          setEmail(event.target.value); 
        } else {
          setPassword(event.target.value);
        }
        //console.log(event.target.name + ' -----'+ event.target.value);
      };
     
    const validateEmail =  (e) => {
        const emailRex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
        const { validate } = this.state;
     
        if (emailRex.test(e.target.value)) {
          validate.emailState = 'has-success';
        } else {
          validate.emailState = 'has-danger';
        }
     
        this.setState({ validate });
      }
     
    const submitForm = (e) => {
        e.preventDefault();
        // console.log('submit form');
        console.log(`Email: ${email}`);
        console.log(`password: ${password}`);
        setIsLoading(true);

      }

    return (
        <>
    
        <div className="login-form">
        
            <h2 className='text-danger text-center'>Sign In</h2>
            {isLoading ? 
            <p  className='text-center'>
            <Spinner animation="border" />
          </p>
           :
            <></>
            }
            
           
            <Form className="form" onSubmit={(e) => submitForm(e)}>
            <FormGroup>
                <Label>Username</Label>
                <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@example.com"
                // valid={this.state.validate.emailState === "has-success"}
                // invalid={this.state.validate.emailState === "has-danger"}
                value={email}
                onChange={(e) => {
                    // validateEmail(e);
                    handleChange(e);
                }}
                />
                <FormFeedback>
                Uh oh! Looks like there is an issue with your email. Please input
                a correct email.
                </FormFeedback>
                <FormFeedback valid>
                That's a tasty looking email you've got there.
                </FormFeedback>
                <FormText>Your username is most likely your email.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={password}
                onChange={(e) => handleChange(e)}
                />
            </FormGroup> 
                <Button className='btn btn-success float-center'>Login</Button>
            </Form>
        </div>
        </>
    )
}

export default Loginform;
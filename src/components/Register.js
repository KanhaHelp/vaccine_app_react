
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { useState } from 'react';

function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
     
        if(e.target.name === 'firstname'){
            setFirstname(e.target.value); 
        }

        if(e.target.name === 'lastname'){
            setLastname(e.target.value); 
        }

        if(e.target.name === 'address'){
            setAddress(e.target.value); 
        }

        if(e.target.name === 'mobile'){
            setMobile(e.target.value); 
        }

        if(e.target.name === 'age'){
            setAge(e.target.value); 
        }

        if(e.target.name === 'email'){
            setEmail(e.target.value);
        }

        if(e.target.name === 'password'){   
            setPassword(e.target.value);
        }

        if(e.target.name === 'cpassword'){
            setcPassword(e.target.value);
        }

        // console.log(e.target.name + ' -----'+ e.target.value);
      };
     
    const submitForm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(firstname, lastname, address, mobile, age, email, password, cpassword);
       
      }

return (
    
<div className="container mt-4 border">
    <Form className="form mt-2" onSubmit={(e) => submitForm(e)}>
        <FormGroup row>
            <Label for="firstname" sm={2}>Firstname</Label>
            <Col sm={10}>
                <Input 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    placeholder="Enter Your Firstname"
                    value={firstname}
                    onChange={(e) => {
                        handleChange(e);
                    }} 
                />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="lastname" sm={2}>Lastname</Label>
            <Col sm={10}>
                <Input 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    placeholder="Enter Your lastname"
                    value={lastname}
                    onChange={(e) => {
                        handleChange(e);
                    }} 
                />
            </Col>
        </FormGroup>

        <FormGroup row>
        <Label for="address" sm={2}>Address</Label>
            <Col sm={10}>
                <Input 
                    type="textarea" 
                    name="address" 
                    id="address"
                    value={address}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />     
            </Col>               
        </FormGroup>

        <FormGroup row>
            <Label for="mobile" sm={2}>Mobile</Label>
            <Col sm={10}>
            <Input 
                type="text" 
                name="mobile" 
                id="mobile" 
                placeholder="Enter your mobile"
                value={mobile}
                    onChange={(e) => {
                        handleChange(e);
                }}
            />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="age" sm={2}>Age</Label>
            <Col sm={10}>
                <Input 
                    type="text" 
                    name="age" 
                    id="age" 
                    placeholder="with a placeholder"
                    value={age}
                    onChange={(e) => {
                        handleChange(e);
                    }} 
                />
            </Col>
        </FormGroup>


        <FormGroup row>
            <Label for="gender" sm={2}>Gender</Label>
            <Col sm={10}>
                <Input 
                    type="select" 
                    name="gender" 
                    id="gender" 
                    value={age}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </Input>
            </Col>
        </FormGroup>


        <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
                <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="with a placeholder"
                    value={email}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
            </Col>
        </FormGroup>


        <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
                <Input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="cpassword" sm={2}>Confirm Password</Label>
            <Col sm={10}>
                <Input 
                    type="password" 
                    name="cpassword" 
                    id="cpassword" 
                    placeholder="Enter Confirm Password"
                    value={cpassword}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
            </Col>
        </FormGroup>

        <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
            </Col>
        </FormGroup>
    </Form>
</div>

)
}
export default Register;
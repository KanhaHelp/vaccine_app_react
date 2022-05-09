
import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SlotBooking from './SlotBooking';

function UserBooking() {
    const [slotTime, setSlotTime] = useState('');
    
    const [date, setDate] = useState(new Date());

    const handleDate = (e)=>{
        // console.log('object');
        setDate(e);
        // console.log('date' , date);
    } 


    // const handleChange = (e) => {
    //     console.log('date - ' , date)    
     
    //     console.log('slotime - ' , e.target.value)    
    //     // if(e.target.name === 'firstname'){
    //         // setSlotTime(e.target.value); 
    //     // }
    // }
    // const handleChange = (event) => {
     
    //     if(event.target.name === 'email'){
    //       setEmail(event.target.value); 
    //     } else {
    //       setPassword(event.target.value);
    //     }
    //     //console.log(event.target.name + ' -----'+ event.target.value);
    // };
     
    
     
    // const submitForm = (e) => {
    //     e.preventDefault();
    //     // console.log('submit form');
    //     console.log(`Email: ${email}`);
    //     console.log(`password: ${password}`);
    //     setIsLoading(true);

    // }

    return (
        <>
            <div className='row m-4'>
                <div className='col-sm-4'>
                    
                    <Calendar onChange={handleDate} value={date} />

                </div>
                 <SlotBooking bookigDate ={date}/>
            </div>
        </>
    )
}

export default UserBooking;

import React, { useState } from 'react';
import {  Button } from 'reactstrap';

import 'react-calendar/dist/Calendar.css';

function SlotBooking(props) {



    const handleChange = (e) => {

        console.log('slotime - ' , e.target.value)    

    }
    
    return (
        <>
        {console.log('upcoming props', props)}
            <div className='col-sm-5'>

                <Button className='m-2 btn btn-primary'
                    value={'09-10'}
                    onClick={(e) => {
                        handleChange(e);
                    }}>
                    09-10 AM
                </Button>

                <Button className='m-2 btn btn-success'
                    value={'09-10'}
                    onClick={(e) => {
                        handleChange(e);
                    }}>
                    09-10 AM
                </Button>
            </div>        
        </>
    )
}

export default SlotBooking;
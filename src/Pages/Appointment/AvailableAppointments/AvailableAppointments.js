import { Container, Grid } from '@mui/material';
import React from 'react';


const bookings = [ {
    id: 1,
    name: 'Teeth Orthodonics',
    time: '08.00 AM - 09.00 AM',
    space: 10,

},  {
    id: 2,
    name: 'Cosmetic Dentistry',
    time: '09.00 AM - 10.00 AM',
    space: 10,

},   {
    id: 3,
    name: 'Teeth Cleaning',
    time: '10.00 AM - 11.00 AM',
    space: 10,

},  {
    id: 4,
    name: '',
    time: '11.00 AM - 12.00 AM',
    space: 10,

},  {
    id: 5,
    name: '',
    time: '06.00 PM - 07.00 PM',
    space: 10,

},   {
    id: 6,
    name: 'Oral Surgery',
    time: '08.00 PM - 09.00 PM',
    space: 10,

},
]

const AvailableAppointments = ({date}) => {
   



    return (
        <Container>
            <h2>Available Appointments on {date.toDateString()}</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                    
              </Grid>
   
           </Grid>
        </Container>
    );
};

export default AvailableAppointments;
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


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
    name: 'doctor saiful',
    time: '11.00 AM - 12.00 AM',
    space: 10,

},  {
    id: 5,
    name: 'doctor jhankar mahbub',
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
            <Typography variant="h4" sx={{color: 'info.main',mb:3, fontweight: 600}}>Available Appointments on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
              {
                  bookings.map(booking => <Booking
                  key = {booking.id}
                  booking={booking}
                  date={date}
                  
                  ></Booking>)
              }
   
           </Grid>
        </Container>
    );
};

export default AvailableAppointments;
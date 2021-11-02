import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
 
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const services = [
    {
        name : 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid reiciendis incidunt sequi veritatis error ad numquam repellendus. In, eius!',
        img:  fluoride

    },
    {
        name : 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid reiciendis incidunt sequi veritatis error ad numquam repellendus. In, eius!',
        img:  cavity

    },
    {
        name : 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid reiciendis incidunt sequi veritatis error ad numquam repellendus. In, eius!',
        img:  whitening

    },
]


const Services = () => {
    
      
    return (
        <Box sx={{ flexGrow: 1 }}>
         <Container>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
           services.map(service => <Service
              key = {service.name}
              service={service}
           ></Service>)
         }
      </Grid>
    </Box>
         </Container>
      </Box>
    );
};

export default Services;
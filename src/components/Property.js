import React, {useEffect, useState} from 'react'
import {Container, Typography} from "@mui/material";
import {useParams} from 'react-router-dom'
import axios from "axios";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const Property = () => {
    const {id} = useParams()
    const baseURL = `http://localhost:5000/properties/`;
// const baseURL = `https://flaysh.github.io/properties/`;
    const [property, setProperty] = useState(null);

    const getProperty = (id) => {
        axios.get(baseURL + id).then((response) => {
            setProperty(response.data);
        });
    }

    useEffect(() => {
        getProperty(id)
    }, []);

    return <Container sx={{mt: 5}}>
        <Box display={'flex'}>
            <Card sx={{width: 'fit-content'}}>
                <img style={{maxWidth: 600}} src={property?.image} alt={property?.address_1 + ' image'}/>
            </Card>
            <Box m={5}>

                <Typography variant={'h4'}>
                    {property?.address_1}
                </Typography>
                <Typography variant={'h5'}>
                    {property?.address_2}
                </Typography>
            </Box>

        </Box>
    </Container>
}

export default Property;
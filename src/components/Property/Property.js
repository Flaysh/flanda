import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {Button, Container, Link, Skeleton} from "@mui/material";
import {Link as RouterLink, useParams} from 'react-router-dom'
import axios from "axios";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import LineChart from "./LineChart";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import PropertyDetails from "./PropertyDetails";
import ActionButton from "./ActionButton";
import {LazyLoadImage} from 'react-lazy-load-image-component';

const SKELETON_HEIGHT = 1000
const IMAGE_HEIGHT = 700

const Property = () => {
    const {id} = useParams()
    const baseURL = useMemo(() => "https://flanda-json-server.herokuapp.com/properties/", []);
    const [property, setProperty] = useState(null);
    const getProperty = useCallback((id) => {
        axios.get(baseURL + id).then((response) => {
            setProperty(response.data);
        });
    }, [])

    useEffect(() => {
        getProperty(id)
    }, []);

    return <Container maxWidth="lg">

        <Link component={RouterLink} to="/feed">
            <Button variant={'outlined'} sx={{mb: 2}} startIcon={<ArrowBackIosNewRoundedIcon/>}>Go Back</Button>
        </Link>
        {property?.image ? <Card display={'flex'}>
            <Box sx={{justifyContent: 'space-evenly'}}>
                <LazyLoadImage alt="property-image" src={property?.image} height={IMAGE_HEIGHT}
                               width={'100%'}/>
                <ActionButton/>
            </Box>
            <PropertyDetails property={property}/>
            <LineChart/>
        </Card> : <Skeleton variant={'rectangular'} sx={{borderRadius: 1}} height={SKELETON_HEIGHT}/>}
    </Container>
}

export default Property;
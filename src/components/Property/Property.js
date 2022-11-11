import React, {useEffect, useState} from 'react'
import {
    Button,
    Chip,
    Container,
    Fab,
    Link,
    Rating,
    SpeedDial,
    SpeedDialAction,
    styled,
    Typography
} from "@mui/material";
import {Link as RouterLink, useParams} from 'react-router-dom'
import axios from "axios";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import LineChart from "./LineChart";
import CardMedia from "@mui/material/CardMedia";
import ShareIcon from '@mui/icons-material/Share';
import LayersIcon from '@mui/icons-material/Layers';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import CallIcon from '@mui/icons-material/Call';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';

const Property = () => {
    const {id} = useParams()
    const baseURL = "https://flanda-json-server.herokuapp.com/properties/";
    const [property, setProperty] = useState(null);
    const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);

    const getProperty = (id) => {
        axios.get(baseURL + id).then((response) => {
            setProperty(response.data);
        });
    }

    useEffect(() => {
        getProperty(id)
    }, []);

    const StyledSpeedDial = styled(SpeedDial)(({theme}) => ({
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(2),
            left: theme.spacing(2),
        },
    }));

    const actions = [
        {icon: <ShoppingCartCheckoutRoundedIcon/>, name: 'Buy Share'},
        {icon: <TurnedInRoundedIcon/>, name: 'Save'},
        {icon: <CallIcon/>, name: 'Contact'},
        {icon: <ShareIcon/>, name: 'Share'},
    ];

    return <Container maxWidth="lg">
        <Link component={RouterLink} to="/feed">
            <Button variant={'outlined'} sx={{mb: 2}} startIcon={<ArrowBackIosNewRoundedIcon/>}>Go Back</Button>
        </Link>
        <Card display={'flex'}>
            <Box sx={{justifyContent: 'space-evenly'}}>
                <CardMedia
                    component="img"
                    image={property?.image}
                    alt={property?.address_1 + ' image'}
                />
                <Box sx={{position: 'relative'}}>
                    <StyledSpeedDial
                        ariaLabel="action button"
                        icon={<LayersIcon/>}
                        direction={'left'}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                        ))}
                    </StyledSpeedDial>
                </Box>
            </Box>
            <Box>
                <Box display={'flex'} m={2}>
                    <Box justifyContent={'space-between'}>
                        <Typography variant={'h4'}>
                            {property?.address_1}
                        </Typography>
                        <Typography variant={'h5'}>
                            {property?.address_2}
                        </Typography>
<Box mt={1}>
                        <Chip color="primary" label={`${property?.share_price} $`} size='large' onClick={() => {
                        }}/>
                        <Chip color='secondary'
                              label={`${property?.units} Units`}
                              variant="outlined" onClick={() => {
                        }} sx={{mx: 1}}/>
                        <Chip color={property.available ? 'secondary' : 'error'}
                              label={property.available ? 'Available' : 'Not Available'}
                              variant="outlined" onClick={() => {
                        }}/>
</Box>
                    </Box>
                    <Box flexGrow={1}/>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Fab variant="extended" color="secondary" size="large"
                             sx={{fontSize: '1.2rem', textTransform: 'unset'}}>
                            Buy Share
                        </Fab>
                        <Rating
                            name="property-rating"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            sx={{pt: 1}}
                        />
                    </Box>
                </Box>
                <LineChart/>
            </Box>
        </Card>
    </Container>
}

export default Property;
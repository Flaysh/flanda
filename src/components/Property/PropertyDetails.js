import React, {useCallback, useState} from 'react';
import Box from "@mui/material/Box";
import {Chip, Fab, Rating, Typography} from "@mui/material";


const PropertyDetails = ({property}) => {
    const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);
    const makeClickable = useCallback(() => {
    })

    return <Box>
        <Box display={'flex'} m={2}>
            <Box justifyContent={'space-between'}>
                <Typography variant={'h4'}>
                    {property?.address_1}
                </Typography>
                <Typography variant={'h5'}>
                    {property?.address_2}
                </Typography>
                <Box mt={2}>
                    <Chip color="primary" label={`${property?.share_price} $`} onClick={makeClickable}/>
                    <Chip color='secondary'
                          label={`${property?.units} Units`}
                          variant="outlined" onClick={makeClickable} sx={{mx: 1}}/>
                    <Chip color={property?.available ? 'secondary' : 'error'}
                          label={property?.available ? 'Available' : 'Not Available'}
                          variant="outlined" onClick={makeClickable}/>
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
    </Box>
}

export default PropertyDetails;
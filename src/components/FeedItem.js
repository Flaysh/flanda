import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, Chip, Fab, Link} from "@mui/material";
import Box from "@mui/material/Box";
import {Link as RouterLink} from "react-router-dom";

const FeedItem = (feedItem) => {
    const property = feedItem?.property
    return (
        <Card>
                <Link component={RouterLink} to={`property/${property.id}`} sx={{textDecoration:'none'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="property"
                    height="200"
                    image={property.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {property.address_1}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {property.address_2}
                    </Typography>
                </CardContent>
            <CardActions sx={{p:2, pt:0}}>
                <Chip color="primary" label={`${property.share_price} $`} onClick={()=>{}}/>
                <Chip color={property.available ? 'secondary' : 'error'}
                      label={property.available ? 'Available' : 'Not Available'}
                      variant="outlined" onClick={()=>{}}/>
                <Box flexGrow={1}/>
                <Fab variant="extended" color="secondary" size="medium" >
                    Trade
                </Fab>
            </CardActions>
            </CardActionArea>
            </Link>

        </Card>
    );
}

export default FeedItem;
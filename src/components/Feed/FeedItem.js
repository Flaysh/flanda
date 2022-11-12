import * as React from 'react';
import {useCallback} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, Chip, Fab, Link} from "@mui/material";
import Box from "@mui/material/Box";
import {Link as RouterLink} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const FeedItem = (feedItem) => {
    const property = feedItem?.property

    const makeClickable = useCallback(() => {
    })

    return (
        <Card>
            <Link component={RouterLink} to={`property/${property.id}`} sx={{textDecoration: 'none'}}>
                <CardActionArea>
                    <LazyLoadImage
                        effect="blur"
                        src={property.image}
                        alt={'property-image-feed'}
                        height={220}
                        width={'100%'}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {property.address_1}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {property.address_2}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{p: 2, pt: 0}}>
                        <Chip color="primary" label={`${property.share_price} $`} onClick={makeClickable}/>
                        <Chip color={property?.available ? 'secondary' : 'error'}
                              label={property?.available ? 'Available' : 'Not Available'}
                              variant="outlined" onClick={makeClickable}/>
                        <Box flexGrow={1}/>
                        <Fab variant="extended" color="secondary" size="medium">
                            Buy
                        </Fab>
                    </CardActions>
                </CardActionArea>
            </Link>
        </Card>
    );
}

export default FeedItem;
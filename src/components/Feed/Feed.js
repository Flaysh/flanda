import React, {useEffect, useState} from "react";
import {Container, Grid, Typography} from "@mui/material";
import axios from "axios";
import FeedItem from "./FeedItem";


const Feed = () => {
    const baseURL = "http://localhost:5000/properties/";
// const baseURL = "https://flaysh.github.io/properties/";
    const [feedItems, setFeedItems] = useState(null);

    const getFeedItems = () => {
        axios.get(baseURL).then((response) => {
            setFeedItems(response.data);
        });
    }
    useEffect(() => {
        getFeedItems()
    }, []);

    if (!feedItems) return null;

    return (<Container>
        <Typography variant={'h4'} my={5}>Explore Properties</Typography>

        <Grid container spacing={2}>
            {feedItems.map(feedItem => {
                return (<Grid key={feedItem?.id} item xs={12} sm={6} md={4}>
                    <FeedItem property={feedItem}/>
                </Grid>)
            })}
        </Grid>

    </Container>)
}


export default Feed;
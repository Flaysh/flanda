import React, {useCallback, useEffect, useState} from "react";
import {Container, Grid, Skeleton, Typography} from "@mui/material";
import axios from "axios";
import FeedItem from "./FeedItem";

const SKELETON_WIDTH = 373
const SKELETON_HEIGHT = 375

const Feed = () => {
    const baseURL = "https://flanda-json-server.herokuapp.com/properties/";
    const [feedItems, setFeedItems] = useState(null);
    const [loading, setLoading] = useState(true)

    const getFeedItems = useCallback(() => {
        axios.get(baseURL).then((response) => {
            setFeedItems(response.data);
            setLoading(false)
        });
    }, [loading])

    useEffect(() => {
        getFeedItems()
    }, []);

    return (<Container>
        <Typography variant={'h4'} my={5}>Explore Properties</Typography>

        <Grid container spacing={2}>
            {(loading ? Array.from(new Array(12)) : feedItems).map((feedItem, index) => (
                <Grid key={loading ? index : feedItem?.id} item xs={12} sm={6} md={4}>
                    {feedItem ? <FeedItem property={feedItem}/> :
                        <Skeleton variant="rectangular" sx={{borderRadius: 1}} width={SKELETON_WIDTH}
                                  height={SKELETON_HEIGHT}/>}
                </Grid>
            ))}
        </Grid>

    </Container>)
}


export default Feed;
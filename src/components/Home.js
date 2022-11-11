import React from "react";
import {Button, Fab, Link, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Video from '../assets/hero.mp4'
import {Link as RouterLink} from "react-router-dom";

const Home = () => {
    return (<Box display={"flex"} p={15} pr={0}>
        <Box>
            <Typography p={2} variant={'h2'} fontWeight={600} fontFamily={'Plus Jakarta Sans'} align={'left'}
                        color='primary'>
                Invest in real estate for as little as $5
            </Typography>
            <Typography p={2} variant={'h5'} fontFamily={'Plus Jakarta Sans'} align={'left'}>
                Buy shares of rental properties, earn monthly income, and watch your money grow
            </Typography>
            <Link component={RouterLink} to="/feed">
                <Fab variant="extended" color="primary"  sx={{m: 2,p:3.5, fontSize: '1.5rem',textTransform: 'unset'}}>
                    Try the Web App
                </Fab>
            </Link>
        </Box>
        <Box>
            <video style={{maxWidth: 1000}} autoPlay muted loop playsInline>
                <source src={Video} type="video/mp4"/>
            </video>
        </Box>
    </Box>);
}

export default Home;
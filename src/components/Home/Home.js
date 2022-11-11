import React from "react";
import {Fab, Link, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Video from '../../assets/hero.mp4'
import {Link as RouterLink} from "react-router-dom";

const Home = () => {
    return (<Box display={"flex"} p={15} pr={0}>
        <Box justifyContent={'space-evenly'}>
            <Typography p={2} variant={'h2'} fontWeight={700} align={'left'}
                        color='primary'>
                Invest in real estate for as little as $5
            </Typography>
            <Typography p={2} variant={'h5'} align={'left'}>
                Buy shares of rental properties, earn monthly income, and watch your money grow
            </Typography>
            <Link component={RouterLink} to="/feed">
                <Fab variant="extended" color="primary" sx={{m: 2, p: 3.5, fontSize: '1.5rem', textTransform: 'unset'}}>
                    Try the Web App
                </Fab>
            </Link>
        </Box>
        <Box justifyContent={'space-evenly'}>
            <video style={{maxWidth: 1000}} autoPlay muted loop playsInline>
                <source src={Video} type="video/mp4"/>
            </video>
        </Box>
    </Box>);
}

export default Home;
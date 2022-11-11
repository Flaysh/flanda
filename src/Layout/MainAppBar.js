import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LandaLogo from '../assets/white-logo.png';
import {Avatar, Link, Slide, useScrollTrigger} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';


export default function MainAppBar(props: Props) {
    function HideOnScroll(props: Props) {
        const {children, window} = props;
        const trigger = useScrollTrigger();
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    return (
        <HideOnScroll {...props}>
            <AppBar position="fixed">
                <Toolbar>
                    <Link component={RouterLink} to="/">
                        <img style={{width: '8rem'}} src={LandaLogo} alt={'landa-text-logo'}/>
                    </Link>
                    <Box flexGrow={1}/>
                    <Box sx={{'a': {mx: 2, textDecoration: 'none', color: '#ffffff'}}}>
                        <Link component={RouterLink} to="/">
                            Home
                        </Link>
                        <Link component={RouterLink} to="/feed">
                            Feed
                        </Link>
                        <a href="https://flaysh.me" target="_blank" rel="noopener noreferrer">
                            Portfolio
                        </a>
                    </Box>
                    <Avatar alt="Flaysh" src="https://i.imgur.com/iyyjoyV.jpg"/>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}

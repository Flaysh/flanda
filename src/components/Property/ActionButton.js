import React from 'react';
import Box from "@mui/material/Box";
import LayersIcon from "@mui/icons-material/Layers";
import {SpeedDial, SpeedDialAction, styled} from "@mui/material";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";
import CallIcon from "@mui/icons-material/Call";
import ShareIcon from "@mui/icons-material/Share";

const ActionButton = () => {
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

    return <Box sx={{position: 'relative'}}>
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
}
export default ActionButton
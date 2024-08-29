'use client'

import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { keyframes } from '@mui/material/styles';
// import { useTheme } from '@mui/styles';


// Inside the Home component

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const transitionDuration = '2s';

export default function Effect(props) {
    const theme = useTheme()
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))
    
    return (
        <Stack direction={'row'} spacing={2} >
            <Typography variant='h1'>Hello, I'm</Typography>
            <Typography
                variant='h1'
                sx={{
                    background: 'linear-gradient(to right, #4286f4, #f54261)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%',
                    animation: `${gradientAnimation} ${transitionDuration} ease infinite`
                }}
            >
                <strong>{props.value}</strong>
            </Typography>
        </Stack>
    )
}




'use client'

import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { createTheme, keyframes, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';


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


let theme = createTheme()
theme = responsiveFontSizes(theme)

export default function Effect(props) {
    
    return (
        <ThemeProvider theme={theme}>
        
            
            <Typography
                variant='h1'
                sx={{
                    background: 'linear-gradient(to right, #4286f4, #f54261)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%',
                    animation: `${gradientAnimation} 2s ease infinite`
                }}
            >
                <strong>{props.value}</strong>
            </Typography>
        
        </ThemeProvider>
    )
}




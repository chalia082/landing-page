import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import { CardActionArea, CardContent, Grid, Typography } from '@mui/material';

const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
        <svg>
        <Box
            component="polygon"
            points="0,100 50,00, 100,100"
            sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
            }}
        />
        </svg>
    </Paper>
);

export default function SimpleGrow() {
    const [checked, setChecked] = React.useState(false);
    const boxRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setChecked(true);
                } else {
                    setChecked(false);
                }
            },
            {
                threshold: 0.1, // Adjust this value as needed
            }
        );

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }

        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);

    return (
        <Box sx={{ height: '200vh' }}> {/* Increase height to enable scrolling */}
            <Box ref={boxRef} sx={{ height: 180, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                
                    <Grow in={checked}>{icon}</Grow>
                
                
                    <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1000 } : {})}
                    >
                        {icon}
                        
                    </Grow> 
            </Box>
        </Box>
    );
}
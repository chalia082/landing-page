'use client'

import * as React from 'react';
import { createTheme, responsiveFontSizes, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardContent, Container, Stack, Typography } from '@mui/material';
import { Roboto } from 'next/font/google';
import Effect from '@/app/components/fadetext';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

let theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
        h1: {
            textAlign: 'center',
        },
    },
})

theme = responsiveFontSizes(theme);

export default function FullWidthGrid() {
    return (
        <ThemeProvider theme={theme}>
        <Container>
            <Box>
            

        
        
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardActionArea
                        >
                        <CardContent>
                            <Typography >
                                <strong>SaaS Platform</strong>
                            </Typography>
                            <Typography >
                                Created a SaaS platform using Next.js, Clerk, Stripe, and Firebase, using AI for personalized learning and secure payment processing.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>


                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardActionArea >
                        <CardContent>
                            <Typography >
                                <strong>Chatbot</strong>
                            </Typography>
                            <Typography >
                                Developed a tailored conversational AI system using Next.js and OpenAI incorporating user authentication with Firebase for data storage
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>



                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardActionArea  >
                        <CardContent>
                            <Typography >
                                <strong>Inventory Manager</strong>
                            </Typography>
                            <Typography >
                                Developed a robust inventory management system using Next.js, React, Firebase, and Vercel for efficient stock tracking and management.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>



                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardActionArea  >
                        <CardContent>
                            <Typography >
                                <strong>Research Assistant</strong>
                            </Typography>
                            <Typography >
                                Created graph visualization dashboards using React and NodeJS for LLM applications.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>



                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardActionArea  >
                        <CardContent>
                            <Typography >
                                <strong>Teaching Assistant</strong>
                            </Typography>
                            <Typography >
                                Developed and taught labs to enhance programming skills for students in embedded systems.                    </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>



                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardActionArea  >
                        <CardContent>
                            <Typography>
                                <strong>Power Station Research</strong>
                            </Typography>
                            <Typography >
                                Analyzed the electricity transmission process, identifying improvement opportunities.                    
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>

            </Grid>
            
            </Box>

            <Box bgcolor={'grey'} padding={2}>
                <Stack direction={'row'} spacing={2}>
                    <Typography align='right' variant="h1" sx={{ fontWeight: 'light' }}>Hello, I&apos;m</Typography>
                    <Effect value={"Deepanshu Chalia"}  />                   
                </Stack>
            </Box>
            
        </Container>
        </ThemeProvider>
        
        
        
        
        
    );
}

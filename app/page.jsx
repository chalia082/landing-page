'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
// import { ThemeProvider } from '@emotion/react';
import { Button, Container, CssBaseline, Divider, Stack,  Typography } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MainPage from '@/components/MainPage';
import Portfolio from '@/components/Portfolio';
import Journey from '@/components/Journey';
import themes from '../components/ui/theme';
import { ThemeProvider } from '@/components/ui/ThemeContext';


export default function Home() {
  // console.log(themes);
  
  return (
    <Container>
      <AppRouterCacheProvider>
      <ThemeProvider >
      <CssBaseline />

      <Navbar />
      <section id='home' > <MainPage /> </section>
      <Divider sx={{ margin: 10 }} ></Divider>
      <section id='portfolio' > <Portfolio /> </section>
      <Stack sx={{ direction: 'column', alignItems: 'center' }} >
        <Button
          href='/Resume_Deepanshu_Chalia.pdf'
          target='_blank'
          variant="conatined"
          onClick={() => handleScroll('portfolio')}
          sx={{ 
              fontWeight: 'light',
              backgroundColor: 'inherit',
              margin: 0.5,
              borderRadius: 10,
              fontSize: 35,
              transition: 'color 0.5s ease-in-out, backgroundImage 0.5s ease-in-out ',
              ':hover': {
                  backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                  color: 'white', 
              },
              my: 10
          }}
        >
          Resume
        </Button>
        <Typography variant='h6' sx={{ opacity: 0.7, color: 'grey', fontWeight: 'light', letterSpacing: 2, textAlign: 'center' }}>
          In a rapidly advancing digital era, powered by Gen-AI, I envision data as the fundamental building block of tomorrow. I&apos;m Deepanshu Chalia, eager to contribute my skills to shaping this future.
        </Typography>
      </Stack> 
      <Divider sx={{ margin: 10 }} ></Divider>
      <section id='journey'><Journey /></section>
      <section id='contact'><Footer /></section>    
      </ThemeProvider>
      </AppRouterCacheProvider>
    </Container>
  );
}

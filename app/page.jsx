'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import theme from '../components/ui/theme';
import { ThemeProvider } from '@emotion/react';
import { Box, Button, CardActionArea, CardContent, CardMedia, Container, CssBaseline, Divider, Fade, Grid, Grow, Stack,  Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Effect from '../components/ui/fadetext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MainPage from '@/components/MainPage';
import Portfolio from '@/components/Portfolio';


export default function Home() {


  const [checked3, setChecked3] = useState(false)

  const boxRef2 = useRef(null)

  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChecked3(true)
        } 
      }, {
        threshold: 0.3
      }
    )

    if (boxRef2.current) {
      observer.observe(boxRef2.current)
    }

    return () => {
      if (boxRef2.current) {
        observer.unobserve(boxRef2.current)
      }
    }
  }, [boxRef2])



  return (
      <Container>
      <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />

          <Navbar />
          
          <section id='home' > 
            <MainPage />
          </section>

          <Divider sx={{ margin: 10 }} ></Divider>

          <section id='portfolio' >
            <Portfolio />
          </section>


          <Stack
            sx={{
              direction: 'column',
              alignItems: 'center'
            }}
          >
            <Button
                href='/Resume_Deepanshu_Chalia.pdf'
                target='_blank'
                variant="conatined"
                onClick={() => handleScroll('portfolio')}
                sx={{ 
                  width: '30%',
                  align: 'center',
                  backgroundColor: 'white',
                  margin: 0.5,
                  borderRadius: 10,
                  fontSize: 35,
                  ':hover': {
                    backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                    transition: 'background 1000ms ease',
                    transitionDuration: '1s',
                    color: 'white',
                  },
                  mb: 10
                }}
              >
                Resume
              </Button>
          
            <Typography variant='h6' sx={{ opacity: 0.7, color: 'grey', fontWeight: 'normal', letterSpacing: 2, textAlign: 'center' }}>
              In a rapidly advancing digital era, powered by Gen-AI, I envision data as the fundamental building block of tomorrow. I&apos;m Deepanshu Chalia, eager to contribute my skills to shaping this future.
            </Typography>
          </Stack> 

          <Divider sx={{ margin: 10 }} ></Divider>

          {/* Journey starts */}
          <section id='journey'>
            <Box>
          <Grid container rowSpacing={5} columnSpacing={3} ref={boxRef2} flexWrap={'wrap'} >

            <Grow in={checked3} style={{ transformOrigin: '0 0 0' }} {...(checked3 ? { timeout: 500 } : {})}>
              <Grid item md={4} xs={12}>
                <CardActionArea sx={{ maxWidth: 500, minHeight: 400, borderRadius: 5 }} href='https://www.linkedin.com/company/keelworks-foundation/mycompany/' >
                  <CardMedia 
                    component={'img'}
                    height={300}
                    sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    image='/keelworks.jpg'
                  />
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Software Developer <br></br> (Keelworks Org.)</strong>
                    </Typography>
                    
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grow>

            <Grow in={checked3} style={{ transformOrigin: '0 0 0' }} {...(checked3 ? { timeout: 1000 } : {})}>
              <Grid item md={4} xs={12} >
              <CardActionArea sx={{ maxWidth: 500, minHeight: 400, borderRadius: 5 }} href='https://www.linkedin.com/company/headstarterai/'>
                  <CardMedia 
                    component={'img'}
                    height={300}
                    sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    image='/headstarter.png'
                  />
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Software Engineer Fellow <br></br> (Headstarter Co.)</strong>
                    </Typography>
                    
                  </CardContent>
                </CardActionArea> 
              </Grid>
            </Grow>

            <Grow in={checked3} style={{ transformOrigin: '0 0 0' }} {...(checked3 ? { timeout: 1500 } : {})}>
              <Grid item md={4} xs={12}>
              <CardActionArea sx={{ maxWidth: 500, minHeight: 400, borderRadius: 5 }} href='https://www.linkedin.com/school/smulyle/'>
                  <CardMedia 
                    component={'img'}
                    height={300}
                    sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    image='/SMU.png'
                  />
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Master of Science <br></br> (Computer Engineering)</strong>
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grow>

            <Grow in={checked3} style={{ transformOrigin: '0 0 0' }} {...(checked3 ? { timeout: 500 } : {})}>
              <Grid item md={6} xs={12} display={'flex'}  >
              <CardActionArea sx={{ maxWidth: 500, minHeight: 400, borderRadius: 5 }} href='https://www.linkedin.com/company/j-s-auto-pvt-ltd/' >
                  <CardMedia 
                    component={'img'}
                    height={300}
                    sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    image='/jsa.jpg'
                  />
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Junior Developer <br></br> (J.S. Auto Pvt Ltd)</strong>
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grow>

            <Grow in={checked3} style={{ transformOrigin: '0 0 0' }} {...(checked3 ? { timeout: 1000 } : {})}>
              <Grid item md={6} xs={12} display={'flex'}  >
              <CardActionArea sx={{ maxWidth: 500, minHeight: 400, borderRadius: 5 }} href='https://www.linkedin.com/school/punjab-engineering-college/' >
                  <CardMedia 
                    component={'img'}
                    height={300}
                    sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    image='/Btech.jpg'
                  />
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Bachelor of Technology <br></br> (Electrical Engineering)</strong>
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grow>

          </Grid>
          </Box>
          </section>
        {/* Journey ends */}

          <section id='contact'>
            <Footer />
          </section>
        </ThemeProvider>
      </AppRouterCacheProvider>
      </Container>
  );
}

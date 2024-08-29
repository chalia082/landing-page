'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import theme from './components/theme';
import glowBorder from './components/glowBorder';
import TransitionHover from './components/styledavatar';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, createTheme, CssBaseline, Divider, Fade, Grid, Grow, IconButton, Paper, Slide, Stack, styled, Toolbar, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SimpleGrow from './components/grow';
import { useEffect, useRef, useState } from 'react';
import Effect from './components/fadetext';
import MyAppBar from './components/appbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Facebook, Instagram, LinkedIn, X } from '@mui/icons-material';


export default function Home() {

  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)

  const [fadeChecked, setFadeChecked] = useState(false)
  const boxRef1 = useRef(null)
  const boxRef2 = useRef(null)

  
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChecked1(true)
        } else {
          setChecked1(false)
        }
      }, {
        threshold: 0.3
      }
    )

    if (boxRef1.current) {
      observer.observe(boxRef1.current)
    }

    return () => {
      if (boxRef1.current) {
        observer.unobserve(boxRef1.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChecked2(true)
        } else {
          setChecked2(false)
        }
      }, {
        threshold: 0.5
      }
    )

    if (boxRef1.current) {
      observer.observe(boxRef1.current)
    }

    return () => {
      if (boxRef1.current) {
        observer.unobserve(boxRef1.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChecked3(true)
        } else {
          setChecked3(false)
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
  }, [])

  useEffect(() => {
    setFadeChecked(true)
  }, [])

  const handleScroll = (sectionName) => {
    const section = document.getElementById(sectionName)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <Container sx={{ minWidth: 1800 }} >
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Head>
            <title>Deepanshu Chalia</title>
            <meta property="og:image" content="/title_image.jpg" />
          </Head>

          <ThemeProvider theme={glowBorder}>
            <AppBar>
              <Toolbar disableGutters sx={{ paddingLeft: 0.5, paddingRight: 0.5 }} >    
                <Stack display='flex' direction="row" spacing={1} >
                  <Button onClick={() => handleScroll('home')}>Home</Button>
                  <Button onClick={() =>handleScroll('portfolio')}>Portfolio</Button>
                  <Button onClick={() => handleScroll('journey')}>Journey</Button>
                  <Button onClick={() => handleScroll('contact')}>Contact</Button>
                </Stack>        
              </Toolbar>
              </AppBar> 
            </ThemeProvider>
          <section id='home' > 

          
          <Box gap={10} marginTop={20} 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'column', lg: 'row' },
              alignItems: 'center',
              alignContent: 'center',
              justifyItems: 'center',
              mb: { xs: 10, md: 10, lg: 10 }
            }}
          >
            <Avatar alt='Deepanshu Chalia' src="/Deepc.jpg" 
              sx={{ 
                width: { xs: 400, md: 450 }, 
                height: { xs: 400, md: 450 }, 
                boxShadow: '4px 4px 8px rgba(0,0,0,0.25)',
                position: 'relative'
              }} />
            <Stack direction={'column'} width={'100%'} spacing={2} sx={{ alignItems: 'center' }} > 
                <Fade in={fadeChecked} timeout={2000} style={{ transitionDelay: fadeChecked ? '0ms' : '2000ms' }}>
                <Box sx={{
                  // display: 'flex',
                  // flexDirection: { xs: 'column', md: 'row' }
                }}>
                  <Effect value="Deepanshu Chalia" />
                </Box>
              </Fade>
              
              <Typography sx={{ opacity: 0.7 }} color={'grey'} variant='h4'>Aspiring software engineer eager to tackle challenges effectively and efficiently.</Typography>
            </Stack>
          </Box>

          <Stack 
            sx={{ 
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button 
              variant="conatined"
              onClick={() => handleScroll('portfolio')}
              sx={{ 
                width: '35%',
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
              Learn about my experience
            </Button>
            </Stack>
          </section>

          <Divider sx={{ margin: 10 }} ></Divider>

          {/* Experience starts */}
          <section id='portfolio' >
          <Grid container rowSpacing={5} columnSpacing={2} ref={boxRef1} flexWrap={'wrap'} margin={2}>

            <Grow in={checked1} style={{ transformOrigin: '0 0 0' }} {...(checked1 ? { timeout: 500 } : {})}>
              <Grid item xs={12} md={6} lg={4} >
                <CardActionArea 
                  sx={{ 
                    minHeight: 400, 
                    minHeight: 400, 
                    borderRadius: 5, 
                    alignContent: 'center'
                  }} 
                  href='https://github.com/Headstarter-fellowship-projects/flashcard-saas/tree/Deep'
                >
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>SaaS Platform</strong>
                    </Typography>
                    <Typography align='center' variant="h6" color="text.secondary">
                      Created a SaaS platform using Next.js, Clerk, Stripe, and Firebase, using AI for personalized learning and secure payment processing.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grow>

            <Grow in={checked1} style={{ transformOrigin: '0 0 0' }} {...(checked1 ? { timeout: 1000 } : {})}>
              <Grid item xs={12} md={6} lg={4} >
                <CardActionArea  sx={{ minWidth: 500, minHeight: 400, borderRadius: 5, alignContent: 'center' }} href='https://github.com/Headstarter-fellowship-projects/ai_customer/tree/Deep' >
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Chatbot</strong>
                    </Typography>
                    <Typography align='center' variant="h6" color="text.secondary">
                    Developed a tailored conversational AI system using Next.js and OpenAI incorporating user authentication with Firebase for data storage
                    </Typography>
                  </CardContent>
                </CardActionArea>  
              </Grid>
            </Grow>

            <Grow in={checked1} style={{ transformOrigin: '0 0 0' }} {...(checked1 ? { timeout: 1500 } : {})}>
              <Grid item xs={12} md={6} lg={4}>
                <CardActionArea sx={{ minWidth: 500, minHeight: 400, borderRadius: 5, alignContent: 'center' }} href='https://github.com/chalia082/Inventory-Management-System' >
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Inventory Manager</strong>
                    </Typography>
                    <Typography align='center' variant="h6" color="text.secondary">
                    Developed a robust inventory management system using Next.js, React, Firebase, and Vercel for efficient stock tracking and management.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grow>

            <Grow in={checked2} style={{ transformOrigin: '0 0 0' }} {...(checked2 ? { timeout: 500 } : {})}>
              <Grid item xs={12} md={6} lg={4}>
                <CardActionArea sx={{ minWidth: 500, minHeight: 400, borderRadius: 5, alignContent: 'center' }} href='https://www.linkedin.com/in/deep-chalia/details/experience' >
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Research Assistant</strong>
                    </Typography>
                    <Typography align='center' variant="h6" color="text.secondary">
                    Created graph visualization dashboards using React and NodeJS for LLM applications.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grow>

            <Grow in={checked2} style={{ transformOrigin: '0 0 0' }} {...(checked2 ? { timeout: 1000 } : {})}>
              <Grid item xs={12} md={6} lg={4}>
                <CardActionArea sx={{ minWidth: 500, minHeight: 400, borderRadius: 5, alignContent: 'center' }} href='https://www.linkedin.com/in/deep-chalia/details/experience'>
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Teaching Assistant</strong>
                    </Typography>
                    <Typography align='center' variant="h6" color="text.secondary">
                    Developed and taught labs to enhance programming skills for students in embedded systems.                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grow>

            <Grow in={checked2} style={{ transformOrigin: '0 0 0' }} {...(checked2 ? { timeout: 1500 } : {})}>
              <Grid item xs={12} md={6} lg={4}>
                <CardActionArea sx={{ minWidth: 500, minHeight: 400, borderRadius: 5, alignContent: 'center' }} href='https://www.linkedin.com/in/deep-chalia/details/experience' >
                  <CardContent >
                    <Typography align='center' gutterBottom variant="h4" component="div">
                      <strong>Power Station Research</strong>
                    </Typography>
                    <Typography align='center' variant="h6" color="text.secondary">
                    Analyzed the electricity transmission process, identifying improvement opportunities.                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grow>

          </Grid>
          </section>
          {/* Experience ends */}


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
              In a rapidly advancing digital era, powered by Gen-AI, I envision data as the fundamental building block of tomorrow. I'm Deepanshu Chalia, eager to contribute my skills to shaping this future.
            </Typography>
          </Stack> 

          <Divider sx={{ margin: 10 }} ></Divider>

          {/* Journey starts */}
          <section id='journey'>
          <Grid container rowSpacing={5} columnSpacing={3} ref={boxRef2} flexWrap={'wrap'}>

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
              <Grid item md={6} xs={12} display={'flex'} justifyContent={'flex-end'} >
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
              <Grid item md={6} xs={12} display={'flex'} justifyContent={'flex-start'} >
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
          </section>
        {/* Journey ends */}

        <section id='contact'>
        <Box display={'flex'} width={'100%'} mt={20} mb={5} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} >
          <Box>
            <IconButton color='inherit' target='_blank'  href='https://github.com/chalia082' ><GitHubIcon fontSize='large' /></IconButton>
            <IconButton color='inherit' target='_blank' href='https://www.linkedin.com/in/deep-chalia/' ><LinkedIn fontSize='large' /></IconButton>
            <IconButton color='inherit' target='_blank' href='https://x.com/ChaliaDeepanshu' ><X fontSize='large' sx={{ '&:hover': {color: 'black '} }} /></IconButton>
            <IconButton color='inherit' target='_blank' href='https://www.instagram.com/deepanshu.chalia/' ><Instagram fontSize='large' /></IconButton>
            <IconButton color='inherit' target='_blank' href='https://www.facebook.com/deepc82/' ><Facebook fontSize='large' /></IconButton>
          </Box>
          
          <Typography variant='caption' sx={{ color: 'black' }}> © Deepc. All rights reserved</Typography>
        </Box>
        </section>
        </ThemeProvider>
      </AppRouterCacheProvider>
      </Container>
  );
}

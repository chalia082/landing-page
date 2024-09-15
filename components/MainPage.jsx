

import Effect from "@/components/ui/fadetext";
import { Box, Button, Fade, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function MainPage() {

    const [fadeChecked, setFadeChecked] = useState(false)

    useEffect(() => {
        setFadeChecked(true)
    }, [])

    const handleScroll = (sectionName) => {
        const section = document.getElementById(sectionName)
        section.scrollIntoView({ behavior: 'smooth' })
    }

    return (
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
                <Box
                    component="img"
                    sx={{
                        height: "auto",
                        width: "auto",
                        maxHeight: { xs: 200, sm: 300, md: 350 },
                        maxWidth: { xs: 200, sm: 300, md: 350 },
                        borderRadius: '50%',
                    }}
                    alt="Descriptive Alt Text"
                    src="/Deepc.jpg"
                />
                <Stack direction={'column'} spacing={2} sx={{ alignItems: 'center' }} > 
                    <Fade in={fadeChecked} timeout={2000} style={{ transitionDelay: fadeChecked ? '0ms' : '2000ms' }}>
                        <Box>
                            <Stack direction={{ md:'col', lg: 'col' }} spacing={3} display={'flex'} justifyContent={"center"}>
                                <Typography variant='h1' sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'left' } }}>Hello, I&apos;m</Typography>
                                <Effect value="Deepanshu Chalia" />
                            </Stack>
                        </Box>
                    </Fade>
                    <Typography sx={{ opacity: 0.7, textAlign: { xs:'center', sm: 'center', md: 'center', lg: 'left'}, fontWeight: 'light' }} color={'grey'} variant='h4'>Aspiring software engineer eager to tackle challenges effectively and efficiently.</Typography>
                </Stack>
            </Box>


            <Button 
                variant="conatined"
                onClick={() => handleScroll('portfolio')}
                fullWidth
                sx={{ 
                
                    fontWeight: 'light',
                    textAlign: 'center',
                    backgroundColor: 'inherit',
                    margin: 0.5,
                    borderRadius: 10,
                    fontSize: 35,
                    transition: 'background-image 1s ease-in-out 1s, color 0.5s ease-in-out',
                    ':hover': {
                        backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                        color: 'white', 
                    },
                    mb: 10
                }}
            >
                Learn about my experience
            </Button>
            
        </section>
    )
}

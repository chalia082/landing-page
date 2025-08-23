import { Box, CardActionArea, CardContent, Grid, Grow, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const experiences = [
    {
        title: 'E-commerce',
        description: 'Full‑stack e‑commerce app with Django REST + JWT backend and a responsive React + Vite frontend, featuring secure checkout and order tracking.',
        href: 'https://chalia082.github.io/'
    },
    {
        title: 'Text-2-SQL Agent',
        description: 'AI-powered platform turning natural language into accurate SQL with real-time insights and modern UI.',
        href: 'https://github.com/chalia082/text-2-sql'
    },
    {
        title: 'Cynsus',
        description: 'Built an MVP connecting entrepreneurs with investors through a secure, AI-driven platform using Next.js, OpenAI, and Firebase.',
        href: 'https://www.cynsus.io/'
    },
    {
        title: 'Student Dashboard',
        description: 'Built a student dashboard for LMS using React and NodeJS to visualize learning data and streamline academic tracking.',
        href: 'https://nextjs-tailwind-react.vercel.app/dashboard'
    },
    // {
    //     title: 'Teaching Assistant',
    //     description: 'Developed and taught labs to enhance programming skills for students in embedded systems.',
    //     href: 'https://www.linkedin.com/in/deep-chalia/details/experience'
    // },
    // {
    //     title: 'Power Station Research',
    //     description: 'Analyzed the electricity transmission process, identifying improvement opportunities.',
    //     href: 'https://www.linkedin.com/in/deep-chalia/details/experience'
    // }
]

export default function Portfolio() {

    const [checked, setChecked] = useState(false)
    const boxRef = useRef(null)

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setChecked(true)
        } 
        }, {
        threshold: 0.2
        }
    )

    if (boxRef.current) {
        observer.observe(boxRef.current)
    }

    return () => {
        if (boxRef.current) {
        observer.unobserve(boxRef.current)
        }
    }
    }, [boxRef])


    
    return (
        <Box>
            <Grid container ref={boxRef} flexWrap={'wrap'} columnSpacing={2} rowSpacing={2}>
                {experiences.map((experience, index) => (
                    <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})} key={index}>
                        <Grid item xs={12} sm={6} md={4} lg={4} 
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} 
                        >
                            <CardActionArea 
                                sx={{ 
                                    minHeight: 250,
                                    maxWidth: { xs: '70vw' },
                                    borderRadius: 5, 
                                    border: 1,
                                    alignContent: 'center' 
                                }} 
                                href={experience.href}
                                target="_blank"
                            >
                                <CardContent >
                                    <Typography align='center' gutterBottom variant="h4" component="div">
                                        {experience.title}
                                    </Typography>
                                    <Typography align='center' variant="h6" color="text.secondary" sx={{ fontWeight: 'light' }}>
                                        {experience.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                    </Grow>
                ))}

            </Grid>
        </Box>
    )
}

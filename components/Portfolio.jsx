import { Box, CardActionArea, CardContent, Grid, Grow, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const experiences = [
    {
        title: 'SaaS Platform',
        description: 'Created a SaaS platform using Next.js, Clerk, Stripe, and Firebase, using AI for personalized learning and secure payment processing.',
        href: 'https://github.com/Headstarter-fellowship-projects/flashcard-saas/tree/Deep'
    },
    {
        title: 'Chatbot',
        description: 'Developed a tailored conversational AI system using Next.js and OpenAI incorporating user authentication with Firebase for data storage',
        href: 'https://github.com/Headstarter-fellowship-projects/ai_customer/tree/Deep'
    },
    {
        title: 'Inventory Manager',
        description: 'Developed a robust inventory management system using Next.js, React, Firebase, and Vercel for efficient stock tracking and management.',
        href: 'https://github.com/chalia082/Inventory-Management-System'
    },
    {
        title: 'Research Assistant',
        description: 'Created graph visualization dashboards using React and NodeJS for LLM applications.',
        href: 'https://www.linkedin.com/in/deep-chalia/details/experience'
    },
    {
        title: 'Teaching Assistant',
        description: 'Developed and taught labs to enhance programming skills for students in embedded systems.',
        href: 'https://www.linkedin.com/in/deep-chalia/details/experience'
    },
    {
        title: 'Power Station Research',
        description: 'Analyzed the electricity transmission process, identifying improvement opportunities.',
        href: 'https://www.linkedin.com/in/deep-chalia/details/experience'
    }
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
        threshold: 0.3
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

'use client';

import { CardActionArea, CardContent, CardMedia, Grid, Grow, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const journeys = [
    {
        title: 'Software Developer',
        orgainzation: 'Keelworks Org.',
        period: '2024-Present',
        image: '/keelworks.jpg',
        link: 'https://www.linkedin.com/company/keelworks-foundation/mycompany/'

    },
    {
        title: 'Software Engineer Fellow',
        orgainzation: 'Headstarter Co.',
        period: '2024 (July-August)',
        image: '/headstarter.png',
        link: 'https://www.linkedin.com/company/headstarterai/'
    },
    {
        title: 'Master of Science ',
        orgainzation: 'Computer Engineering',
        period: '2022-2024',
        image: '/SMU_logo.png',
        link: 'https://www.linkedin.com/school/smulyle/'
    },
    {
        title: 'Junior Developer ',
        orgainzation: 'J.S. Auto Pvt Ltd',
        period: '2021-2022',
        image: '/jsa.jpg',
        link: 'https://www.linkedin.com/company/j-s-auto-pvt-ltd/'
    },
    {
        title: 'Bachelor of Technology ',
        orgainzation: 'Electrical Engineering',
        period: '2017-2021',
        image: '/pec-logo.png',
        link: 'https://www.linkedin.com/school/punjab-engineering-college/'
    }
]

export default function Journey() {

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
        <Grid container rowSpacing={5} columnSpacing={3} ref={boxRef} flexWrap={'wrap'} >
            {journeys.map((journey, idx) => (
                <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 500 } : {})} key={idx}>
                    <Grid item md={4} sm={6} xs={12}>
                        <CardActionArea 
                            sx={{ 
                                minHeight: 350, 
                                borderRadius: 5 ,
                                border: 1,
                            }} 
                            href={journey.link} >
                                <CardMedia 
                                    component={'img'}
                                    sx={{ 
                                        maxHeight: '15em',
                                        borderRadius: 5,
                                        minHeight: '15em' 
                                    }}
                                    image={journey.image}
                                />
                                <CardContent>
                                    <Stack textAlign={'center'}>
                                        <Typography variant="h5" >{journey.title}</Typography>
                                        <Typography variant="body">{journey.orgainzation}</Typography>
                                        <Typography variant="caption">{journey.period}</Typography>

                                    </Stack>
                                </CardContent>
                        </CardActionArea>
                    </Grid>
                </Grow>
            ))}
        </Grid>
    )
}
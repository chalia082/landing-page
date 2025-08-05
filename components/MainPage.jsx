

import Effect from "@/components/ui/fadetext";
import { Box, Button, Fade, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

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
				<Stack direction={'column'} spacing={2} sx={{ alignItems: { lg: 'left'} }} > 
					<Fade in={fadeChecked} timeout={2000} style={{ transitionDelay: fadeChecked ? '0ms' : '2000ms' }}>
						<Box>
							<Stack direction={{ md:'col', lg: 'col' }} spacing={3} display={'flex'} justifyContent={"center"}>
								<Typography variant='h1' sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'left' } }}>Hello, I&apos;m</Typography>
								<Effect value="Deepanshu Chalia" />
							</Stack>
						</Box>
					</Fade>
					<Typography sx={{ height:50, opacity: 0.7, fontWeight: 'light', textAlign: { xs: 'center', sm:'center', md: 'center', lg: 'left' } }} color={'grey'} variant='h5'>
						<TypewriterComponent
							options={{
								strings: [
									'<strong>Programming</strong>: Python, JavaScript, Java, SQL, C/C++, TypeScript',
									'<strong>Frontend/Backend Frameworks</strong>: HTML/CSS, React, Next.js, Node.js, Flask, Express, Django',
									'<strong>APIs and Libraries</strong>: Axios, RestAPI, OpenAI, OpenCV, Postman, Clerk, Stripe',
									'<strong>Databases and Data Management</strong>: MongoDB, Firebase, MySQL, PostgreSQL',
									'<strong>UI</strong>: Figma, MaterialUI, Tailwind CSS'
								],
								autoStart: true,
								loop: true,
								deleteSpeed: 10,
								delay: 40,
							}}
						/>
					</Typography>
				</Stack>
			</Box>
			<Box display={'flex'} justifyContent={'center'}>
					<Button 
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
									mb: 10
							}}
					>
							Explore
					</Button>
			</Box>
		</section>
	)
}

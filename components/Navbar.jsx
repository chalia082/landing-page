import { ThemeProvider } from "@emotion/react";
import glowBorder from "./ui/glowBorder";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";


export default function Navbar() {

    const handleScroll = (sectionName) => {
        const section = document.getElementById(sectionName)
        section.scrollIntoView({ behavior: 'smooth' })
    }
    
    return (
        <ThemeProvider theme={glowBorder}>
            <AppBar>
            <Toolbar disableGutters sx={{ paddingLeft: 0.5, paddingRight: 0.5 }} >    
                <Stack display='flex' direction="row" spacing={1} >
                    <Button onClick={() => handleScroll('home')}>Home</Button>
                    <Button onClick={() => handleScroll('portfolio')}>Portfolio</Button>
                    <Button onClick={() => handleScroll('journey')}>Journey</Button>
                    <Button onClick={() => handleScroll('contact')}>Contact</Button>
                </Stack>        
            </Toolbar>
            </AppBar> 
        </ThemeProvider>
    )
}

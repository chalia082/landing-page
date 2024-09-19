import { ThemeProvider } from "@emotion/react";
import glowBorder from "./ui/glowBorder";
import { AppBar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useThemeContext } from "./ui/ThemeContext";
import { Brightness4, Brightness7, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";


export default function Navbar() {
    const {themeMode, toggleTheme} = useThemeContext();
    const [open, setOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleScroll = (sectionName) => () => {
        const section = document.getElementById(sectionName)
        section.scrollIntoView({ behavior: 'smooth' })
        setOpen(false)
    }

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    } 

    // let lastScrollY = window.scrollY;

    // const handleScrollDirection = () => {
    //     if (window.scrollY < lastScrollY) {
    //         setShowNavbar(true);
    //     } else {
    //         setShowNavbar(false);
    //     }
    // };

    // useEffect(() => {
    //     if (isSmallScreen) {
    //         window.addEventListener('scroll', handleScrollDirection);
    //         return () => {
    //             window.removeEventListener('scroll', handleScrollDirection);
    //         };
    //     }
    // }, [isSmallScreen]);

    if (isSmallScreen) {
        return (
            <Box sx={{
                display: 'flex',
                mt: '1em',
                mr: '1em',
                position: 'fixed',
                justifyContent: 'flex-end',
                top: 0,
                zIndex: 1000,
                backgroundColor: theme.palette.background.default,
            }}>
                <Menu onClick={toggleDrawer(true)} aroa  />
                <Drawer 
                    open={open} 
                    onClose={toggleDrawer(false)}
                    anchor="top"
                >
                    <List>
                        {['home', 'portfolio', 'journey', 'contact'].map((text, index) => (
                            <ListItem key={index}>
                                <ListItemButton onClick={handleScroll(text)}>
                                    <ListItemText sx={{ textTransform: 'capitalize' }} primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        <ListItem>
                        <ListItemButton onClick={toggleTheme}>
                                    {themeMode === 'light' ? <Brightness7 /> : <Brightness4 />}
                                </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>           
            </Box>
            
        )
    }
    
    return (
        <ThemeProvider theme={glowBorder}>
            <AppBar>
                <Toolbar disableGutters sx={{ paddingLeft: 0.5, paddingRight: 0.5 }} >    
                    <Stack display='flex' direction="row" spacing={1} >
                        {['home', 'portfolio', 'journey', 'contact'].map((text, index) => (
                            <Button key={index} onClick={handleScroll(text)}>{text}</Button>
                        ))}
                    </Stack>   
                    <Button onClick={toggleTheme} sx={{ marginLeft: 'auto' }}>
                    {themeMode === 'light' ? <Brightness7 /> : <Brightness4 />}
                    </Button>     
                </Toolbar>
            </AppBar> 
        </ThemeProvider>
    )
}

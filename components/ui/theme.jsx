'use client';
import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollBehavior : 'smooth',
                }
            }
        }
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollBehavior : 'smooth',
                }
            }
        }
    }
})

const themes = {
    light: responsiveFontSizes(lightTheme),
    dark: responsiveFontSizes(darkTheme)
}

export default themes;

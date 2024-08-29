'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    // palette: {
    //     mode: 'light',
    // },
});

// sx={{ 
//     bgcolor: 'transparent', 
//     color: 'black', border: '2px solid #a63b35', alignItems: 'center', marginTop: 3, borderRadius: 10, width: '25%', marginRight: '37%' }}

// const glowBorder = createTheme({
//     components: {
//         MuiAppBar: {
//             styleOverrides: {
//                 root: {
//                     bgcolor: 'transparent',
//                     color: 'black',
//                     border: '2px solid #a63b35'
//                 }
//             }
//         }
//     }
// })

export default theme;

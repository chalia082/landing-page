import { createTheme } from '@mui/material/styles';

const glowBorder = createTheme({
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    marginTop: 20,
                    alignItems: 'center',
                    backgroundColor: '#4158D0',
                    backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                    filter: 'brightness(120%)',
                    '&::before': {
                        zIndex: -1,
                        position: 'absolute',
                        content: "''",
                        width:'390px',
                        height: '50px',
                        backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                        filter: 'blur(20px)'
                    },
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    position: 'inherit',
                    backgroundColor: 'white',
                    filter: 'brightness(120%)',
                    borderRadius: 40,
                    backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                    filter: 'brightness(120%)',
                },
                
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'black', 
                    fontSize: 20, 
                    fontWeight: 'light',
                    textTransform: 'capitalize'
                }
            }
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    borderRadius: 40,
                    height: 57,
                    padding: 8
                }
            }
        },
        
    }
})

export default glowBorder

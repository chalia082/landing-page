import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, IconButton, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box display={'flex'} width={'100%'} mt={20} mb={5} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} >
            <Box>
                <IconButton color='inherit' target='_blank' href='https://github.com/chalia082' ><GitHubIcon fontSize='large' /></IconButton>
                <IconButton color='inherit' target='_blank' href='https://www.linkedin.com/in/deep-chalia/' ><LinkedIn fontSize='large' /></IconButton>
                <IconButton color='inherit' target='_blank' href='https://x.com/ChaliaDeepanshu' ><X fontSize='large' sx={{ '&:hover': {color: 'black '} }} /></IconButton>
                <IconButton color='inherit' target='_blank' href='https://www.instagram.com/deepanshu.chalia/' ><Instagram fontSize='large' /></IconButton>
                <IconButton color='inherit' target='_blank' href='https://www.facebook.com/deepc82/' ><Facebook fontSize='large' /></IconButton>
            </Box>
            <Typography variant='caption' sx={{ color: 'black' }}> © Deepc. All rights reserved</Typography>
        </Box>
    )
}

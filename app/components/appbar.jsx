import React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  '--rotate': '132deg',
  '--card-height': '65vh',
  '--card-width': 'calc(var(--card-height) / 1.5)',

  background: '#191c29',
  width: 'var(--card-width)',
  height: 'var(--card-height)',
  padding: '3px',
  position: 'relative',
  borderRadius: '6px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex',
  fontSize: '1.5em',
  color: 'rgb(88 199 250 / 0%)',
  cursor: 'pointer',
  fontFamily: 'cursive',

  '&:hover': {
    color: 'rgb(88 199 250 / 100%)',
    transition: 'color 1s',
  },

  '&:hover::before, &:hover::after': {
    animation: 'none',
    opacity: 0,
  },

  '&::before': {
    content: '""',
    width: '104%',
    height: '102%',
    borderRadius: '8px',
    backgroundImage: 'linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2)',
    position: 'absolute',
    zIndex: -1,
    top: '-1%',
    left: '-2%',
    animation: 'spin 2.5s linear infinite',
  },

  '&::after': {
    position: 'absolute',
    content: '""',
    top: 'calc(var(--card-height) / 6)',
    left: 0,
    right: 0,
    zIndex: -1,
    height: '100%',
    width: '100%',
    margin: '0 auto',
    transform: 'scale(0.8)',
    filter: 'blur(calc(var(--card-height) / 6))',
    backgroundImage: 'linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2)',
    opacity: 1,
    transition: 'opacity .5s',
    animation: 'spin 2.5s linear infinite',
  },

  '@keyframes spin': {
    '0%': {
      '--rotate': '0deg',
    },
    '100%': {
      '--rotate': '360deg',
    },
  },
}));

export default function MyAppBar() {
  return (
    <StyledAppBar position="static">
      
    </StyledAppBar>
  );
}
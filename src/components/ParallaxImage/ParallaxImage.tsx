import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";

const ParallaxImage = ({children}: { children: JSX.Element }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log("translateY(" + (scrollPosition * 0.01) + "%)")

  return (
    <>
      <Box overflow='hidden' width='100%' height='500px'>
        <img src={'assets/kiloren.png'} height={'150%'} width={'100%'}
             style={{transform: "translateY(" + (scrollPosition * -0.016) + "%)", objectFit: 'cover'}}
             alt={'kiloren'}/>
      </Box>
      {children}
      <Box overflow='hidden' width='100%' height='500px'>
        <img
          src={'assets/stormtroopers.jpg'} alt={'storm'} height={'150%'} width={'100%'}
          style={{transform: "translateY(" + (scrollPosition * -0.016+25) + "%)", objectFit: 'cover'}}/>
      </Box>
    </>
  )
};

export default ParallaxImage;
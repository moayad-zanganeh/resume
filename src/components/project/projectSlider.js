import { useEffect, useState } from 'react';
import { Box, Card, CardMedia, Typography, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  { src: 'project/sina sae.jpg', title1: 'Sina Sae',  link: "https://sina-sae.vercel.app/" },
  { src: 'project/Music.png', title1: 'Music Streaming', link: "https://music-streaming-gamma.vercel.app/" },
  { src: 'project/famila pro (2).png', title1: 'Famila Pro',  link: "https://familapro.com/" },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width:425px)');
  const isSmallMobile = useMediaQuery('(max-width:375px)');

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        mx: 'auto',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: "100%", sm: "90%", md: "83%" },
          maxWidth: 1200,
          height: isSmallMobile ? 280 : isMobile ? 320 : 420,
          perspective: '2500px',
          right: { xs: "0", sm: "0", md: "-2%" }
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            width: { xs: 28, sm: 32 },
            height: { xs: 28, sm: 32 },
            position: 'absolute',
            left: { xs: 5, sm: 0 },
            zIndex: 2,
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.4)' },
          }}
        >
          <ArrowBackIosNewIcon fontSize={isMobile ? "small" : "medium"} />
        </IconButton>

        {images.map((image, index) => {
          const modOffset = (index - currentIndex + images.length) % images.length;
          let show = false;
          
          if (isMobile) {
            show = modOffset === 0;
          } else {
            show = [0, 1, images.length - 1].includes(modOffset);
          }

          if (!show) return null;

          let scale = 0.7;
          let rotate = 0;
          let translateX = 0;
          let zIndex = 0;

          if (modOffset === 0) {
            scale = 1;
            rotate = 0;
            translateX = 0;
            zIndex = 5;
          } else if (modOffset === 1 || modOffset === images.length - 1) {
            scale = 0.8;
            rotate = modOffset === 1 ? 30 : -30;
            translateX = modOffset === 1 ? (isMobile ? 160 : 240) : (isMobile ? -160 : -240);
            zIndex = 3;
          }

          const transformStyles = `translateX(${translateX}px) scale(${scale}) rotateY(${rotate}deg)`;

          return (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                transform: transformStyles,
                transition: 'transform 0.6s ease',
                zIndex,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: isSmallMobile ? 200 : isMobile ? 220 : 220,
                height: isSmallMobile ? 240 : isMobile ? 260 : 250,
                cursor: 'pointer',
              }}
            >
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Card
                  sx={{
                    width: '100%',
                    height: isSmallMobile ? '180px' : isMobile ? '200px' : '200px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                    backgroundColor: '#121212',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image.src}
                    alt={image.title1}
                    sx={{ height: '100%', objectFit: 'cover' }}
                  />
                </Card>
                <Box
                  sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#fff',
                      fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
                      textAlign: 'center',
                    }}
                  >
                    {image.title1}
                  </Typography>
                </Box>
              </a>
            </Box>
          );
        })}

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: { xs: 5, sm: 0 },
            zIndex: 2,
            color: '#fff',
            width: { xs: 28, sm: 32 },
            height: { xs: 28, sm: 32 },
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.4)' },
          }}
        >
          <ArrowForwardIosIcon fontSize={isMobile ? "small" : "medium"} />
        </IconButton>
      </Box>
    </Box>
  );
}
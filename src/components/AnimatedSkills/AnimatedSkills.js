"use client";
import { useEffect, useState, useRef } from "react";
import { Box, Typography, LinearProgress, Grid } from "@mui/material";

const frontendSkills = [
  { name: "HTML", value: 85 },
  { name: "CSS", value: 70 },
  { name: "JavaScript", value: 70 },
  { name: "Git & GitHub", value: 60 },
  { name: "SASS / SCSS", value: 70 },
  { name: "Bootstrap", value: 70 },
  { name: "React.js", value: 70 },
];

const otherSkills = [
  { name: "Next.js", value: 75 },
  { name: "Vite", value: 60 },
  { name: "Tailwind", value: 75 },
  { name: "Material UI", value: 75 },
  { name: "AJAX", value: 40 },
  { name: "App Router", value: 60 },
  { name: "SQL", value: 20 },
];

export default function AnimatedSkills() {
  const allSkills = [...frontendSkills, ...otherSkills];
  const [progress, setProgress] = useState(allSkills.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    let frame;
    const start = Date.now();
    const duration = 2000;

    const animate = () => {
      const elapsed = Date.now() - start;
      const ratio = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - ratio, 4);
      setProgress(allSkills.map((s) => easeOut * s.value));

      if (ratio < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
  };

  const renderSkill = (skill, index) => (
    <Box key={index} sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, fontSize: { xs: "0.9rem", md: "1.1rem" } }}
        >
          {skill.name}
        </Typography>
        <Typography
          sx={{
            color: "#1976d2",
            fontWeight: 700,
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            minWidth: "45px",
          }}
        >
          {Math.round(progress[index])}%
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress[index]}
        sx={{
          height: 12,
          borderRadius: 6,
          backgroundColor: "#f0f0f0",
          "& .MuiLinearProgress-bar": {
            background: "linear-gradient(90deg, #42a5f5, #1976d2, #1565c0)",
            borderRadius: 6,
            transition: "transform 0.3s ease-out",
          },
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      />
    </Box>
  );

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "96vw",
        margin: "0 auto",
        padding: { xs: 2, md: 4 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        minHeight: "100vh",
        justifyContent: "flex-start"
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        color="primary"
        sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
      >
        Skills
      </Typography>
      <Box sx={{display:"flex",alignItems:"center"}}>
        <img
          src="photo_2025-10-21_12-31-12.jpg"
          style={{ width: "40%", borderRadius: "16px",height:"64vh" }}
        />
        <Grid
          container
          spacing={4}
          sx={{
            width: "96vw",
            textAlign: "left",
            display: "flex",
            gap: 3,
            p: 3,
          }}
        >
          <Grid item xs={12} md={6} sx={{ width: "30vw" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {frontendSkills.map((s, i) => renderSkill(s, i))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: "30vw" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {otherSkills.map((s, i) =>
                renderSkill(s, i + frontendSkills.length)
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

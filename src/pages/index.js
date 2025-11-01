"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Box, Typography, Avatar, Card, CardMedia, CardContent } from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import "fullpage.js/dist/fullpage.css";
import AnimatedSkills from "@/components/AnimatedSkills/AnimatedSkills";
import ProjectSlider from "@/components/project/projectSlider";

const fullpage = dynamic(() => import("fullpage.js"), { ssr: false });

const iconStyle = {
  width: 48,
  height: 48,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

function ScrollIndicator() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "30px",
          height: "50px",
          border: "2px solid #f2b827",
          borderRadius: "25px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "8px",
            left: "50%",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#f2b827",
            transform: "translateX(-50%)",
            animation: "scrollMove 1.5s infinite",
            "@keyframes scrollMove": {
              "0%": { opacity: 1, top: "8px" },
              "50%": { opacity: 0.4, top: "25px" },
              "100%": { opacity: 1, top: "8px" },
            },
          }}
        />
      </Box>
      <Typography
        variant="caption"
        sx={{
          mt: 1,
          color: "#f2b827",
          fontWeight: 500,
          letterSpacing: "1px",
          animation: "fadeText 3s ease-in-out infinite",
          "@keyframes fadeText": {
            "0%,100%": { opacity: 0.3 },
            "50%": { opacity: 1 },
          },
        }}
      >
        Scroll
      </Typography>
    </Box>
  );
}

export default function Home() {
  useEffect(() => {
    let fullpageInstance;
    if (typeof window !== "undefined") {
      import("fullpage.js").then((fp) => {
        fullpageInstance = new fp.default("#fullpage", {
          autoScrolling: true,
          scrollHorizontally: true,
          navigation: false,
          anchors: ["home", "about", "skills", "projects", "contact"],
          // اضافه کردن این تنظیمات برای حل مشکل کلیک
          scrollingSpeed: 800,
          fitToSection: true,
          fitToSectionDelay: 1000,
        });
      });
    }
    return () => {
      if (fullpageInstance && fullpageInstance.destroy) {
        fullpageInstance.destroy("all");
      }
    };
  }, []);

  return (
    <div id="fullpage">
      <div className="section">
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            height: "100vh",
          }}
        >
          <Avatar
            src="/photo_2025-10-21_12-31-05.jpg"
            alt="Moayad Zangane"
            sx={{
              width: 150,
              height: 150,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              border: "3px solid #1976d2",
            }}
          />
          <Typography variant="h5" sx={{ mt: 2 }}>
            Moayad Zanganeh | Front-End Developer
          </Typography>
          <ScrollIndicator />
        </Box>
      </div>

      <div className="section">
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row-reverse",
            gap: "24px",
            p: "3%",
          }}
        >
          <img
            src="photo_2025-10-21_12-31-02.jpg"
            style={{ width: "36%", borderRadius: "16px" }}
          />
          <Typography
            variant="h5"
            sx={{
              textAlign: "justify",
              fontWeight: 500,
              background: `linear-gradient(270deg,#ff6ec4,#7873f5,#4adede,#ff6ec4)`,
              backgroundSize: "800% 800%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 10s ease infinite",
              "@keyframes gradientShift": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
            }}
          >
            Hi! I'm Moayad Zanganeh, a Computer Engineering student at Islamic
            Azad University, Yadegar e-Imam Khomeini Branch, specializing in
            Front-End Development. My passion for learning new technologies,
            designing modern user interfaces, and problem-solving drives me to
            constantly grow and improve in my programming journey.
          </Typography>
          <ScrollIndicator />
        </Box>
      </div>

      <div className="section" style={{ width: "100%", position: "relative" }}>
        <AnimatedSkills />
        <ScrollIndicator />
      </div>

      <div className="section" style={{ width: "100%", position: "relative" }}>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width:"100vw"
          }}
        >
          <Typography variant="h3" gutterBottom color="primary">
            MY PROJECTS
          </Typography>
          <ProjectSlider />
        </Box>
        <ScrollIndicator />
      </div>

      <div className="section custom-section">
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" gutterBottom color="primary">
            CONTACT INFO
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              width: "100vw",
              gap: "40px",
            }}
          >
            <Box
              component="a"
              href="mailto:moayadzangane@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ...iconStyle,
                color: "#f2b827",
                "&:hover": {
                  backgroundColor: "#d93025",
                  color: "#fff",
                  transform: "scale(1.1)",
                },
              }}
            >
              <FaEnvelope size={24} />
            </Box>
            <Box
              component="a"
              href="https://github.com/moayad-zanganeh"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ...iconStyle,
                color: "#f2b827",
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#fff",
                  transform: "scale(1.1)",
                },
              }}
            >
              <FaGithub size={24} />
            </Box>
            <Box
              component="a"
              href="https://www.linkedin.com/in/moayed-zanganeh-6901a9209/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ...iconStyle,
                color: "#f2b827",
                "&:hover": {
                  backgroundColor: "#0077b5",
                  color: "#fff",
                  transform: "scale(1.1)",
                },
              }}
            >
              <FaLinkedin size={24} />
            </Box>
            <Box
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ...iconStyle,
                color: "#f2b827",
                "&:hover": {
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  color: "#fff",
                  transform: "scale(1.1)",
                },
              }}
            >
              <FaInstagram size={24} />
            </Box>
          </Box>
        </Box>
        <ScrollIndicator />
      </div>
    </div>
  );
}
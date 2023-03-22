import React, { useEffect } from "react";
import { Typography, Grow, Container } from "@mui/material";
import { motion } from "framer-motion";
import WebFont from "webfontloader";
import { useTranslation } from "react-i18next";
import photo from "../../images/photo.png";

const About = () => {
  // Translation
  const { t } = useTranslation();

  // Font Styles
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Comfortaa", "Rubik Glitch"],
      },
    });
  }, []);

  return (
    <Grow in>
      <section id="about" className="h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Container className="text-center">
            <Typography variant="h2" style={{ fontFamily: "Rubik Glitch" }}>
              {t("aboutMessage.part1")}
            </Typography>
          </Container>
          <Container className="!flex flex-row items-center justify-evenly gap-10 ">
            <img className="rounded-full" src={photo} alt="My photo" />
            <Typography
              style={{
                fontFamily: "Droid Sans",
                fontSize: "24px",
                textAlign: "left",
                width: "auto",
              }}
            >
              {t("aboutMessage.part2")}
            </Typography>
          </Container>
        </motion.div>
      </section>
    </Grow>
  );
};

export default About;

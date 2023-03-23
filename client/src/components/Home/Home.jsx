import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography, Grow } from "@mui/material";
import useStyles from "./styles";
import WebFont from "webfontloader";
import { motion } from "framer-motion";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Home = () => {
  // Styles
  const classes = useStyles();

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
    <Grow in id="home">
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Typography
            className={classes.title}
            style={{ fontFamily: "Rubik Glitch" }}
            variant="h3"
          >
            {t("homePage.title")}
            <span style={{ color: "#F96167" }}> Tunahan Kuzucu.</span>
          </Typography>
          <Typography
            className={classes.title}
            style={{ fontFamily: "Comfortaa" }}
            variant="h3"
            color="black"
          >
            {t("homePage.description.part1")}{" "}
            <span className="bg-red-400 rounded-full border-red-400 border-2">
              {t("homePage.description.part2")}{" "}
            </span>
            {t("homePage.description.part3")}
          </Typography>
        </motion.div>
        <ScrollToTop />
      </section>
    </Grow>
  );
};

export default Home;

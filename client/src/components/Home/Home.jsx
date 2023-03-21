import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography, Grow } from "@mui/material";
import useStyles from "./styles";
import javascript from "../../images/javascript.png";
import nodejs from "../../images/nodejs.png";
import react from "../../images/react.png";
import mongodb from "../../images/mongodb.png";
import github from "../../images/github.png";
import gitbash from "../../images/gitbash.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import mysql from "../../images/mysql.png";
import adobexd from "../../images/adobexd.png";
import WebFont from "webfontloader";
import { motion } from "framer-motion";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Home = () => {
  // Styles
  const classes = useStyles();

  // Translation
  const { t } = useTranslation();

  // Changing Images
  const frontEndImages = [javascript, html, react, css];
  const backEndImages = [mysql, nodejs, mongodb];
  const toolImages = [github, adobexd, gitbash];

  //Changing Images State
  const [currentFrontEndImage, setCurrentFrontEndImage] = useState(0);
  const [currentBackEndImage, setCurrentBackEndImage] = useState(0);
  const [currentToolsImage, setCurrentToolsImage] = useState(0);

  // Logo change for front-end languages.
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentFrontEndImage === frontEndImages.length - 1) {
        setCurrentFrontEndImage(0);
      } else {
        setCurrentFrontEndImage(currentFrontEndImage + 1);
      }
    }, 1500);
    return () => clearInterval(interval);
  });

  // Logo change for back-end languages.
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentBackEndImage === backEndImages.length - 1) {
        setCurrentBackEndImage(0);
      } else {
        setCurrentBackEndImage(currentBackEndImage + 1);
      }
    }, 1500);
    return () => clearInterval(interval);
  });

  // Logo change for tools.
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentToolsImage === toolImages.length - 1) {
        setCurrentToolsImage(0);
      } else {
        setCurrentToolsImage(currentToolsImage + 1);
      }
    }, 1500);
    return () => clearInterval(interval);
  });

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

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography, Grow } from "@mui/material";
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
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import Navbar from "../Navbar/Navbar.jsx";
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

  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <Grow in>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Navbar  contactRef={contactRef} projectsRef={projectsRef}/>
        <section className="h-screen flex flex-col items-center justify-center">
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
        </section>
        <Projects ref={projectsRef} />
        <Contact ref={contactRef}/>
      </motion.div>

      {/*    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Container className="h-screen flex flex-col items-center content-center">
            <Projects></Projects>
          </Container>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Container className="h-screen flex flex-col items-center content-center">
            <Contact></Contact>
          </Container>
        </motion.div>
      </Container> */}
      {/* About Message Container 
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ marginTop: "50px" }}
        >
          <Container className={classes.aboutContainer}>
            <Typography
              variant="h5"
              className={classes.text}
              style={{ fontFamily: "Chilanka" }}
            >
              {t("aboutMessage.part1")}
            </Typography>
            <Typography
              variant="h5"
              className={classes.text}
              style={{ fontFamily: "Chilanka" }}
            >
              {t("aboutMessage.part2")}
            </Typography>
          </Container>
        </motion.div>*/}

      {/* Languages and Tools Container 
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{ marginTop: "50px" }}
        >
          <Container className={classes.langContainer}>
            <Container className={classes.frontEndContainer}>
              <Typography
                style={{ fontFamily: "Chilanka" }}
                variant="h4"
                color="beige"
                className={classes.langText}
              >
                {t("languagesMessage.part1")}
              </Typography>
              <Typography>
                <img
                  src={frontEndImages[currentFrontEndImage]}
                  alt="javascript"
                  height="75px"
                />
              </Typography>
            </Container>
            <Container className={classes.backEndContainer}>
              <Typography
                style={{ fontFamily: "Chilanka" }}
                variant="h4"
                color="beige"
                className={classes.langText}
              >
                {t("languagesMessage.part2")}
              </Typography>
              <Typography>
                <img
                  src={backEndImages[currentBackEndImage]}
                  alt="javascript"
                  height="75px"
                />
              </Typography>
            </Container>
            <Container className={classes.toolsContainer}>
              <Typography
                style={{ fontFamily: "Chilanka" }}
                variant="h4"
                color="beige"
                className={classes.langText}
              >
                {t("languagesMessage.part3")}
              </Typography>
              <Typography>
                <img
                  src={toolImages[currentToolsImage]}
                  alt="javascript"
                  height="75px"
                />
              </Typography>
            </Container>
          </Container>
        </motion.div>*/}

      {/* Skills and Competences Container 
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Container className={classes.skillsContainer}>
            {/* Competences 
            <Container className={classes.competencesContainer}>
              <Container className={classes.competenceTitle}>
                <Typography
                  style={{ fontFamily: "Chilanka", color: "beige" }}
                  variant="h4"
                  color="beige"
                  className={classes.skillsTitle}
                >
                  {t("skillsMessage.part1")}
                </Typography>
              </Container>
              <Container className={classes.competenceListContainer}>
                <ul className={classes.competencesList}>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                      className={classes.skillsText}
                    >
                      {t("skillsMessage.competences.part1")}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                      className={classes.skillsText}
                    >
                      {t("skillsMessage.competences.part2")}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                      className={classes.skillsText}
                    >
                      {t("skillsMessage.competences.part3")}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                      className={classes.skillsText}
                    >
                      {t("skillsMessage.competences.part4")}
                    </Typography>
                  </li>
                </ul>
              </Container>
            </Container>

            {/* Soft Skills 
            <Container className={classes.softSkillsContainer}>
              <Container className={classes.softSkillsTitle}>
                <Typography
                  style={{ fontFamily: "Chilanka" }}
                  variant="h4"
                  color="beige"
                  className={classes.skillsTitle}
                >
                  {t("skillsMessage.part2")}
                </Typography>
              </Container>
              <Container className={classes.softSkillsListContainer}>
                <ul className={classes.softSkillsList}>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                      className={classes.skillsText}
                    >
                      {t("skillsMessage.softSkills.part1")}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                      className={classes.skillsText}
                    >
                      {t("skillsMessage.softSkills.part2")}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                      className={classes.skillsText}
                    >
                      {t("skillsMessage.softSkills.part3")}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                      className={classes.skillsText}
                    >
                      {t("skillsMessage.softSkills.part4")}
                    </Typography>
                  </li>
                </ul>
              </Container>
            </Container>
          </Container>
        </motion.div>
      </Container>

      {/* 
        
                
           
              
                <ul>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                    >
                      {t("skillsMessage.softSkills.part1")}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                    >
                      {t("skillsMessage.softSkills.part2")}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                    >
                      {t("skillsMessage.softSkills.part3")}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      style={{ color: "beige", fontFamily: "Droid Sans" }}
                    >
                      {t("skillsMessage.softSkills.part4")}
                    </Typography>
                  </li>
                </ul>
              </Container>
            </Grid>
          </Container>
        </motion.div>*/}
    </Grow>
  );
};

export default Home;

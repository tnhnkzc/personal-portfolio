import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Project from "./Project/Project";
import { Link } from "react-router-dom";
import {
  Container,
  Grow,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import useStyles from "./styles";
import WebFont from "webfontloader";
import { motion } from "framer-motion";
import LoadingSpinner from "../Loading/LoadingSpinner";

const Projects = ({ setCurrentId }) => {
  const projects = useSelector((state) => {
    return state.projects;
  });
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Rubik Glitch", "Comfortaa"],
      },
    });
  }, []);

  const { t } = useTranslation();

  return !projects.length ? (
    <LoadingSpinner />
  ) : (
    <>
      <Grow in id="projects">
        <section className="h-auto md:h-auto flex flex-col items-center justify-between p-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Container className="text-center ">
              <Typography
                variant="h3"
                className="text-black"
                style={{ fontFamily: "Comfortaa" }}
              >
                {t("projectsPage.title")}
              </Typography>
              {user && (
                <Button
                  className={classes.addButton}
                  variant="contained"
                  style={{
                    background: "#330033",
                  }}
                >
                  <Typography
                    component={Link}
                    to="/projects/createProject"
                    className={classes.addButtonText}
                    style={{ fontFamily: "Droid Sans", color: "beige" }}
                  >
                    Add a Project
                  </Typography>
                </Button>
              )}
            </Container>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Grid container spacing={1}>
              {projects.map((project) => {
                return (
                  <Grid key={project._id} item xs={12} sm={6} md={3}>
                    <Project
                      key={project._id}
                      setCurrentId={setCurrentId}
                      project={project}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>
        </section>
      </Grow>
    </>
  );
};

export default Projects;

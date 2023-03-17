import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { deleteProject } from "../../../actions/index";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import WebFont from "webfontloader";

const Project = ({ project, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMouseOver, setMouseOver] = useState(false);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const handleMouseEnter = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };
  const handleDelete = () => {
    dispatch(deleteProject(project._id));
    window.location.reload();
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Comfortaa", "Montserrat"],
      },
    });
  }, []);

  return (
    <Card className={classes.mainContainer}>
      <CardMedia className={classes.media} image={project.selectedFile} />
      <CardContent
        style={{
          background: "#330033",
        }}
      >
        <Typography
          className={classes.projectTitle}
          style={{ fontFamily: "Comfortaa", color: "beige" }}
          variant="h3"
          color="textPrimary"
        >
          {project.title}
        </Typography>
        <Typography
          style={{ fontFamily: "Montserrat", color: "beige" }}
          variant="body1"
          color="white"
        >
          Description: {project.description}
        </Typography>
        <Typography
          style={{ fontFamily: "Montserrat", color: "beige" }}
          variant="body1"
          color="white"
        >
          Tools: {project.tools}
        </Typography>
      </CardContent>
      <CardActions
        className={classes.cardActions}
        style={{
          background: "#330033",
        }}
      >
        {user && (
          <Button
            id="editButton"
            onClick={() => {
              setCurrentId(project._id);
              navigate(`/projects/editProject/${project._id}`);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ color: "beige" }}
          >
            {!isMouseOver ? <MoreHorizIcon cv fontSize="medium" /> : "Edit"}
          </Button>
        )}
        {user && (
          <Button
            onClick={handleDelete}
            startIcon={<DeleteIcon fontSize="small" />}
            style={{ color: "beige" }}
          >
            Delete
          </Button>
        )}

        <a
          className={classes.gitHub}
          target="_blank"
          href={project.gitHubRepo}
          rel="noreferrer"
          style={{ color: "beige" }}
        >
          <GitHubIcon />
        </a>
        <a
          className={classes.siteLink}
          target="_blank"
          href={project.siteLink}
          rel="noreferrer"
          style={{ color: "beige" }}
        >
          <LaunchIcon />
        </a>
      </CardActions>
    </Card>
  );
};

export default Project;
